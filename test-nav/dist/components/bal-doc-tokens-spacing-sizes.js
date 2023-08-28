import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as tokens } from './tokens.docs.js';
import { d as defineCustomElement$3 } from './bal-app2.js';
import { d as defineCustomElement$2 } from './bal-doc-app2.js';

const DocTokensSpacingSizes = proxyCustomElement(class DocTokensSpacingSizes extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const spacing = tokens.spacing;
    const sizes = [];
    const validSizes = [
      'xxxxx-large',
      'xxxx-large',
      'xxx-large',
      'xx-large',
      'x-large',
      'large',
      'medium',
      'normal',
      'small',
      'x-small',
      'xx-small',
    ].reverse();
    for (const k in spacing) {
      if (validSizes.includes(k)) {
        sizes.push({
          name: k,
          value: spacing[k],
        });
      }
    }
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", { style: { minWidth: '100px' } }, "Example"), h("th", null, "Description"), h("th", { style: { minWidth: '90px' } }, "Desktop"))), h("tbody", null, sizes.map(c => (h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("div", { class: `pt-${c.name} mt-x-small has-background-green` })), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name), h("p", { class: "m-none is-size-small" }, c.value.description)), h("td", { style: { verticalAlign: 'top' } }, h("span", { class: `has-text-weight-bold is-size-small` }, parseFloat(c.value.desktop.replace('rem')) * 16, "px"))))))))));
  }
  get el() { return this; }
}, [0, "bal-doc-tokens-spacing-sizes"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-tokens-spacing-sizes", "bal-app", "bal-doc-app"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-tokens-spacing-sizes":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocTokensSpacingSizes);
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

const BalDocTokensSpacingSizes = DocTokensSpacingSizes;
const defineCustomElement = defineCustomElement$1;

export { BalDocTokensSpacingSizes, defineCustomElement };
