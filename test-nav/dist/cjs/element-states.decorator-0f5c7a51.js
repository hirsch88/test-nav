'use strict';

const listener = require('./listener-4161102f.js');
const browser = require('./browser-791d6902.js');

class BalElementStateListener extends listener.ListenerAbstract {
  constructor() {
    super(...arguments);
    this.state = BalElementStateListener.DefaultState;
    this.onMouseEnter = () => {
      this.updateState({ hovered: true });
    };
    this.onMouseLeave = () => {
      this.updateState({ hovered: false });
    };
    this.onPointerDown = () => {
      this.updateState({ pressed: true });
    };
    this.onPointerUp = () => {
      this.updateState({ pressed: false });
    };
  }
  connect(el) {
    super.connect(el);
    el.addEventListener('mouseenter', this.onMouseEnter, BalElementStateListener.EventListenerOptions);
    el.addEventListener('mouseleave', this.onMouseLeave, BalElementStateListener.EventListenerOptions);
    el.addEventListener('pointerdown', this.onPointerDown, BalElementStateListener.EventListenerOptions);
    if (browser.balBrowser.hasDocument) {
      document.addEventListener('pointerup', this.onPointerUp, BalElementStateListener.EventListenerOptions);
    }
  }
  disconnect() {
    super.disconnect();
    if (this.el) {
      this.el.removeEventListener('mouseenter', this.onMouseEnter);
      this.el.removeEventListener('mouseleave', this.onMouseLeave);
      this.el.removeEventListener('pointerdown', this.onPointerDown);
      if (browser.balBrowser.hasDocument) {
        document.removeEventListener('pointerup', this.onPointerUp);
      }
    }
  }
  updateState(newState) {
    this.state = Object.assign(Object.assign({}, this.state), newState);
    this.notify(this.state);
  }
}
BalElementStateListener.EventListenerOptions = {
  passive: true,
};
BalElementStateListener.DefaultState = {
  hovered: false,
  pressed: false,
};

class BalElementStateSubject extends listener.SingleSubject {
  constructor() {
    super((observer, data) => {
      if (data) {
        observer.elementStateListener(data);
      }
    });
    this.listener = new BalElementStateListener();
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

function ListenToElementStates() {
  return function (target, _propertyKey, _descriptor) {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      this._balElementStateSubject = new BalElementStateSubject();
      this._balElementStateSubject.attach(this);
      return connectedCallback && connectedCallback.call(this);
    };
    target.disconnectedCallback = function () {
      this._balElementStateSubject.detach();
      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}

exports.BalElementStateListener = BalElementStateListener;
exports.ListenToElementStates = ListenToElementStates;
