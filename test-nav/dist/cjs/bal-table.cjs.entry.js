'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const bem = require('./bem-5d122a5c.js');

const balTableCss = ".bal-table{display:block;position:static}.bal-table--is-fullwidth{display:-ms-flexbox;display:flex;width:100%}bal-checkbox .bal-radio-checkbox__label::before{top:0}bal-checkbox .bal-radio-checkbox__label::after{margin-top:0px}";

const Table = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.expanded = false;
  }
  render() {
    const block = bem.BEM.block('table');
    const fullwidthClass = 'is-fullwidth';
    const hasFullwidth = this.expanded;
    return (index.h(index.Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), { 'ag-theme-alpine': true }), block.modifier(fullwidthClass).class(hasFullwidth)) }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
Table.style = {
  css: balTableCss
};

exports.bal_table = Table;
