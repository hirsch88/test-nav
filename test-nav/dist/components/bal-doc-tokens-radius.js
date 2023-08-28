import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as tokens } from './tokens.docs.js';
import { d as defineCustomElement$3 } from './bal-app2.js';
import { d as defineCustomElement$2 } from './bal-doc-app2.js';

const DocTokensBorderRadius = proxyCustomElement(class DocTokensBorderRadius extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const radius = tokens.radius;
    const sizes = [];
    for (const k in radius) {
      if (radius[k].deprecated !== true) {
        sizes.push({
          name: k,
          value: radius[k],
        });
      }
    }
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", { style: { minWidth: '120px' } }, "Example"), h("th", null, "Name"), h("th", { style: { minWidth: '230px' } }, "Token"), h("th", { style: { minWidth: '80px' } }, "Value"))), h("tbody", null, sizes.map(c => (h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("div", { style: { height: '48px', width: '80px' }, class: `has-radius${`-${c.name}`} mt-x-small has-background-purple` })), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name), h("p", { class: "m-none is-size-small" }, c.value.description)), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-radius", `-${c.name}`, ")")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small" }, c.value.value))))))))));
  }
  get el() { return this; }
}, [0, "bal-doc-tokens-radius"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-tokens-radius", "bal-app", "bal-doc-app"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-tokens-radius":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocTokensBorderRadius);
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

const BalDocTokensRadius = DocTokensBorderRadius;
const defineCustomElement = defineCustomElement$1;

export { BalDocTokensRadius, defineCustomElement };
