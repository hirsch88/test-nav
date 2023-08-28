import { L as ListenerAbstract, a as SingleSubject } from './listener-ea90dc02.js';
import { r as rIC } from './helpers-18cc89f4.js';

class BalSwipeListener extends ListenerAbstract {
  async connect(el) {
    super.connect(el);
    await this.loadLib();
    if (this.PointerListenerLib) {
      this.pointerListener = new this.PointerListenerLib(el, {});
      this.pointerListener.on('swipeleft', () => this.notify({ left: true, right: false }));
      this.pointerListener.on('swiperight', () => this.notify({ left: false, right: true }));
    }
  }
  disconnect() {
    var _a;
    super.disconnect();
    (_a = this.pointerListener) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  async loadLib() {
    return new Promise((resolve, reject) => {
      rIC(async () => {
        import('./contact-984955c7.js')
          .then(module => {
          this.PointerListenerLib = module.PointerListener;
          resolve();
        })
          .catch(reject);
      });
    });
  }
}

class BalSwipeSubject extends SingleSubject {
  constructor() {
    super((observer, data) => {
      if (data) {
        observer.swipeListener(data);
      }
    });
    this.listener = new BalSwipeListener();
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

function ListenToSwipe() {
  return function (target, _propertyKey, _descriptor) {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      this._balSwipeSubject = new BalSwipeSubject();
      this._balSwipeSubject.attach(this);
      return connectedCallback && connectedCallback.call(this);
    };
    target.disconnectedCallback = function () {
      this._balSwipeSubject.detach();
      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}

export { BalSwipeSubject as B, ListenToSwipe as L };
