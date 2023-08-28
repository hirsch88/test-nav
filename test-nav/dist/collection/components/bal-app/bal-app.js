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
import { Host, h } from '@stencil/core';
import { balBrowser } from '../../utils/browser';
import { balDevice } from '../../utils/device';
import { initStyleMode, updateBalAnimated } from '../../utils/config';
import { debounce, rIC } from '../../utils/helpers';
import { Logger } from '../../utils/log';
export class App {
  constructor() {
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
      import('../../utils/focus-visible').then(module => (this.focusVisible = module.startFocusVisible()));
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
  static get is() { return "bal-app"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-app.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-app.css"]
    };
  }
  static get properties() {
    return {
      "mode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalMode",
          "resolved": "\"all\" | \"css\" | \"sass\"",
          "references": {
            "BalMode": {
              "location": "import",
              "path": "../../utils/config"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "deprecated",
              "text": "Mode defines how the styles are loaded. With `css` each component loads his own styles\nand with `sass` the component styles needs to be imported with the file `components.sass`."
            }],
          "text": ""
        },
        "attribute": "mode",
        "reflect": true,
        "defaultValue": "'css'"
      },
      "animated": {
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
          "text": "Disables all animation inside the bal-app. Can be used for simplify e2e testing."
        },
        "attribute": "animated",
        "reflect": true,
        "defaultValue": "true"
      },
      "ready": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": "Is `true` when DS components are ready to be shown."
            }],
          "text": ""
        },
        "attribute": "ready",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "balAppLoad",
        "name": "balAppLoad",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": "Tells if the components are ready"
            }],
          "text": ""
        },
        "complexType": {
          "original": "BalEvents.BalAppLoadDetail",
          "resolved": "boolean",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "setFocus": {
        "complexType": {
          "signature": "(elements: HTMLElement[]) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLElement": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
__decorate([
  Logger('bal-app')
], App.prototype, "createLogger", null);
