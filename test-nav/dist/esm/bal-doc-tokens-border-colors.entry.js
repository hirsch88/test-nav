import { r as registerInstance, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { t as tokens } from './tokens.docs-b6e8e840.js';

const DocTokensBorderColors = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.overview = false;
  }
  render() {
    const border = tokens.border;
    const colors = Object.keys(border.colors);
    const values = Object.values(border.colors);
    const descriptions = {
      'primary': 'Use for focused or selected state.',
      'grey': 'Default border color for inactive state.',
      'grey-dark': 'Use for disabled state.',
      'warning': 'Use for warning/hint state.',
      'success': 'Use for valid state.',
      'danger': 'Use for invalid state.',
      'white': 'Default color on dark backgrounds.',
      'primary-light': 'Disabled or secondary color on dark backgrounds.',
    };
    const isInverted = (v) => (['white', 'primary-light'].includes(v) ? 'primary' : '');
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", { style: { width: '120px' } }, "Example"), h("th", null, "Name"), h("th", null, "Description"), this.overview ? '' : h("th", { style: { minWidth: '200px' } }, "Token"), this.overview ? '' : h("th", { style: { minWidth: '100px' } }, "value"))), h("tbody", null, colors.map((c, i) => (h("tr", null, h("td", { style: { verticalAlign: 'middle' }, class: `has-background-${isInverted(c)}` }, h("div", { class: `has-border-${c} has-radius-normal`, style: { width: '24px', height: '24px' } })), h("td", { style: { verticalAlign: 'middle' } }, h("p", { class: "has-text-weight-bold is-size-large m-none" }, c)), h("td", { style: { verticalAlign: 'middle' } }, h("p", { class: "m-none is-size-small" }, descriptions[c])), this.overview ? ('') : (h("td", { style: { verticalAlign: 'middle' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-color-border-", c, ")"))), this.overview ? ('') : (h("td", { style: { verticalAlign: 'middle' } }, h("p", { class: `mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small` }, values[i])))))))))));
  }
  get el() { return getElement(this); }
};

export { DocTokensBorderColors as bal_doc_tokens_border_colors };
