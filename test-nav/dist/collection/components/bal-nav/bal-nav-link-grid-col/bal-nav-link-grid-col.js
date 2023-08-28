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
import { Logger } from '../../../utils/log';
import { BEM } from '../../../utils/bem';
export class NavigationLinkGridCol {
  constructor() {
    this.staticCol = false;
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    const block = BEM.block('nav-link-grid-col');
    const innerEl = block.element('inner');
    const widescreenPositionClass = this.staticCol ? 'is-one-third-widescreen' : 'is-two-thirds-widescreen';
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('is-static').class(this.staticCol)), { 'column is-full is-6-desktop is-half-desktop': true, [`${widescreenPositionClass}`]: true }) }, h("div", { class: Object.assign({}, innerEl.class()) }, h("slot", null))));
  }
  static get is() { return "bal-nav-link-grid-col"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-nav-link-grid-col.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-nav-link-grid-col.css"]
    };
  }
  static get properties() {
    return {
      "staticCol": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalNavLinkGridCol",
          "resolved": "boolean",
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
          "text": "Defines the static column which is always aligned to the right"
        },
        "attribute": "static-col",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
__decorate([
  Logger('bal-nav-link-grid-col')
], NavigationLinkGridCol.prototype, "createLogger", null);
