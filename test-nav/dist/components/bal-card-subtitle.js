import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './bal-text2.js';

const CardSubtitle = proxyCustomElement(class CardSubtitle extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.inverted = false;
    this.bold = false;
    this.color = '';
  }
  render() {
    return (h(Host, { class: "bal-card-subtitle" }, h("bal-text", { bold: this.bold, space: "none", color: this.inverted ? 'white' : this.color }, h("slot", null))));
  }
}, [4, "bal-card-subtitle", {
    "inverted": [4],
    "bold": [4],
    "color": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-card-subtitle", "bal-text"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-card-subtitle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CardSubtitle);
      }
      break;
    case "bal-text":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalCardSubtitle = CardSubtitle;
const defineCustomElement = defineCustomElement$1;

export { BalCardSubtitle, defineCustomElement };
