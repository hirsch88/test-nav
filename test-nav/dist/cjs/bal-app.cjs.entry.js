'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const browser = require('./browser-791d6902.js');
const device = require('./device-76e9eca9.js');
const index$1 = require('./index-843a2913.js');
const helpers = require('./helpers-83a73189.js');
const log = require('./log-911f84ec.js');
const mode = require('./mode-059bdbd7.js');
require('./icons.constant-800d686b.js');

const balAppCss = ":root{--bal-app-height:100%}.bal-app{position:relative;display:block}.bal-body.is-ready{visibility:inherit}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const App = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.balAppLoad = index.createEvent(this, "balAppLoad", 7);
    this.debouncedNotify = helpers.debounce(() => this.notifyResize(), 100);
    this.notifyResize = async () => {
      if (browser.balBrowser.hasDocument && browser.balBrowser.hasWindow) {
        const doc = document.documentElement;
        doc.style.setProperty('--bal-app-height', `${window.innerHeight}px`);
      }
    };
    this.mode = 'css';
    this.animated = true;
    this.ready = false;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    mode.initStyleMode(this.mode);
    index$1.updateBalAnimated(this.animated);
    if (browser.balBrowser.hasWindow) {
      window.addEventListener('resize', this.debouncedNotify);
      this.debouncedNotify();
    }
  }
  componentDidLoad() {
    helpers.rIC(async () => {
      this.balAppLoad.emit(true);
      this.ready = true;
      Promise.resolve().then(function () { return require('./focus-visible-2cccbc04.js'); }).then(module => (this.focusVisible = module.startFocusVisible()));
    });
  }
  disconnectedCallback() {
    if (browser.balBrowser.hasWindow) {
      window.removeEventListener('resize', this.debouncedNotify);
    }
  }
  async setFocus(elements) {
    if (this.focusVisible) {
      this.focusVisible.setFocus(elements);
    }
  }
  render() {
    return (index.h(index.Host, { role: "application", class: {
        'bal-app': true,
        'bal-app--safari': browser.balBrowser.isSafari,
        'bal-app--touch': device.balDevice.hasTouchScreen,
      } }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
__decorate([
  log.Logger('bal-app')
], App.prototype, "createLogger", null);
App.style = {
  css: balAppCss
};

exports.bal_app = App;
