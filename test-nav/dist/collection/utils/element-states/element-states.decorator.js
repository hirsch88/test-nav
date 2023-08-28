import { BalElementStateSubject } from './element-states.subject';
export function ListenToElementStates() {
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
