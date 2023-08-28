'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const tokens_docs = require('./tokens.docs-8f3188ad.js');

const DocTokensBorderColors = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.overview = false;
  }
  render() {
    const border = tokens_docs.tokens.border;
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
    return (index.h(index.Host, null, index.h("bal-doc-app", null, index.h("table", { class: "table tokens", style: { width: '100%' } }, index.h("thead", null, index.h("tr", null, index.h("th", { style: { width: '120px' } }, "Example"), index.h("th", null, "Name"), index.h("th", null, "Description"), this.overview ? '' : index.h("th", { style: { minWidth: '200px' } }, "Token"), this.overview ? '' : index.h("th", { style: { minWidth: '100px' } }, "value"))), index.h("tbody", null, colors.map((c, i) => (index.h("tr", null, index.h("td", { style: { verticalAlign: 'middle' }, class: `has-background-${isInverted(c)}` }, index.h("div", { class: `has-border-${c} has-radius-normal`, style: { width: '24px', height: '24px' } })), index.h("td", { style: { verticalAlign: 'middle' } }, index.h("p", { class: "has-text-weight-bold is-size-large m-none" }, c)), index.h("td", { style: { verticalAlign: 'middle' } }, index.h("p", { class: "m-none is-size-small" }, descriptions[c])), this.overview ? ('') : (index.h("td", { style: { verticalAlign: 'middle' } }, index.h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-color-border-", c, ")"))), this.overview ? ('') : (index.h("td", { style: { verticalAlign: 'middle' } }, index.h("p", { class: `mt-none mb-x-small is-size-small has-text-weight-bold py-xx-small` }, values[i])))))))))));
  }
  get el() { return index.getElement(this); }
};

exports.bal_doc_tokens_border_colors = DocTokensBorderColors;
