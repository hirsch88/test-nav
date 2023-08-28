import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as tokens } from './tokens.docs.js';
import { d as defineCustomElement$3 } from './bal-app2.js';
import { d as defineCustomElement$2 } from './bal-doc-app2.js';

const DocTokensBorderTextShadow = proxyCustomElement(class DocTokensBorderTextShadow extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const textShadows = tokens.shadow.text;
    const shadowTokens = [];
    for (const k in textShadows) {
      shadowTokens.push({
        name: k,
        value: textShadows[k],
      });
    }
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", { style: { minWidth: '120px' } }, "Example"), h("th", null, "Description"), h("th", { style: { minWidth: '220px' } }, "Token"), h("th", { style: { minWidth: '230px' } }, "Value"))), h("tbody", null, shadowTokens.map(c => (h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("div", { style: { height: '48px', width: '80px' }, class: `mt-x-small has-background-yellow-1 p-x-small` }, h("p", { class: `has-text-shadow${`-${c.name}`}` }, "Shadow"))), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name), h("p", { class: "m-none is-size-small" }, c.value.description)), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-text-shadow", `-${c.name}`, ")")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small" }, c.value.value))))))))));
  }
  get el() { return this; }
}, [0, "bal-doc-tokens-text-shadow"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-tokens-text-shadow", "bal-app", "bal-doc-app"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-tokens-text-shadow":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocTokensBorderTextShadow);
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

const BalDocTokensTextShadow = DocTokensBorderTextShadow;
const defineCustomElement = defineCustomElement$1;

export { BalDocTokensTextShadow, defineCustomElement };
