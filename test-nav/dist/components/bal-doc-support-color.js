import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './bal-doc-color2.js';
import { d as defineCustomElement$2 } from './bal-text2.js';

const BalDocSupportColor$1 = proxyCustomElement(class BalDocSupportColor extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.color = '';
  }
  render() {
    return (h(Host, null, h("div", { class: "columns is-multiline" }, h("bal-doc-color", { class: "column is-2", color: `${this.color}-1` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-2` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-3` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-4` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-5` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-6` }))));
  }
}, [0, "bal-doc-support-color", {
    "color": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-support-color", "bal-doc-color", "bal-text"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-support-color":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BalDocSupportColor$1);
      }
      break;
    case "bal-doc-color":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-text":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalDocSupportColor = BalDocSupportColor$1;
const defineCustomElement = defineCustomElement$1;

export { BalDocSupportColor, defineCustomElement };
