'use strict';

const listener = require('./listener-4161102f.js');
const helpers = require('./helpers-83a73189.js');

class BalSwipeListener extends listener.ListenerAbstract {
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
      helpers.rIC(async () => {
        Promise.resolve().then(function () { return require('./contact-5aafb42c.js'); })
          .then(module => {
          this.PointerListenerLib = module.PointerListener;
          resolve();
        })
          .catch(reject);
      });
    });
  }
}

class BalSwipeSubject extends listener.SingleSubject {
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

exports.BalSwipeSubject = BalSwipeSubject;
