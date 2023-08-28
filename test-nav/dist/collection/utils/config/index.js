import { balBrowser } from '../browser';
export * from './initialize';
export * from './config.types';
export * from './config';
export * from './observable/observer';
export * from './mode';
export * from './config.decorator';
export const onBalConfigChange = (callback) => {
  attachToConfig({
    configChanged(state) {
      callback(state);
    },
  });
};
export const useBalConfig = () => {
  if (!balBrowser.hasWindow) {
    return;
  }
  const win = window;
  return win && win.BaloiseDesignSystem && win.BaloiseDesignSystem.config;
};
export const attachToConfig = (observer) => {
  const config = useBalConfig();
  if (config) {
    config.attach(observer);
  }
};
export const detachFromConfig = (observer) => {
  const config = useBalConfig();
  if (config) {
    config.detach(observer);
  }
};
export const attachComponentToConfig = (observer) => {
  const config = useBalConfig();
  if (config) {
    config.attachComponent(observer);
  }
};
export const detachComponentFromConfig = (observer) => {
  const config = useBalConfig();
  if (config) {
    config.detachComponent(observer);
  }
};
export const updateBalLanguage = (language) => {
  const config = useBalConfig();
  if (config) {
    config.language = language;
  }
};
export const updateBalRegion = (region) => {
  const config = useBalConfig();
  if (config) {
    config.region = region;
  }
};
export const updateBalAllowedLanguages = (allowedLanguages) => {
  const config = useBalConfig();
  if (config) {
    config.allowedLanguages = allowedLanguages;
  }
};
export const updateBalIcons = (icons) => {
  const config = useBalConfig();
  if (config) {
    config.icons = Object.assign(Object.assign({}, config.icons), icons);
  }
};
export const updateBalAnimated = (animated) => {
  const config = useBalConfig();
  if (config) {
    config.animated = animated;
  }
};
