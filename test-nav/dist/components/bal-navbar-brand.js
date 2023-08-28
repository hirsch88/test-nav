import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';
import { B as BalScrollHandler } from './scroll.js';
import { b as balBrowser } from './browser.js';
import { d as defineCustomElement$5 } from './bal-button2.js';
import { d as defineCustomElement$4 } from './bal-icon2.js';
import { d as defineCustomElement$3 } from './bal-logo2.js';
import { d as defineCustomElement$2 } from './bal-spinner2.js';

const NavbarBrand = proxyCustomElement(class NavbarBrand extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get el() { return this; }
}, [4, "bal-navbar-brand", {
    "href": [1],
    "target": [1],
    "simple": [4],
    "logo": [1],
    "animated": [4],
    "interface": [1],
    "isMenuActive": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navbar-brand", "bal-button", "bal-icon", "bal-logo", "bal-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navbar-brand":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavbarBrand);
      }
      break;
    case "bal-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-logo":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalNavbarBrand = NavbarBrand;
const defineCustomElement = defineCustomElement$1;

export { BalNavbarBrand, defineCustomElement };
