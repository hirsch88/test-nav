import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as tokens } from './tokens.docs.js';
import { d as defineCustomElement$3 } from './bal-app2.js';
import { d as defineCustomElement$2 } from './bal-doc-app2.js';

const DocTokensBreakpoints = proxyCustomElement(class DocTokensBreakpoints extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const breakpoint = tokens.breakpoint;
    const sizes = [];
    for (const k in breakpoint) {
      sizes.push({
        name: k,
        value: breakpoint[k],
      });
    }
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", null, "Description"), h("th", { style: { minWidth: '200px' } }, "Token"), h("th", { style: { minWidth: '100px' } }, "Value"))), h("tbody", null, h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, "mobile")), h("td", { style: { verticalAlign: 'top' } }), h("td", { style: { verticalAlign: 'top' } }, h("span", { class: `has-text-weight-bold is-size-small` }, "0px"))), sizes.map(c => (h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name)), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-breakpoint-", c.name, ")")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: `has-text-weight-bold is-size-small py-xx-small` }, c.value))))))))));
  }
  get el() { return this; }
}, [0, "bal-doc-tokens-breakpoints"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-tokens-breakpoints", "bal-app", "bal-doc-app"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-tokens-breakpoints":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocTokensBreakpoints);
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

const BalDocTokensBreakpoints = DocTokensBreakpoints;
const defineCustomElement = defineCustomElement$1;

export { BalDocTokensBreakpoints, defineCustomElement };
