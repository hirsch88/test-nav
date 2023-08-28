import { h, Host } from '@stencil/core';
import tokens from '@baloise/design-system-tokens/dist/tokens.docs.json';
export class DocTokensSpacingSizes {
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
  static get is() { return "bal-doc-tokens-spacing-sizes"; }
  static get elementRef() { return "el"; }
}
