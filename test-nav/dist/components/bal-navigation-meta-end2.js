import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const NavigationMetaEnd = proxyCustomElement(class NavigationMetaEnd extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const metaEndEl = BEM.block('nav').element('meta').element('end');
    return (h(Host, { class: Object.assign({}, metaEndEl.class()) }, h("slot", null)));
  }
}, [4, "bal-navigation-meta-end"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-meta-end"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-meta-end":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationMetaEnd);
      }
      break;
  } });
}

export { NavigationMetaEnd as N, defineCustomElement as d };
