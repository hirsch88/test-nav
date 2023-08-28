import { BalSwipeSubject } from './swipe.subject';
export function ListenToSwipe() {
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
