import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const NavbarMenuStart = proxyCustomElement(class NavbarMenuStart extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.interface = 'app';
  }
  render() {
    const menuStartEl = BEM.block('navbar').element('menu').element('start');
    return (h(Host, { class: Object.assign(Object.assign({}, menuStartEl.class()), menuStartEl.modifier(`context-${this.interface}`).class()) }, h("slot", null)));
  }
}, [4, "bal-navbar-menu-start", {
    "interface": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navbar-menu-start"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navbar-menu-start":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavbarMenuStart);
      }
      break;
  } });
}

const BalNavbarMenuStart = NavbarMenuStart;
const defineCustomElement = defineCustomElement$1;

export { BalNavbarMenuStart, defineCustomElement };
