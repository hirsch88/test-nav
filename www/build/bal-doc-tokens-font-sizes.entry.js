import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { t as tokens } from './tokens.docs-b6e8e840.js';

const DocTokensFontSizes = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const typography = tokens.typography;
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
    ];
    for (const k in typography.sizes) {
      if (validSizes.includes(k)) {
        sizes.push({
          name: k,
          value: typography.sizes[k],
        });
      }
    }
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", { style: { minWidth: '130px' } }, "Example"), h("th", null, "Description"), h("th", { style: { minWidth: '200px' } }, "Token"), h("th", { style: { minWidth: '100px' } }, "Mobile"), h("th", { style: { minWidth: '100px' } }, "Tablet"), h("th", { style: { minWidth: '100px' } }, "Desktop"))), h("tbody", null, sizes.map(c => (h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("span", { class: `title is-size-${c.name}` }, "Aa")), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-x-small" }, c.name, " ", h("span", { class: "is-size-medium" }, "(", c.value.figmaName, ")")), h("p", { class: "m-none is-size-small" }, c.value.description)), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-size-", c.name, ")"), h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-line-height-", c.name, ")")), h("td", { style: { verticalAlign: 'top' } }, h("span", { class: `has-text-weight-bold is-size-small` }, c.value.mobile.fontSize), h("br", null), h("span", { class: `is-size-small` }, c.value.mobile.lineHeight)), h("td", { style: { verticalAlign: 'top' } }, h("span", { class: `has-text-weight-bold is-size-small` }, c.value.tablet.fontSize), h("br", null), h("span", { class: `is-size-small` }, c.value.tablet.lineHeight)), h("td", { style: { verticalAlign: 'top' } }, h("span", { class: `has-text-weight-bold is-size-small` }, c.value.desktop.fontSize), h("br", null), h("span", { class: `is-size-small` }, c.value.desktop.lineHeight))))))))));
  }
  get el() { return getElement(this); }
};

export { DocTokensFontSizes as bal_doc_tokens_font_sizes };
