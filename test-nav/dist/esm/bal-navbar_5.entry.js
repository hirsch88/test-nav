import { r as registerInstance, h, H as Host, g as getElement, c as createEvent } from './index-e015dbc8.js';
import { B as BEM } from './bem-1b28532d.js';
import { B as BalScrollHandler } from './scroll-e5864193.js';
import { b as balBrowser } from './browser-9199b5e2.js';
import { f as deepReady } from './helpers-08b28736.js';
import { b as balBreakpoints } from './breakpoints.subject-52f20b1f.js';
import { L as ListenToBreakpoints } from './breakpoints.decorator-547e9ed6.js';
import './icons.constant-35253412.js';
import './device-c28cde6d.js';
import './listener-ea90dc02.js';
import './tokens.esm-8af6b758.js';

const balNavbarCss = ":root{--bal-navbar-background:var(--bal-color-primary);--bal-navbar-light-background:var(--bal-color-white);--bal-navbar-active-menu-background:var(--bal-color-white);--bal-navbar-brand-title-text-color:var(--bal-color-text-primary-inverted);--bal-navbar-brand-title-light-text-color:var(--bal-color-text-primary);--bal-navbar-brand-text-color:var(--bal-color-text-primary-inverted);--bal-navbar-brand-logo-link-color:var(--bal-color-text-primary-inverted)}.bal-navbar{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:block}.bal-navbar--context-app:not(.bal-navbar--is-light),.bal-navbar--context-simple:not(.bal-navbar--is-light){background:var(--bal-navbar-background)}.bal-navbar--context-app,.bal-navbar--context-simple{height:64px;max-height:64px}@media screen and (min-width: 1024px){.bal-navbar--context-app,.bal-navbar--context-simple{height:80px;max-height:80px}}.bal-navbar__nav{display:-ms-flexbox;display:flex;height:100%;gap:1rem}.bal-navbar__brand{-ms-flex:1;flex:1;gap:2rem;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}@media screen and (min-width: 1024px){.bal-navbar__brand{-ms-flex:initial;flex:initial}}.bal-navbar__brand>a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:100%}.bal-navbar__brand__logo{height:calc(100% - 16px);-o-object-fit:contain;object-fit:contain}@media screen and (min-width: 1024px){.bal-navbar__brand__logo{height:calc(100% - 32px)}}.bal-navbar__brand__title{display:none;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.bal-navbar__brand__title>bal-logo{display:none}@media screen and (min-width: 769px),print{.bal-navbar__brand__title{display:inline-block;font-size:var(--bal-size-medium);font-family:var(--bal-font-family-title);font-weight:var(--bal-weight-bold);color:var(--bal-navbar-brand-title-text-color)}}@media screen and (min-width: 1024px){.bal-navbar__brand__title{font-size:var(--bal-size-medium)}}.bal-navbar__brand--context-app,.bal-navbar__brand--context-simple{color:var(--bal-navbar-brand-text-color)}.bal-navbar__brand--context-app>a,.bal-navbar__brand--context-simple>a{color:var(--bal-navbar-brand-logo-link-color)}.bal-navbar__menu{position:static;display:none;z-index:var(--bal-z-index-navigation)}@media screen and (max-width: 1023px){.bal-navbar__menu--active{position:fixed !important;display:block;background:var(--bal-navbar-active-menu-background)}}@media screen and (max-width: 1023px){.bal-navbar__menu--context-app{padding-top:1rem;padding-bottom:1rem;overflow-y:auto;-ms-flex-direction:column-reverse;flex-direction:column-reverse;top:64px;left:0;bottom:0;right:0}}@media screen and (min-width: 1024px){.bal-navbar__menu{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;gap:1rem;padding-right:0 !important}}.bal-navbar__menu--context-simple{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex:1;flex:1;gap:1rem}.bal-navbar__menu__start{display:block;margin-bottom:1rem}@media screen and (min-width: 1024px){.bal-navbar__menu__start{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;gap:.5rem;margin-bottom:0}}.bal-navbar__menu__start--context-simple{display:none}.bal-navbar__menu__start--context-meta{-ms-flex-pack:start;justify-content:flex-start}.bal-navbar__menu__end{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;gap:.5rem}.bal-navbar__menu__end .button-label{word-break:keep-all !important}.bal-navbar__menu__end .bal-button-group{width:100%}@media screen and (max-width: 1023px){.bal-navbar__menu__end .bal-button-group{margin-top:2rem}}.bal-navbar__menu__end--context-simple>.field{-ms-flex-negative:0;flex-shrink:0;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.bal-navbar__menu__end>.field{-ms-flex:1;flex:1}@media screen and (min-width: 1024px){.bal-navbar__menu__end>.field{-ms-flex-negative:0;flex-shrink:0;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}}.bal-navbar--is-light{background-color:var(--bal-navbar-light-background);-webkit-box-shadow:var(--bal-shadow-normal);box-shadow:var(--bal-shadow-normal)}.bal-navbar--is-light .bal-navbar__brand__title{color:var(--bal-navbar-brand-title-light-text-color)}.bal-navbar--is-light bal-logo svg svg,.bal-navbar--is-light bal-logo svg g,.bal-navbar--is-light bal-logo svg path,.bal-navbar--is-light bal-logo svg circle{fill:var(--bal-color-primary)}.bal-navbar__brand__burger.bal-button{margin-left:auto}@media screen and (min-width: 1024px){.bal-navbar__brand__burger.bal-button{display:none}}.bal-navbar__brand__burger--hidden.bal-button{display:none !important}";

const Navbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.light = false;
    this.interface = 'app';
    this.container = '';
  }
  interfaceHandler() {
    this.updateProps(['bal-navbar-brand', 'bal-navbar-menu', 'bal-navbar-menu-start', 'bal-navbar-menu-end'], 'interface');
  }
  componentWillLoad() {
    this.interfaceHandler();
  }
  updateProps(selectors, key) {
    const value = this[key];
    if (value !== undefined) {
      this.notifyComponents(selectors, input => (input[key] = value));
    }
  }
  notifyComponents(selectors, callback) {
    const components = this.element.querySelectorAll(selectors.join(', '));
    components.forEach(c => callback(c));
  }
  render() {
    const navbarEl = BEM.block('navbar');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, navbarEl.class()), navbarEl.modifier(`context-${this.interface}`).class()), navbarEl.modifier(`is-light`).class(this.light)) }, h("nav", { role: "navigation", "aria-label": "main navigation", class: Object.assign(Object.assign({}, navbarEl.element('nav').class()), { container: true, [`is-${this.container}`]: this.container !== '' }) }, h("slot", null))));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "interface": ["interfaceHandler"]
  }; }
};
Navbar.style = {
  css: balNavbarCss
};

const NavbarBrand = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balNavigate = createEvent(this, "balNavigate", 7);
    this.balWillAnimate = createEvent(this, "balWillAnimate", 7);
    this.balDidAnimate = createEvent(this, "balDidAnimate", 7);
    this.bodyScrollHandler = new BalScrollHandler();
    this.isMenuActive = false;
    this.href = '';
    this.target = '_self';
    this.simple = false;
    this.logo = undefined;
    this.animated = true;
    this.interface = 'app';
  }
  connectedCallback() {
    this.bodyScrollHandler.connect();
  }
  componentWillLoad() {
    if (balBrowser.hasWindow && window.matchMedia) {
      window.matchMedia('(min-width: 960px)').addEventListener('change', this.resetIsMenuActive.bind(this));
    }
  }
  disconnectedCallback() {
    this.bodyScrollHandler.disconnect();
  }
  async resetIsMenuActive(ev) {
    if (ev.matches && !this.simple) {
      this.toggle(false);
    }
  }
  async toggle(isMenuActive) {
    this.isMenuActive = isMenuActive;
    this.balWillAnimate.emit(this.isMenuActive);
    if (this.isMenuActive) {
      this.bodyScrollHandler.disable();
    }
    else {
      this.bodyScrollHandler.enable();
    }
    const navbar = this.el.closest('bal-navbar');
    if (navbar) {
      const navbarMenuElement = navbar.querySelector('bal-navbar-menu');
      if (navbarMenuElement && !this.simple) {
        await navbarMenuElement.toggle(this.isMenuActive);
      }
    }
    this.balDidAnimate.emit(this.isMenuActive);
  }
  async onClick() {
    this.toggle(!this.isMenuActive);
  }
  render() {
    const navbarBrandEl = BEM.block('navbar').element('brand');
    const logoTemplate = this.logo ? (h("img", { loading: "lazy", class: Object.assign({}, navbarBrandEl.element('logo').class()), src: this.logo, alt: "" })) : (h("bal-logo", { animated: this.animated, color: 'white' }));
    return (h(Host, { class: Object.assign(Object.assign({}, navbarBrandEl.class()), navbarBrandEl.modifier(`context-${this.interface}`).class()) }, this.href ? (h("a", { href: this.href, target: this.target, onClick: (ev) => this.balNavigate.emit(ev) }, logoTemplate)) : (logoTemplate), h("span", { class: Object.assign({}, navbarBrandEl.element('title').class()) }, h("slot", null)), h("bal-button", { class: Object.assign(Object.assign({}, navbarBrandEl.element('burger').class()), navbarBrandEl
        .element('burger')
        .modifier('hidden')
        .class(this.interface === 'simple')), color: "light", inverted: true, square: true, icon: this.isMenuActive ? 'close' : 'menu-bars', onClick: () => this.onClick() })));
  }
  get el() { return getElement(this); }
};

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

const NavbarMenuEnd = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.interface = 'app';
  }
  render() {
    const menuEndEl = BEM.block('navbar').element('menu').element('end');
    return (h(Host, { class: Object.assign(Object.assign({}, menuEndEl.class()), menuEndEl.modifier(`context-${this.interface}`).class()) }, h("slot", null)));
  }
};

const NavbarMenuStart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.interface = 'app';
  }
  render() {
    const menuStartEl = BEM.block('navbar').element('menu').element('start');
    return (h(Host, { class: Object.assign(Object.assign({}, menuStartEl.class()), menuStartEl.modifier(`context-${this.interface}`).class()) }, h("slot", null)));
  }
};

export { Navbar as bal_navbar, NavbarBrand as bal_navbar_brand, NavbarMenu as bal_navbar_menu, NavbarMenuEnd as bal_navbar_menu_end, NavbarMenuStart as bal_navbar_menu_start };
