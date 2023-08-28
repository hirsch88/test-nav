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
import { BEM } from '../../../utils/bem';
import { Logger } from '../../../utils/log';
export class NavMenuBar {
  constructor() {
    this.navMenuBarId = `bal-nav-menu-bar-${NavMenuBarIds++}`;
    this.isHidden = false;
    this.invisible = 'none';
    this.position = 'none';
  }
  createLogger(log) {
    this.log = log;
  }
  get flyoutElement() {
    return this.el.querySelector('bal-nav-menu-flyout');
  }
  render() {
    const block = BEM.block('nav-menu-bar');
    const innerBlock = block.element('inner');
    return (h(Host, { id: this.navMenuBarId, class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`hidden-mobile`).class(this.invisible === 'mobile')), block.modifier(`hidden-tablet`).class(this.invisible === 'tablet')), block.modifier(`position-${this.position}`).class(this.position !== 'none')) }, h("div", { class: Object.assign({}, innerBlock.class()) }, h("div", { class: {
        container: true,
      } }, h("slot", null)))));
  }
  static get is() { return "bal-nav-menu-bar"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-nav-menu-bar.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-nav-menu-bar.css"]
    };
  }
  static get properties() {
    return {
      "invisible": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalNavMenuBarInvisible",
          "resolved": "\"mobile\" | \"none\" | \"tablet\"",
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
          "text": "Tells when to hide the bar"
        },
        "attribute": "invisible",
        "reflect": false,
        "defaultValue": "'none'"
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalNavMenuBarPosition",
          "resolved": "\"fixed-top\" | \"none\"",
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
          "text": "Defines the position of the bar"
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "'none'"
      }
    };
  }
  static get states() {
    return {
      "isHidden": {}
    };
  }
  static get elementRef() { return "el"; }
}
__decorate([
  Logger('bal-nav-menu-bar')
], NavMenuBar.prototype, "createLogger", null);
let NavMenuBarIds = 0;
