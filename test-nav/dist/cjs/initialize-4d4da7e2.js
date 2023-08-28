'use strict';

const browser = require('./browser-791d6902.js');
const log = require('./log-911f84ec.js');
const icons_constant = require('./icons.constant-800d686b.js');

const BALOISE_SESSION_KEY = 'baloise-persist-config';

class Config {
  constructor() {
    this._componentObservers = [];
    this._observers = [];
    this._config = {
      region: 'CH',
      language: 'de',
      allowedLanguages: ['de', 'fr', 'it', 'en'],
      icons: {
        balIconClose: icons_constant.balIconClose,
        balIconInfoCircle: icons_constant.balIconInfoCircle,
        balIconPlus: icons_constant.balIconPlus,
        balIconMinus: icons_constant.balIconMinus,
        balIconEdit: icons_constant.balIconEdit,
        balIconTrash: icons_constant.balIconTrash,
        balIconNavGoLeft: icons_constant.balIconNavGoLeft,
        balIconNavGoRight: icons_constant.balIconNavGoRight,
        balIconNavGoDown: icons_constant.balIconNavGoDown,
        balIconNavGoUp: icons_constant.balIconNavGoUp,
        balIconCaretLeft: icons_constant.balIconCaretLeft,
        balIconCaretDown: icons_constant.balIconCaretDown,
        balIconCheck: icons_constant.balIconCheck,
        balIconDate: icons_constant.balIconDate,
        balIconDocument: icons_constant.balIconDocument,
        balIconUpload: icons_constant.balIconUpload,
        balIconMenuBars: icons_constant.balIconMenuBars,
      },
      fallbackLanguage: 'de',
      logger: log.defaultLoggerConfig,
      animated: true,
    };
  }
  get locale() {
    return `${this._config.language}-${this._config.region}`;
  }
  get region() {
    return this._config.region;
  }
  set region(region) {
    if (region !== this._config.region) {
      this._config.region = region;
      this._notify();
    }
  }
  get language() {
    return this._config.language;
  }
  set language(language) {
    if (language !== this._config.language) {
      if (this._config.allowedLanguages.includes(language)) {
        this._config.language = language;
      }
      else {
        this._config.language = this._config.fallbackLanguage;
      }
      this._notify();
    }
  }
  get allowedLanguages() {
    return this._config.allowedLanguages;
  }
  set allowedLanguages(allowedLanguages) {
    if (allowedLanguages !== this._config.allowedLanguages) {
      this._config.allowedLanguages = allowedLanguages;
      this._notify();
    }
  }
  get icons() {
    return this._config.icons;
  }
  set icons(icons) {
    this._config.icons = Object.assign(Object.assign({}, this._config.icons), icons);
    this._notify();
  }
  get logger() {
    return this._config.logger;
  }
  set logger(logger) {
    this._config.logger = Object.assign({}, logger);
    this._notify();
  }
  get animated() {
    return this._config.animated;
  }
  set animated(animated) {
    this._config.animated = animated;
    this._notify();
  }
  attach(observer) {
    const isExist = this._observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has been attached already.');
    }
    this._observers.push(observer);
    observer.configChanged(this._config);
  }
  detach(observer) {
    const observerIndex = this._observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }
    this._observers.splice(observerIndex, 1);
  }
  attachComponent(observer) {
    const isExist = this._componentObservers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has been attached already.');
    }
    this._componentObservers.push(observer);
    observer.configChanged(this._config);
  }
  detachComponent(observer) {
    const observerIndex = this._componentObservers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }
    this._componentObservers.splice(observerIndex, 1);
  }
  toString() {
    return JSON.stringify(this._config);
  }
  reset(config) {
    this._config = Object.assign(Object.assign(Object.assign({}, this._config), config), { icons: Object.assign(Object.assign({}, this._config.icons), config.icons) });
    this._notify(false);
  }
  _notify(all = true) {
    for (const observer of this._componentObservers) {
      observer.configChanged(this._config);
    }
    if (all) {
      for (const observer of this._observers) {
        observer.configChanged(this._config);
      }
    }
    if (browser.balBrowser.hasWindow) {
      saveConfig(window, this._config);
    }
  }
}
const config = new Config();
const configFromSession = (win) => {
  try {
    const configStr = win.sessionStorage.getItem(BALOISE_SESSION_KEY);
    return configStr !== null ? JSON.parse(configStr) : {};
  }
  catch (e) {
    return {};
  }
};
const saveConfig = (win, c) => {
  try {
    win.sessionStorage.setItem(BALOISE_SESSION_KEY, JSON.stringify(c));
  }
  catch (e) {
    return;
  }
};

const defaultConfig = {
  region: 'CH',
  language: 'de',
  allowedLanguages: ['de', 'fr', 'it', 'en'],
  icons: {
    balIconClose: icons_constant.balIconClose,
    balIconInfoCircle: icons_constant.balIconInfoCircle,
    balIconPlus: icons_constant.balIconPlus,
    balIconMinus: icons_constant.balIconMinus,
    balIconEdit: icons_constant.balIconEdit,
    balIconTrash: icons_constant.balIconTrash,
    balIconNavGoLeft: icons_constant.balIconNavGoLeft,
    balIconNavGoRight: icons_constant.balIconNavGoRight,
    balIconNavGoDown: icons_constant.balIconNavGoDown,
    balIconNavGoUp: icons_constant.balIconNavGoUp,
    balIconCaretLeft: icons_constant.balIconCaretLeft,
    balIconCaretDown: icons_constant.balIconCaretDown,
    balIconCheck: icons_constant.balIconCheck,
    balIconDate: icons_constant.balIconDate,
    balIconDocument: icons_constant.balIconDocument,
    balIconUpload: icons_constant.balIconUpload,
    balIconMenuBars: icons_constant.balIconMenuBars,
    balIconFacebook: icons_constant.balIconFacebook,
    balIconInstagram: icons_constant.balIconInstagram,
    balIconLinkedin: icons_constant.balIconLinkedin,
    balIconTwitter: icons_constant.balIconTwitter,
    balIconXing: icons_constant.balIconXing,
    balIconYoutube: icons_constant.balIconYoutube,
    balIconWeb: icons_constant.balIconWeb,
    balIconCaretUp: icons_constant.balIconCaretUp,
  },
  fallbackLanguage: 'de',
  logger: log.defaultLoggerConfig,
  animated: true,
};
const defaultLocale = `${defaultConfig.language}-${defaultConfig.region}`;
const initialize = (userConfig = {}, win = {}) => {
  if (!browser.balBrowser.hasWindow) {
    return;
  }
  win = window;
  win.BaloiseDesignSystem = win.BaloiseDesignSystem || {};
  config.reset(Object.assign(Object.assign(Object.assign(Object.assign({}, defaultConfig), configFromSession(win)), userConfig), { icons: Object.assign(Object.assign(Object.assign({}, defaultConfig.icons), configFromSession(win).icons), userConfig.icons) }));
  win.BaloiseDesignSystem.config = config;
};

exports.defaultConfig = defaultConfig;
exports.defaultLocale = defaultLocale;
exports.initialize = initialize;
