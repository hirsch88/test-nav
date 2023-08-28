import { r as registerInstance, f as createEvent, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { b as balBrowser } from './browser-9199b5e2.js';
import { b as balDevice } from './device-c28cde6d.js';
import { a as initStyleMode, e as updateBalAnimated } from './index-6394c1a6.js';
import { d as debounce, r as rIC } from './helpers-18cc89f4.js';
import { L as Logger } from './log-01623e2c.js';
import './icons.constant-35253412.js';

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
    registerInstance(this, hostRef);
    this.balAppLoad = createEvent(this, "balAppLoad", 7);
    this.debouncedNotify = debounce(() => this.notifyResize(), 100);
    this.notifyResize = async () => {
      if (balBrowser.hasDocument && balBrowser.hasWindow) {
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
    initStyleMode(this.mode);
    updateBalAnimated(this.animated);
    if (balBrowser.hasWindow) {
      window.addEventListener('resize', this.debouncedNotify);
      this.debouncedNotify();
    }
  }
  componentDidLoad() {
    rIC(async () => {
      this.balAppLoad.emit(true);
      this.ready = true;
      import('./focus-visible-06bce1ff.js').then(module => (this.focusVisible = module.startFocusVisible()));
    });
  }
  disconnectedCallback() {
    if (balBrowser.hasWindow) {
      window.removeEventListener('resize', this.debouncedNotify);
    }
  }
  async setFocus(elements) {
    if (this.focusVisible) {
      this.focusVisible.setFocus(elements);
    }
  }
  render() {
    return (h(Host, { role: "application", class: {
        'bal-app': true,
        'bal-app--safari': balBrowser.isSafari,
        'bal-app--touch': balDevice.hasTouchScreen,
      } }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
__decorate([
  Logger('bal-app')
], App.prototype, "createLogger", null);
App.style = {
  css: balAppCss
};

export { App as bal_app };
