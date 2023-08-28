import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const DataLabel = proxyCustomElement(class DataLabel extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.required = false;
  }
  render() {
    return (h(Host, { class: Object.assign({}, BEM.block('data-label').class()) }, h("slot", null), this.required ? '*' : ''));
  }
}, [4, "bal-data-label", {
    "required": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-data-label"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-data-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DataLabel);
      }
      break;
  } });
}

const BalDataLabel = DataLabel;
const defineCustomElement = defineCustomElement$1;

export { BalDataLabel, defineCustomElement };
