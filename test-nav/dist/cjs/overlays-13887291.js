'use strict';

const browser = require('./browser-791d6902.js');
const helpers = require('./helpers-83a73189.js');

let lastId = 0;
const BACKDROP = 'backdrop';
const prepareOverlay = (overlay) => {
  if (browser.balBrowser.hasDocument) {
    connectListeners(document);
  }
  const overlayIndex = lastId++;
  overlay.overlayIndex = overlayIndex;
  if (!overlay.el.hasAttribute('id')) {
    overlay.el.id = `bal-overlay-${overlayIndex}`;
  }
};
const getOverlays = (doc, selector) => {
  if (selector === undefined) {
    selector = 'bal-modal,bal-snackbar,bal-toast';
  }
  return Array.from(doc.querySelectorAll(selector)).filter(c => c.overlayIndex > 0);
};
const getOverlay = (doc, overlayTag, id) => {
  const overlays = getOverlays(doc, overlayTag);
  return id === undefined ? overlays[overlays.length - 1] : overlays.find(o => o.id === id);
};
const connectListeners = (doc) => {
  if (lastId === 0) {
    lastId = 1;
    doc.addEventListener('keyup', ev => {
      if (ev.key === 'Escape') {
        const lastOverlay = getOverlay(doc);
        if (lastOverlay) {
          lastOverlay.dismiss(undefined, BACKDROP);
        }
      }
    });
  }
};
const dismiss = async (overlay, data, role, animation) => {
  if (!overlay.presented) {
    return false;
  }
  try {
    overlay.el.style.setProperty('pointer-events', 'none');
    overlay.willDismiss.emit({ data, role });
    await animation();
    overlay.presented = false;
    overlay.didDismiss.emit({ data, role });
  }
  catch (err) {
    overlay.presented = false;
    console.error(err);
  }
  overlay.el.remove();
  return true;
};
const eventMethod = (element, eventName) => {
  let resolve;
  const promise = new Promise(r => (resolve = r));
  onceEvent(element, eventName, (ev) => {
    resolve(ev.detail);
  });
  return promise;
};
const onceEvent = (element, eventName, callback) => {
  const handler = (ev) => {
    helpers.removeEventListener(element, eventName, handler);
    callback(ev);
  };
  helpers.addEventListener(element, eventName, handler);
};

exports.dismiss = dismiss;
exports.eventMethod = eventMethod;
exports.getOverlay = getOverlay;
exports.getOverlays = getOverlays;
exports.prepareOverlay = prepareOverlay;
