'use strict';

const index = require('./index-843a2913.js');

function ListenToConfig() {
  return function (target, _propertyKey, _descriptor) {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      index.attachComponentToConfig(this);
      return connectedCallback && connectedCallback.call(this);
    };
    target.disconnectedCallback = function () {
      index.detachComponentFromConfig(this);
      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}

exports.ListenToConfig = ListenToConfig;
