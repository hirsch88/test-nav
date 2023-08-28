import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class NavbarMenuStart {
  constructor() {
    this.interface = 'app';
  }
  render() {
    const menuStartEl = BEM.block('navbar').element('menu').element('start');
    return (h(Host, { class: Object.assign(Object.assign({}, menuStartEl.class()), menuStartEl.modifier(`context-${this.interface}`).class()) }, h("slot", null)));
  }
  static get is() { return "bal-navbar-menu-start"; }
  static get properties() {
    return {
      "interface": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalNavbarInterface",
          "resolved": "\"app\" | \"simple\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": "Defines the type of navbar. App is used for almost every web applications\nlike the portal app. For our sales funnel we recommend to use the simple navbar.\nMeta and main are used for the website."
            }],
          "text": ""
        },
        "attribute": "interface",
        "reflect": false,
        "defaultValue": "'app'"
      }
    };
  }
}
