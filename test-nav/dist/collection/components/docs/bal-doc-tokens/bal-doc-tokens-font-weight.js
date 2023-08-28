import { h, Host } from '@stencil/core';
import tokens from '@baloise/design-system-tokens/dist/tokens.docs.json';
export class DocTokensFontWeight {
  render() {
    const typography = tokens.typography;
    const weights = [];
    for (const k in typography.weights) {
      weights.push({
        name: k,
        value: typography.weights[k],
      });
    }
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", { style: { minWidth: '220px' } }, "Example"), h("th", null, "Description"), h("th", { style: { minWidth: '240px' } }, "Token"))), h("tbody", null, weights.map(c => (h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("span", { class: `is-${c.name} has-font-title has-text-primary` }, "Headline"), h("br", null), h("span", { class: `is-${c.name} is-family-text has-text-primary` }, "Text")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name, " ", h("span", { class: "is-size-medium" }, "(", c.value, ")")), h("p", { class: "m-none is-size-small" }, c.value.description)), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-weight-", c.name, ")"))))))))));
  }
  static get is() { return "bal-doc-tokens-font-weight"; }
  static get elementRef() { return "el"; }
}
