'use strict';

const listener = require('./listener-4161102f.js');
const browser = require('./browser-791d6902.js');
const helpers = require('./helpers-83a73189.js');

class BalResizeListener extends listener.ListenerAbstract {
  constructor() {
    super(...arguments);
    this.debouncedNotify = helpers.debounce(() => this.notify(), 10);
  }
  connect(el) {
    var _a;
    super.connect(el);
    if (typeof ResizeObserver === 'undefined') {
      return;
    }
    if (this.resizeObserver !== undefined) {
      (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      this.resizeObserver = undefined;
    }
    this.resizeObserver = new ResizeObserver(entries => {
      if (browser.balBrowser.hasWindow) {
        window.requestAnimationFrame(() => {
          if (!Array.isArray(entries) || !entries.length) {
            return;
          }
          this.debouncedNotify();
        });
      }
    });
    this.resizeObserver.observe(el);
  }
  disconnect() {
    var _a;
    super.disconnect();
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.resizeObserver = undefined;
  }
}

class BalResizeSubject extends listener.SingleSubject {
  constructor() {
    super((observer, _data) => {
      observer.resizeListener({});
    });
    this.listener = new BalResizeListener();
  }
  attach(observer) {
    super.attach(observer);
    this.listener.connect(observer.el);
    this.listener.add(info => super.notify(info));
  }
  detach() {
    super.detach();
    this.listener.disconnect();
  }
}

function ListenToResize() {
  return function (target, _propertyKey, _descriptor) {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      this._balResizeSubject = new BalResizeSubject();
      this._balResizeSubject.attach(this);
      return connectedCallback && connectedCallback.call(this);
    };
    target.disconnectedCallback = function () {
      this._balResizeSubject.detach();
      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}

exports.ListenToResize = ListenToResize;
