import { b as balBrowser } from './browser-9199b5e2.js';
import { d as defaultLoggerConfig } from './log-01623e2c.js';
import { b as balIconClose, a as balIconInfoCircle, c as balIconPlus, d as balIconMinus, e as balIconEdit, f as balIconTrash, g as balIconNavGoLeft, h as balIconNavGoRight, i as balIconNavGoDown, j as balIconNavGoUp, k as balIconCaretLeft, l as balIconCaretDown, m as balIconCheck, n as balIconDate, o as balIconDocument, p as balIconUpload, q as balIconMenuBars, r as balIconFacebook, s as balIconInstagram, t as balIconLinkedin, u as balIconTwitter, v as balIconXing, w as balIconYoutube, x as balIconWeb, y as balIconCaretUp } from './icons.constant-35253412.js';

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
        balIconClose,
        balIconInfoCircle,
        balIconPlus,
        balIconMinus,
        balIconEdit,
        balIconTrash,
        balIconNavGoLeft,
        balIconNavGoRight,
        balIconNavGoDown,
        balIconNavGoUp,
        balIconCaretLeft,
        balIconCaretDown,
        balIconCheck,
        balIconDate,
        balIconDocument,
        balIconUpload,
        balIconMenuBars,
      },
      fallbackLanguage: 'de',
      logger: defaultLoggerConfig,
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
    if (balBrowser.hasWindow) {
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
    balIconClose,
    balIconInfoCircle,
    balIconPlus,
    balIconMinus,
    balIconEdit,
    balIconTrash,
    balIconNavGoLeft,
    balIconNavGoRight,
    balIconNavGoDown,
    balIconNavGoUp,
    balIconCaretLeft,
    balIconCaretDown,
    balIconCheck,
    balIconDate,
    balIconDocument,
    balIconUpload,
    balIconMenuBars,
    balIconFacebook,
    balIconInstagram,
    balIconLinkedin,
    balIconTwitter,
    balIconXing,
    balIconYoutube,
    balIconWeb,
    balIconCaretUp,
  },
  fallbackLanguage: 'de',
  logger: defaultLoggerConfig,
  animated: true,
};
const defaultLocale = `${defaultConfig.language}-${defaultConfig.region}`;
const initialize = (userConfig = {}, win = {}) => {
  if (!balBrowser.hasWindow) {
    return;
  }
  win = window;
  win.BaloiseDesignSystem = win.BaloiseDesignSystem || {};
  config.reset(Object.assign(Object.assign(Object.assign(Object.assign({}, defaultConfig), configFromSession(win)), userConfig), { icons: Object.assign(Object.assign(Object.assign({}, defaultConfig.icons), configFromSession(win).icons), userConfig.icons) }));
  win.BaloiseDesignSystem.config = config;
};

export { defaultLocale as a, defaultConfig as d, initialize as i };
