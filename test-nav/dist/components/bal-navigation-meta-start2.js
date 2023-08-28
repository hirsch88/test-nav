import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const NavigationMetaStart = proxyCustomElement(class NavigationMetaStart extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const metaStartEl = BEM.block('nav').element('meta').element('start');
    return (h(Host, { class: Object.assign({}, metaStartEl.class()) }, h("slot", null)));
  }
}, [4, "bal-navigation-meta-start"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-meta-start"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-meta-start":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationMetaStart);
      }
      break;
  } });
}

export { NavigationMetaStart as N, defineCustomElement as d };
