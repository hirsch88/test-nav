'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const tokens_docs = require('./tokens.docs-8f3188ad.js');

const DocTokensColors = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const color = tokens_docs.tokens.color;
    const colors = [];
    const validColors = [
      'primary',
      'black',
      'white',
      'grey',
      'light-blue',
      'purple',
      'green',
      'red',
      'yellow',
      'success',
      'warning',
      'danger',
    ];
    for (const k of validColors) {
      colors.push({
        name: k,
        value: color[k],
      });
    }
    return (index.h(index.Host, null, index.h("bal-doc-app", null, index.h("table", { class: "table tokens", style: { width: '100%' } }, index.h("thead", null, index.h("tr", null, index.h("th", { style: { minWidth: '200px' } }, "Example"), index.h("th", null, "Description"), index.h("th", { style: { minWidth: '220px' } }, "Token"))), colors.map(c => (index.h("tbody", null, index.h("tr", null, index.h("td", { style: { verticalAlign: 'top' } }, index.h("div", { class: `has-background-${c.name} p-x-small mb-x-small has-radius-normal` }, index.h("p", { class: `title is-size-large has-text-${c.name}-inverted` }, "Aa"), index.h("p", { class: `mt-none mb-xx-small is-size-small has-text-${c.name}-inverted` }, c.value.hex), index.h("p", { class: `m-none is-size-small has-text-${c.name}-inverted` }, hexToRgbA(c.value.hex)))), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "has-text-weight-bold is-size-large mt-none mb-xx-small" }, c.name), index.h("p", { class: "m-none is-size-small" }, c.value.description)), index.h("td", { style: { verticalAlign: 'top' } }, index.h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-color-", c.name, ")"), index.h("p", { class: "m-none is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal" }, "$", c.name))), c.name !== 'black' && c.name !== 'white' ? (index.h("tr", null, index.h("td", { colSpan: 3 }, index.h("p", { class: "has-text-weight-bold is-size-normal" }, "Shades"), index.h("span", { class: "is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-color-", c.name, "-x)"), index.h("div", { class: "is-flex fg-x-small mt-x-small" }, index.h("div", { class: `has-background-${c.name}-1 has-radius-normal p-x-small is-flex-grow-1` }, index.h("span", { class: `has-text-${c.name}-1-inverted has-text-weight-bold` }, "1")), index.h("div", { class: `has-background-${c.name}-2 has-radius-normal p-x-small is-flex-grow-1` }, index.h("span", { class: `has-text-${c.name}-2-inverted has-text-weight-bold` }, "2")), index.h("div", { class: `has-background-${c.name}-3 has-radius-normal p-x-small is-flex-grow-1` }, index.h("span", { class: `has-text-${c.name}-3-inverted has-text-weight-bold` }, "3")), index.h("div", { class: `has-background-${c.name}-4 has-radius-normal p-x-small is-flex-grow-1` }, index.h("span", { class: `has-text-${c.name}-4-inverted has-text-weight-bold` }, "4")), index.h("div", { class: `has-background-${c.name}-5 has-radius-normal p-x-small is-flex-grow-1` }, index.h("span", { class: `has-text-${c.name}-5-inverted has-text-weight-bold` }, "5")), index.h("div", { class: `has-background-${c.name}-6 has-radius-normal p-x-small is-flex-grow-1` }, index.h("span", { class: `has-text-${c.name}-6-inverted has-text-weight-bold` }, "6")))))) : (''), index.h("tr", null, index.h("td", { colSpan: 3, class: "pb-large" })))))))));
  }
  get el() { return index.getElement(this); }
};
function hexToRgbA(hex) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
  }
  throw new Error('Bad Hex');
}

exports.bal_doc_tokens_colors = DocTokensColors;
