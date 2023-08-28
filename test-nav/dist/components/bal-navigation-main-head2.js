import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const NavigationMainHead = proxyCustomElement(class NavigationMainHead extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const mainHeadEl = BEM.block('nav').element('main').element('head');
    return (h(Host, { class: Object.assign({}, mainHeadEl.class()) }, h("slot", null)));
  }
}, [4, "bal-navigation-main-head"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-main-head"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-main-head":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationMainHead);
      }
      break;
  } });
}

export { NavigationMainHead as N, defineCustomElement as d };
