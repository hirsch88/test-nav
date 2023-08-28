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
import { deepReady } from '../../../utils/helpers';
import { BEM } from '../../../utils/bem';
import { ListenToBreakpoints, balBreakpoints } from '../../../utils/breakpoints';
export class NavbarMenu {
  constructor() {
    this.isMenuActive = false;
    this.isTouch = balBreakpoints.isTouch;
    this.interface = 'app';
  }
  breakpointListener(breakpoints) {
    this.isTouch = breakpoints.touch;
  }
  async toggle(isMenuActive) {
    this.isMenuActive = isMenuActive;
    const tabsElement = this.element.querySelector('bal-tabs');
    if (tabsElement) {
      await deepReady(tabsElement);
      tabsElement.renderLine();
    }
  }
  render() {
    const menuEl = BEM.block('navbar').element('menu');
    let container = '';
    if (this.isTouch) {
      const navbarEl = this.element.closest('bal-navbar');
      if (navbarEl) {
        container = navbarEl.container;
      }
    }
    return (h(Host, { class: Object.assign(Object.assign(Object.assign(Object.assign({}, menuEl.class()), menuEl.modifier('active').class(this.isMenuActive)), menuEl.modifier(`context-${this.interface}`).class()), { container: true, [`is-${container}`]: container !== '' }) }, h("slot", null)));
  }
  static get is() { return "bal-navbar-menu"; }
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
  static get states() {
    return {
      "isMenuActive": {},
      "isTouch": {}
    };
  }
  static get methods() {
    return {
      "toggle": {
        "complexType": {
          "signature": "(isMenuActive: boolean) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": "- If the menu is open it closes it and the other way around."
            }]
        }
      }
    };
  }
  static get elementRef() { return "element"; }
}
__decorate([
  ListenToBreakpoints()
], NavbarMenu.prototype, "breakpointListener", null);
