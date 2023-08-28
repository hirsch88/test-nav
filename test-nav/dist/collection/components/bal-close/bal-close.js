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
import { inheritAttributes } from '../../utils/attributes';
import { BEM } from '../../utils/bem';
import { ListenToConfig, defaultConfig } from '../../utils/config';
import { i18nBalClose } from './bal-close.i18n';
export class Close {
  constructor() {
    this.inheritedAttributes = {};
    this.language = defaultConfig.language;
    this.region = defaultConfig.region;
    this.size = '';
    this.inverted = false;
  }
  componentWillRender() {
    this.inheritedAttributes = inheritAttributes(this.el, ['tabindex']);
  }
  async configChanged(state) {
    this.language = state.language;
    this.region = state.region;
  }
  render() {
    const blockEl = BEM.block('close');
    const buttonEl = blockEl.element('button');
    const iconEl = buttonEl.element('icon');
    const label = i18nBalClose[this.language].close;
    return (h(Host, { class: Object.assign({}, blockEl.class()) }, h("button", Object.assign({ type: "button", "aria-label": label, title: label, class: Object.assign(Object.assign(Object.assign({}, buttonEl.class()), buttonEl.modifier('inverted').class(this.inverted)), buttonEl.modifier(`size-${this.size}`).class(this.size !== '')), "data-testid": "bal-close" }, this.inheritedAttributes), h("bal-icon", { name: "close", size: this.size === 'small' ? 'x-small' : this.size === 'medium' ? 'medium' : 'small', inverted: this.inverted, class: Object.assign({}, iconEl.class()) }))));
  }
  static get is() { return "bal-close"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-close.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-close.css"]
    };
  }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalCloseSize",
          "resolved": "\"\" | \"medium\" | \"small\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Define the size of badge. Small is recommended for tabs."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "''"
      },
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
          "text": "If `true` it supports dark backgrounds."
        },
        "attribute": "inverted",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "language": {},
      "region": {}
    };
  }
  static get methods() {
    return {
      "configChanged": {
        "complexType": {
          "signature": "(state: BalConfigState) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalConfigState": {
              "location": "import",
              "path": "../../interfaces"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": "define config for the component"
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
__decorate([
  ListenToConfig()
], Close.prototype, "configChanged", null);
