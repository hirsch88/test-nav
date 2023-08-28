'use strict';

const browser = require('./browser-791d6902.js');

const defaultLoggerConfig = {
  components: [],
  event: false,
  lifecycle: false,
  render: false,
  custom: false,
};
const getConfig = () => {
  let loggerConfig = defaultLoggerConfig;
  if (browser.balBrowser.hasWindow &&
    window.BaloiseDesignSystem &&
    window.BaloiseDesignSystem.config &&
    window.BaloiseDesignSystem.config.logger) {
    loggerConfig = window.BaloiseDesignSystem.config.logger;
  }
  return loggerConfig;
};
const buildLogger = (tag) => {
  const l = (type, message, ...optionalParams) => {
    const config = getConfig();
    if (config.components.includes(tag) && config[type]) {
      console.log(message, ...optionalParams);
    }
  };
  return {
    custom: (message, ...optionalParams) => l('custom', ` ➡️ [${tag}] - ${message}`, ...optionalParams),
    lifecycle: (lifecycleName, ...optionalParams) => l('lifecycle', `${lifecycleName === 'connectedCallback'
      ? '🟢'
      : lifecycleName === 'disconnectedCallback'
        ? '🔴'
        : lifecycleName === 'componentDidLoad'
          ? '🏁'
          : ' ➡️'} [${tag}] - (${lifecycleName})`, ...optionalParams),
    event: (eventName, ...optionalParams) => l('event', `🔥 [${tag}] - (${eventName})`, ...optionalParams),
    render: (...optionalParams) => l('render', `🖌️ [${tag}] - (render)`, ...optionalParams),
  };
};
function Logger(tag = 'unknown') {
  return function (target, _propertyKey, _descriptor) {
    const { connectedCallback, disconnectedCallback, render, componentDidLoad, createLogger } = target;
    const log = buildLogger(tag);
    target.connectedCallback = function () {
      log.lifecycle(`connectedCallback`, this);
      const events = Object.keys(this)
        .filter(n => n.startsWith('bal'))
        .filter(n => typeof this[n] === 'object');
      for (let index = 0; index < events.length; index++) {
        const event = events[index];
        const emitter = this[event];
        this[event] = {
          emit: (...args) => {
            log.event(event, this, ...args);
            return emitter.emit.call(this, ...args);
          },
        };
      }
      createLogger.call(this, log.custom);
      return connectedCallback && connectedCallback.call(this);
    };
    target.disconnectedCallback = function () {
      log.lifecycle(`disconnectedCallback`, this);
      return disconnectedCallback && disconnectedCallback.call(this);
    };
    target.componentDidLoad = function () {
      log.lifecycle(`componentDidLoad`, this);
      return componentDidLoad && componentDidLoad.call(this);
    };
    target.render = function () {
      log.render(this);
      return render.call(this);
    };
  };
}

exports.Logger = Logger;
exports.defaultLoggerConfig = defaultLoggerConfig;
