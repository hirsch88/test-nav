'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const helpers = require('./helpers-83a73189.js');
const log = require('./log-911f84ec.js');
require('./browser-791d6902.js');
require('./icons.constant-800d686b.js');

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
    index.registerInstance(this, hostRef);
    this.animate = async () => {
      await this.load();
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        this.destroy();
        this.currentRaf = helpers.raf(async () => {
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
          helpers.rIC(async () => {
            Promise.resolve().then(function () { return require('./bal-spinner.animation-7f53311f.js'); })
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
    return index.h(index.Host, { role: "progressbar", "aria-hidden": "true", style: { width: this.small ? '32px' : '64px' } });
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "deactivated": ["deactivatedWatcher"]
  }; }
};
__decorate([
  log.Logger('bal-spinner')
], Spinner.prototype, "createLogger", null);
Spinner.style = {
  css: balSpinnerCss
};

exports.bal_spinner = Spinner;
