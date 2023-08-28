import { b as balBrowser } from './browser-9199b5e2.js';
import { b as balIconClose, a as balIconInfoCircle, c as balIconPlus, d as balIconMinus, e as balIconEdit, f as balIconTrash, g as balIconNavGoLeft, h as balIconNavGoRight, i as balIconNavGoDown, j as balIconNavGoUp, k as balIconCaretLeft, l as balIconCaretDown, m as balIconCheck, n as balIconDate, o as balIconDocument, p as balIconUpload, q as balIconMenuBars } from './icons.constant-35253412.js';

const rIC = (callback) => {
  if (balBrowser.hasWindow && 'requestIdleCallback' in window) {
    ;
    window.requestIdleCallback(callback);
  }
  else {
    setTimeout(callback, 32);
  }
};
const wait = (ms = 0) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
};
const debounceEvent = (ev, wait) => {
  const original = ev._original || ev;
  return {
    _original: ev,
    emit: debounce(original.emit.bind(original), wait),
  };
};
const debounce = (func, wait = 0) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};
const hasTagName = (element, tag) => {
  return element && element.tagName && element.tagName === tag.toUpperCase();
};
const isDescendant = (parent, child) => {
  let node = child.parentNode;
  while (node != null) {
    if (node == parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};
const hasParent = (parentTag, child) => {
  let node = child.parentNode;
  while (node != null) {
    if (node.tagName === parentTag.toUpperCase()) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};
const getSibling = (parentTag, child) => {
  const node = parentTag.parentNode;
  return node.querySelector(child);
};
const getAppRoot = (doc) => {
  return doc.querySelector('bal-app') || doc.body;
};
const componentOnReady = (el, callback) => {
  if (el.componentOnReady !== null && el.componentOnReady !== undefined) {
    el.componentOnReady().then((resolvedEl) => callback(resolvedEl));
  }
  else {
    raf(() => callback(el));
  }
};
const raf = (h) => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(h);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(h);
  }
  return setTimeout(h);
};
const transitionEndAsync = (el, expectedDuration = 0) => {
  return new Promise(resolve => {
    transitionEnd(el, expectedDuration, resolve);
  });
};
const transitionEnd = (el, expectedDuration = 0, callback) => {
  let unRegTrans;
  let animationTimeout;
  const opts = { passive: true };
  const ANIMATION_FALLBACK_TIMEOUT = 500;
  const unregister = () => {
    if (unRegTrans) {
      unRegTrans();
    }
  };
  const onTransitionEnd = (ev) => {
    if (ev === undefined || el === ev.target) {
      unregister();
      callback(ev);
    }
  };
  if (el) {
    el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
    el.addEventListener('transitionend', onTransitionEnd, opts);
    animationTimeout = setTimeout(onTransitionEnd, expectedDuration + ANIMATION_FALLBACK_TIMEOUT);
    unRegTrans = () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
        animationTimeout = undefined;
      }
      el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
      el.removeEventListener('transitionend', onTransitionEnd, opts);
    };
  }
  return unregister;
};
const addEventListener = (el, eventName, callback, opts) => {
  return el.addEventListener(eventName, callback, opts);
};
const removeEventListener = (el, eventName, callback, opts) => {
  return el.removeEventListener(eventName, callback, opts);
};
const shallowReady = (el) => {
  if (el) {
    return new Promise(resolve => componentOnReady(el, resolve));
  }
  return Promise.resolve();
};
const deepReady = async (el, full = false) => {
  const element = el;
  if (element) {
    if (element.componentOnReady !== null && element.componentOnReady !== undefined) {
      const stencilEl = await element.componentOnReady();
      if (!full && stencilEl !== null && stencilEl !== undefined) {
        return;
      }
    }
    await Promise.all(Array.from(element.children).map(child => deepReady(child, full)));
  }
};
const waitForComponent = async (el) => {
  await deepReady(el, true);
  await waitAfterFramePaint();
  await waitAfterIdleCallback();
};
const isChildOfEventTarget = async (ev, el, callback) => {
  if (ev && ev.target && el && el !== ev.target && isDescendant(ev.target, el)) {
    callback();
  }
};
const waitForDesignSystem = async (el, _config) => {
  const config = Object.assign({ animated: false, icons: {
      balIconClose,
      balIconInfoCircle,
      balIconPlus,
      balIconMinus,
      balIconEdit,
      balIconTrash,
      balIconNavGoLeft,
      balIconNavGoRight,
      balIconNavGoDown,
      balIconNavGoUp,
      balIconCaretLeft,
      balIconCaretDown,
      balIconCheck,
      balIconDate,
      balIconDocument,
      balIconUpload,
      balIconMenuBars,
    } }, _config);
  const element = el;
  if (element !== null && element !== undefined) {
    await deepReady(element, true);
    const webComponents = Array.prototype.slice
      .call(element.querySelectorAll('*'))
      .filter(el => el.tagName.match(/^bal/i));
    await Promise.all(webComponents.map(c => {
      if (c.configChanged !== null && c.configChanged !== undefined) {
        return c.configChanged(config);
      }
    }));
  }
  await waitAfterFramePaint();
  await waitAfterIdleCallback();
};
const waitAfterFramePaint = () => {
  return new Promise(resolve => raf(() => runHighPrioritizedTask(resolve)));
};
const waitAfterIdleCallback = () => {
  return new Promise(resolve => rIC(() => runHighPrioritizedTask(resolve)));
};
const runHighPrioritizedTask = (callback) => {
  if (balBrowser.hasWindow && 'MessageChannel' in window) {
    const messageChannel = new window.MessageChannel();
    messageChannel.port1.onmessage = callback;
    messageChannel.port2.postMessage(undefined);
  }
  else {
    setTimeout(callback, 32);
  }
};
const waitForRequestIdleCallback = () => {
  console.log('DEPRECATED - use waitAfterIdleCallback instead');
  return waitAfterIdleCallback;
};

export { waitForDesignSystem as a, waitAfterFramePaint as b, componentOnReady as c, debounce as d, waitAfterIdleCallback as e, deepReady as f, getAppRoot as g, wait as h, isDescendant as i, removeEventListener as j, addEventListener as k, raf as l, debounceEvent as m, hasTagName as n, hasParent as o, isChildOfEventTarget as p, rIC as r, shallowReady as s, transitionEndAsync as t, waitForComponent as w };
