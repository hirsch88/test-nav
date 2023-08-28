import { BalMutationSubject } from './mutation.subject';
export function ListenToMutation(options) {
  return function (target, _propertyKey, _descriptor) {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      this._balMutationSubject = new BalMutationSubject(options);
      this._balMutationSubject.attach(this);
      return connectedCallback && connectedCallback.call(this);
    };
    target.disconnectedCallback = function () {
      this._balMutationSubject.detach();
      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}
