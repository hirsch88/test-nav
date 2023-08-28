import { balOrientationSubject } from './orientation.subject';
export function ListenToOrientation() {
  return function (target, _propertyKey, _descriptor) {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      balOrientationSubject.attach(this);
      return connectedCallback && connectedCallback.call(this);
    };
    target.disconnectedCallback = function () {
      balOrientationSubject.detach(this);
      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}
