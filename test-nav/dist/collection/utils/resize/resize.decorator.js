import { BalResizeSubject } from './resize.subject';
export function ListenToResize() {
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
