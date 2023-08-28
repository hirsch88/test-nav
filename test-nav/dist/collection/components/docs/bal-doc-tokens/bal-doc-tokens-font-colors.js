import { h, Host } from '@stencil/core';
import tokens from '@baloise/design-system-tokens/dist/tokens.docs.json';
export class DocTokensFontColors {
  render() {
    const typography = tokens.typography;
    const colorMap = typography.colors;
    const colors = Object.keys(colorMap);
    const values = Object.values(colorMap);
    const colorTokens = tokens.color;
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", { style: { minWidth: '130px' } }, "Example"), h("th", null, "Description"), h("th", { style: { minWidth: '200px' } }, "Token"))), h("tbody", null, colors.map((c, i) => (h("tr", null, h("td", { style: {
        verticalAlign: 'top',
        background: c === 'white' ? 'var(--bal-color-primary)' : 'transparent',
      } }, h("span", { class: `title is-size-xxx-large has-text-${c}` }, "Aa")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c, " ", h("span", { class: "is-size-medium" }, "(", values[i], ")")), h("p", { class: "m-none is-size-small" }, colorTokens[values[i]].description)), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-color-text-", c, ")"), h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-color-", values[i], ")"))))))))));
  }
  static get is() { return "bal-doc-tokens-font-colors"; }
  static get elementRef() { return "el"; }
}
