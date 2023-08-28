import { r as registerInstance, f as createEvent, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';
import { B as BalScrollHandler } from './scroll-e5864193.js';
import { b as balBrowser } from './browser-9199b5e2.js';

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

export { NavbarBrand as bal_navbar_brand };
