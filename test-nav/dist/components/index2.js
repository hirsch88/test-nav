import { b as balBrowser } from './browser.js';
import '@stencil/core/internal/client';

const onBalConfigChange = (callback) => {
  attachToConfig({
    configChanged(state) {
      callback(state);
    },
  });
};
const useBalConfig = () => {
  if (!balBrowser.hasWindow) {
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

export { attachToConfig as a, updateBalAnimated as b, updateBalIcons as c, detachFromConfig as d, updateBalLanguage as e, updateBalRegion as f, useBalConfig as g, attachComponentToConfig as h, detachComponentFromConfig as i, onBalConfigChange as o, updateBalAllowedLanguages as u };
