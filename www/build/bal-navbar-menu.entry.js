import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { f as deepReady } from './helpers-18cc89f4.js';
import { B as BEM } from './bem-1b28532d.js';
import { b as balBreakpoints, L as ListenToBreakpoints } from './index-8d940b60.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';
import './window-resize.listener-bb290fb3.js';
import './device-c28cde6d.js';
import './listener-ea90dc02.js';
import './tokens.esm-8af6b758.js';

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
const NavbarMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get element() { return getElement(this); }
};
__decorate([
  ListenToBreakpoints()
], NavbarMenu.prototype, "breakpointListener", null);

export { NavbarMenu as bal_navbar_menu };
