import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const NavbarMenuEnd = proxyCustomElement(class NavbarMenuEnd extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.interface = 'app';
  }
  render() {
    const menuEndEl = BEM.block('navbar').element('menu').element('end');
    return (h(Host, { class: Object.assign(Object.assign({}, menuEndEl.class()), menuEndEl.modifier(`context-${this.interface}`).class()) }, h("slot", null)));
  }
}, [4, "bal-navbar-menu-end", {
    "interface": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navbar-menu-end"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navbar-menu-end":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavbarMenuEnd);
      }
      break;
  } });
}

const BalNavbarMenuEnd = NavbarMenuEnd;
const defineCustomElement = defineCustomElement$1;

export { BalNavbarMenuEnd, defineCustomElement };
