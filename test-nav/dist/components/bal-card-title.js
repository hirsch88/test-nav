import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './bal-heading2.js';

const CardTitle = proxyCustomElement(class CardTitle extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.inverted = false;
  }
  render() {
    return (h(Host, { class: "bal-card-title" }, h("bal-heading", { level: "h3", space: "none", inverted: this.inverted }, h("slot", null))));
  }
}, [4, "bal-card-title", {
    "inverted": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-card-title", "bal-heading"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-card-title":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CardTitle);
      }
      break;
    case "bal-heading":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalCardTitle = CardTitle;
const defineCustomElement = defineCustomElement$1;

export { BalCardTitle, defineCustomElement };
