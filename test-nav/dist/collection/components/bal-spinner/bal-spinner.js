var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h, Host } from '@stencil/core';
import { rIC } from '../../utils/helpers';
import { Logger } from '../../utils/log';
import { raf } from '../../utils/helpers';
export class Spinner {
  constructor() {
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
            import('./bal-spinner.animation')
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
  static get is() { return "bal-spinner"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-spinner.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-spinner.css"]
    };
  }
  static get properties() {
    return {
      "inverted": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the component can be used on dark background"
        },
        "attribute": "inverted",
        "reflect": false,
        "defaultValue": "false"
      },
      "deactivated": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the component will not add the spinner animation svg"
        },
        "attribute": "deactivated",
        "reflect": false,
        "defaultValue": "false"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'blue' | 'white'",
          "resolved": "\"blue\" | \"white\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines the color of the spinner."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'blue'"
      },
      "small": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the component is smaller"
        },
        "attribute": "small",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "deactivated",
        "methodName": "deactivatedWatcher"
      }];
  }
}
__decorate([
  Logger('bal-spinner')
], Spinner.prototype, "createLogger", null);
