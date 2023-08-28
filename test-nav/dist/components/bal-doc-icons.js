import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './bal-icon2.js';

const BalDocIcons$1 = proxyCustomElement(class BalDocIcons extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.icons = '';
  }
  render() {
    return (h(Host, { class: "bal-app" }, h("div", { class: "columns is-multiline" }, this.icons.split(',').map(icon => (h("div", { class: "column is-3 p-x-small has-background-blue-light" }, h("div", { class: "p-small has-text-center is-flex is-align-items-center is-flex-direction-column is-justify-content-center" }, h("bal-icon", { color: "primary", name: icon }), h("span", { class: "mt-xx-small" }, icon))))))));
  }
}, [0, "bal-doc-icons", {
    "icons": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-icons", "bal-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-icons":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BalDocIcons$1);
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalDocIcons = BalDocIcons$1;
const defineCustomElement = defineCustomElement$1;

export { BalDocIcons, defineCustomElement };
