import { attachComponentToConfig, detachComponentFromConfig } from '.';
export function ListenToConfig() {
  return function (target, _propertyKey, _descriptor) {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      attachComponentToConfig(this);
      return connectedCallback && connectedCallback.call(this);
    };
    target.disconnectedCallback = function () {
      detachComponentFromConfig(this);
      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}
