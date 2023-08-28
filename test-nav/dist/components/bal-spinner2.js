import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { l as raf, r as rIC } from './helpers.js';
import { L as Logger } from './log.js';

const balSpinnerCss = "bal-spinner,.bal-spinner{text-align:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}bal-spinner svg,.bal-spinner svg{-webkit-transform:unset !important;transform:unset !important}";

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
const Spinner = proxyCustomElement(class Spinner extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.animate = async () => {
      await this.load();
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        this.destroy();
        this.currentRaf = raf(async () => {
          if (this.animationFunction) {
            this.animationFunction(this.el, this.getColor());
          }
        });
      }
    };
    this.destroy = () => {
      if (this.animationItem && this.animationItem.destroy) {
        this.animationItem.destroy();
      }
      this.el.innerHTML = '';
    };
    this.shouldAnimate = () => {
      if (typeof window === 'undefined') {
        return false;
      }
      if (this.animationFunction === undefined) {
        return false;
      }
      return !this.deactivated;
    };
    this.load = async () => {
      return new Promise((resolve, reject) => {
        if (this.animationFunction) {
          return resolve();
        }
        else {
          rIC(async () => {
            import('./bal-spinner.animation.js')
              .then(module => {
              this.animationFunction = module.animate;
              resolve();
            })
              .catch(reject);
          });
        }
      });
    };
    this.inverted = false;
    this.deactivated = false;
    this.color = 'blue';
    this.small = false;
  }
  createLogger(log) {
    this.log = log;
  }
  deactivatedWatcher(newValue, oldValue) {
    if (newValue !== oldValue) {
      if (this.deactivated) {
        this.destroy();
      }
      else {
        this.animate();
      }
    }
  }
  componentDidLoad() {
    this.animate();
  }
  disconnectedCallback() {
    if (this.el && !this.el.isConnected) {
      this.destroy();
    }
  }
  getColor() {
    return this.inverted || this.color === 'white' ? '#ffffff' : '#151f6d';
  }
  render() {
    return h(Host, { role: "progressbar", "aria-hidden": "true", style: { width: this.small ? '32px' : '64px' } });
  }
  get el() { return this; }
  static get watchers() { return {
    "deactivated": ["deactivatedWatcher"]
  }; }
  static get style() { return {
    css: balSpinnerCss
  }; }
}, [32, "bal-spinner", {
    "inverted": [4],
    "deactivated": [4],
    "color": [1],
    "small": [4]
  }]);
__decorate([
  Logger('bal-spinner')
], Spinner.prototype, "createLogger", null);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-spinner":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Spinner);
      }
      break;
  } });
}

export { Spinner as S, defineCustomElement as d };
