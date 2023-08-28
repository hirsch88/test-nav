import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as tokens } from './tokens.docs.js';
import { d as defineCustomElement$3 } from './bal-app2.js';
import { d as defineCustomElement$2 } from './bal-doc-app2.js';

const DocTokensBorderShadow = proxyCustomElement(class DocTokensBorderShadow extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const boxShadows = tokens.shadow.box;
    const shadowTokens = [];
    for (const k in boxShadows) {
      shadowTokens.push({
        name: k,
        value: boxShadows[k],
      });
    }
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", { style: { minWidth: '120px' } }, "Example"), h("th", null, "Description"), h("th", { style: { minWidth: '220px' } }, "Token"), h("th", { style: { minWidth: '230px' } }, "Value"))), h("tbody", null, shadowTokens.map(c => (h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("div", { style: { height: '48px', width: '80px' }, class: `has-shadow${`-${c.name}`} mt-x-small has-background-purple-2` })), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name), h("p", { class: "m-none is-size-small" }, c.value.description)), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-shadow", `-${c.name}`, ")")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small" }, c.value.value))))))))));
  }
  get el() { return this; }
}, [0, "bal-doc-tokens-shadow"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-tokens-shadow", "bal-app", "bal-doc-app"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-tokens-shadow":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocTokensBorderShadow);
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

const BalDocTokensShadow = DocTokensBorderShadow;
const defineCustomElement = defineCustomElement$1;

export { BalDocTokensShadow, defineCustomElement };
