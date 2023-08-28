import { r as registerInstance, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { B as BEM } from './bem-1b28532d.js';

const balTableCss = ".bal-table{display:block;position:static}.bal-table--is-fullwidth{display:-ms-flexbox;display:flex;width:100%}bal-checkbox .bal-radio-checkbox__label::before{top:0}bal-checkbox .bal-radio-checkbox__label::after{margin-top:0px}";

const Table = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expanded = false;
  }
  render() {
    const block = BEM.block('table');
    const fullwidthClass = 'is-fullwidth';
    const hasFullwidth = this.expanded;
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), { 'ag-theme-alpine': true }), block.modifier(fullwidthClass).class(hasFullwidth)) }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
Table.style = {
  css: balTableCss
};

export { Table as bal_table };
