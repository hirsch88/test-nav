import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { e as deepReady } from './helpers.js';
import { B as BEM } from './bem.js';
import { b as balBreakpoints } from './breakpoints.subject.js';
import { L as ListenToBreakpoints } from './breakpoints.decorator.js';

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
const NavbarMenu = proxyCustomElement(class NavbarMenu extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get element() { return this; }
}, [4, "bal-navbar-menu", {
    "interface": [1],
    "isMenuActive": [32],
    "isTouch": [32],
    "toggle": [64]
  }]);
__decorate([
  ListenToBreakpoints()
], NavbarMenu.prototype, "breakpointListener", null);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navbar-menu"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navbar-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavbarMenu);
      }
      break;
  } });
}

const BalNavbarMenu = NavbarMenu;
const defineCustomElement = defineCustomElement$1;

export { BalNavbarMenu, defineCustomElement };
