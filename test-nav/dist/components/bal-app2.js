import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { b as balBrowser } from './browser.js';
import { b as balDevice } from './device.js';
import { b as updateBalAnimated } from './index2.js';
import { h as debounce, r as rIC } from './helpers.js';
import { L as Logger } from './log.js';
import { i as initStyleMode } from './mode.js';

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
const App = proxyCustomElement(class App extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
      import('./focus-visible.js').then(module => (this.focusVisible = module.startFocusVisible()));
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
  get el() { return this; }
  static get style() { return {
    css: balAppCss
  }; }
}, [36, "bal-app", {
    "mode": [513],
    "animated": [516],
    "ready": [1540],
    "setFocus": [64]
  }]);
__decorate([
  Logger('bal-app')
], App.prototype, "createLogger", null);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-app"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-app":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, App);
      }
      break;
  } });
}

export { App as A, defineCustomElement as d };
