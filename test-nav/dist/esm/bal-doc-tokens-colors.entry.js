import { r as registerInstance, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { t as tokens } from './tokens.docs-b6e8e840.js';

const DocTokensColors = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const color = tokens.color;
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
    return (h(Host, null, h("bal-doc-app", null, h("table", { class: "table tokens", style: { width: '100%' } }, h("thead", null, h("tr", null, h("th", { style: { minWidth: '200px' } }, "Example"), h("th", null, "Description"), h("th", { style: { minWidth: '220px' } }, "Token"))), colors.map(c => (h("tbody", null, h("tr", null, h("td", { style: { verticalAlign: 'top' } }, h("div", { class: `has-background-${c.name} p-x-small mb-x-small has-radius-normal` }, h("p", { class: `title is-size-large has-text-${c.name}-inverted` }, "Aa"), h("p", { class: `mt-none mb-xx-small is-size-small has-text-${c.name}-inverted` }, c.value.hex), h("p", { class: `m-none is-size-small has-text-${c.name}-inverted` }, hexToRgbA(c.value.hex)))), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "has-text-weight-bold is-size-large mt-none mb-xx-small" }, c.name), h("p", { class: "m-none is-size-small" }, c.value.description)), h("td", { style: { verticalAlign: 'top' } }, h("p", { class: "mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-color-", c.name, ")"), h("p", { class: "m-none is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal" }, "$", c.name))), c.name !== 'black' && c.name !== 'white' ? (h("tr", null, h("td", { colSpan: 3 }, h("p", { class: "has-text-weight-bold is-size-normal" }, "Shades"), h("span", { class: "is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal has-text-weight-bold has-no-wrap" }, "var(--bal-color-", c.name, "-x)"), h("div", { class: "is-flex fg-x-small mt-x-small" }, h("div", { class: `has-background-${c.name}-1 has-radius-normal p-x-small is-flex-grow-1` }, h("span", { class: `has-text-${c.name}-1-inverted has-text-weight-bold` }, "1")), h("div", { class: `has-background-${c.name}-2 has-radius-normal p-x-small is-flex-grow-1` }, h("span", { class: `has-text-${c.name}-2-inverted has-text-weight-bold` }, "2")), h("div", { class: `has-background-${c.name}-3 has-radius-normal p-x-small is-flex-grow-1` }, h("span", { class: `has-text-${c.name}-3-inverted has-text-weight-bold` }, "3")), h("div", { class: `has-background-${c.name}-4 has-radius-normal p-x-small is-flex-grow-1` }, h("span", { class: `has-text-${c.name}-4-inverted has-text-weight-bold` }, "4")), h("div", { class: `has-background-${c.name}-5 has-radius-normal p-x-small is-flex-grow-1` }, h("span", { class: `has-text-${c.name}-5-inverted has-text-weight-bold` }, "5")), h("div", { class: `has-background-${c.name}-6 has-radius-normal p-x-small is-flex-grow-1` }, h("span", { class: `has-text-${c.name}-6-inverted has-text-weight-bold` }, "6")))))) : (''), h("tr", null, h("td", { colSpan: 3, class: "pb-large" })))))))));
  }
  get el() { return getElement(this); }
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

export { DocTokensColors as bal_doc_tokens_colors };
