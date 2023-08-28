import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const NavigationMainBody = proxyCustomElement(class NavigationMainBody extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const mainBodyEl = BEM.block('nav').element('main').element('body');
    return (h(Host, { class: Object.assign({}, mainBodyEl.class()) }, h("slot", null)));
  }
}, [4, "bal-navigation-main-body"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-main-body"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-main-body":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationMainBody);
      }
      break;
  } });
}

export { NavigationMainBody as N, defineCustomElement as d };
