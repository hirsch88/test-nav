import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as tokens } from './tokens.docs.js';
import { d as defineCustomElement$3 } from './bal-app2.js';
import { d as defineCustomElement$2 } from './bal-doc-app2.js';

const DocTokensBorder = proxyCustomElement(class DocTokensBorder extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const border = tokens.border;
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", { style: { minWidth: '130px' } }, "Example"), h("th", null, "Description"), h("th", { style: { minWidth: '200px' } }, "Token"), h("th", { style: { minWidth: '100px' } }, "value"))), h("tbody", null, h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("div", { class: `has-border-primary`, style: { width: '24px', height: '24px' } })), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "m-none is-size-small" }, "The default border is 2px and the only width we provide so far.")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-border-width-normal)")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: `mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small` }, border.width))))))));
  }
  get el() { return this; }
}, [0, "bal-doc-tokens-border"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-tokens-border", "bal-app", "bal-doc-app"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-tokens-border":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocTokensBorder);
      }
      break;
    case "bal-app":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-doc-app":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalDocTokensBorder = DocTokensBorder;
const defineCustomElement = defineCustomElement$1;

export { BalDocTokensBorder, defineCustomElement };
