import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const NavigationMeta = proxyCustomElement(class NavigationMeta extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.ariaLabelMeta = '';
  }
  render() {
    const metaEl = BEM.block('nav').element('meta');
    return (h(Host, { class: Object.assign({}, metaEl.class()) }, h("nav", { class: "container", role: "navigation", "aria-label": this.ariaLabelMeta }, h("slot", null))));
  }
}, [4, "bal-navigation-meta", {
    "ariaLabelMeta": [1, "aria-label-meta"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-meta"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-meta":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationMeta);
      }
      break;
  } });
}

export { NavigationMeta as N, defineCustomElement as d };
