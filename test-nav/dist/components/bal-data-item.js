import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const DataItem = proxyCustomElement(class DataItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.disabled = false;
    this.border = false;
  }
  render() {
    const element = BEM.block('data-item');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, element.class()), element.modifier('is-disabled').class(this.disabled)), element.modifier('has-border').class(this.border)) }, h("slot", null)));
  }
}, [4, "bal-data-item", {
    "disabled": [4],
    "border": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-data-item"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-data-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DataItem);
      }
      break;
  } });
}

const BalDataItem = DataItem;
const defineCustomElement = defineCustomElement$1;

export { BalDataItem, defineCustomElement };
