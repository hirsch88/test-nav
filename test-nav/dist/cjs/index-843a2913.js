'use strict';

const browser = require('./browser-791d6902.js');

const onBalConfigChange = (callback) => {
  attachToConfig({
    configChanged(state) {
      callback(state);
    },
  });
};
const useBalConfig = () => {
  if (!browser.balBrowser.hasWindow) {
    return;
  }
  const win = window;
  return win && win.BaloiseDesignSystem && win.BaloiseDesignSystem.config;
};
const attachToConfig = (observer) => {
  const config = useBalConfig();
  if (config) {
    config.attach(observer);
  }
};
const detachFromConfig = (observer) => {
  const config = useBalConfig();
  if (config) {
    config.detach(observer);
  }
};
const attachComponentToConfig = (observer) => {
  const config = useBalConfig();
  if (config) {
    config.attachComponent(observer);
  }
};
const detachComponentFromConfig = (observer) => {
  const config = useBalConfig();
  if (config) {
    config.detachComponent(observer);
  }
};
const updateBalLanguage = (language) => {
  const config = useBalConfig();
  if (config) {
    config.language = language;
  }
};
const updateBalRegion = (region) => {
  const config = useBalConfig();
  if (config) {
    config.region = region;
  }
};
const updateBalAllowedLanguages = (allowedLanguages) => {
  const config = useBalConfig();
  if (config) {
    config.allowedLanguages = allowedLanguages;
  }
};
const updateBalIcons = (icons) => {
  const config = useBalConfig();
  if (config) {
    config.icons = Object.assign(Object.assign({}, config.icons), icons);
  }
};
const updateBalAnimated = (animated) => {
  const config = useBalConfig();
  if (config) {
    config.animated = animated;
  }
};

exports.attachComponentToConfig = attachComponentToConfig;
exports.attachToConfig = attachToConfig;
exports.detachComponentFromConfig = detachComponentFromConfig;
exports.detachFromConfig = detachFromConfig;
exports.onBalConfigChange = onBalConfigChange;
exports.updateBalAllowedLanguages = updateBalAllowedLanguages;
exports.updateBalAnimated = updateBalAnimated;
exports.updateBalIcons = updateBalIcons;
exports.updateBalLanguage = updateBalLanguage;
exports.updateBalRegion = updateBalRegion;
exports.useBalConfig = useBalConfig;
