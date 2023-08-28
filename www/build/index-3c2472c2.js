import './window-resize.listener-bb290fb3.js';
import { L as ListenerAbstract, a as SingleSubject } from './listener-ea90dc02.js';
import { b as balBrowser } from './browser-9199b5e2.js';
import { d as debounce } from './helpers-18cc89f4.js';

class BalResizeListener extends ListenerAbstract {
  constructor() {
    super(...arguments);
    this.debouncedNotify = debounce(() => this.notify(), 10);
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
      if (balBrowser.hasWindow) {
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

class BalResizeSubject extends SingleSubject {
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

export { ListenToResize as L };
