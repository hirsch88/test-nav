import { a as balBreakpointSubject } from './breakpoints.subject-52f20b1f.js';

function ListenToBreakpoints() {
  return function (target, _propertyKey, _descriptor) {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      balBreakpointSubject.attach(this);
      return connectedCallback && connectedCallback.call(this);
    };
    target.disconnectedCallback = function () {
      balBreakpointSubject.detach(this);
      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}

export { ListenToBreakpoints as L };
