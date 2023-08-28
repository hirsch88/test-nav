import { r as registerInstance, h, g as getElement, H as Host } from './index-e015dbc8.js';
import { l as raf, r as rIC } from './helpers-08b28736.js';
import { L as Logger } from './log-01623e2c.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';

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
const Spinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
            import('./bal-spinner.animation-fadee2e2.js')
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "deactivated": ["deactivatedWatcher"]
  }; }
};
__decorate([
  Logger('bal-spinner')
], Spinner.prototype, "createLogger", null);
Spinner.style = {
  css: balSpinnerCss
};

export { Spinner as bal_spinner };
