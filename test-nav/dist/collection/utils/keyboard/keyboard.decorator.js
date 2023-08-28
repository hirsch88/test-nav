import { BalKeyboardSubject } from './keyboard.subject';
export function ListenToKeyboard() {
  return function (target, _propertyKey, _descriptor) {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      this._balKeyboardSubject = new BalKeyboardSubject();
      this._balKeyboardSubject.attach(this);
      return connectedCallback && connectedCallback.call(this);
    };
    target.disconnectedCallback = function () {
      this._balKeyboardSubject.detach();
      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}
