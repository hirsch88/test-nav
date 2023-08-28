import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as tokens } from './tokens.docs.js';
import { d as defineCustomElement$3 } from './bal-app2.js';
import { d as defineCustomElement$2 } from './bal-doc-app2.js';

const DocTokensContainers = proxyCustomElement(class DocTokensContainers extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const container = tokens.container;
    const sizes = [];
    for (const k in container.size) {
      sizes.push({
        name: k,
        value: container.size[k],
      });
    }
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", null, "Description"), h("th", { style: { minWidth: '200px' } }, "Token / CSS class"), h("th", { style: { minWidth: '100px' } }, "Value"))), h("tbody", null, sizes.map(c => (h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name)), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-container-size-", c.name, ")"), h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "container", c.name !== 'normal' ? ` is-${c.name}` : '')), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: `has-text-weight-bold is-size-small py-xx-small` }, c.value))))))))));
  }
  get el() { return this; }
}, [0, "bal-doc-tokens-containers"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-tokens-containers", "bal-app", "bal-doc-app"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-tokens-containers":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocTokensContainers);
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

const BalDocTokensContainers = DocTokensContainers;
const defineCustomElement = defineCustomElement$1;

export { BalDocTokensContainers, defineCustomElement };
