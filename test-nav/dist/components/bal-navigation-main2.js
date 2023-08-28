import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const NavigationMain = proxyCustomElement(class NavigationMain extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.ariaLabelMain = '';
  }
  render() {
    const mainEl = BEM.block('nav').element('main');
    return (h(Host, { class: Object.assign({}, mainEl.class()) }, h("nav", { role: "navigation", "aria-label": this.ariaLabelMain }, h("slot", { name: "main-head" })), h("slot", { name: "main-body" })));
  }
}, [4, "bal-navigation-main", {
    "ariaLabelMain": [1, "aria-label-main"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-main"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-main":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationMain);
      }
      break;
  } });
}

export { NavigationMain as N, defineCustomElement as d };
