import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const balTableCss = ".bal-table{display:block;position:static}.bal-table--is-fullwidth{display:-ms-flexbox;display:flex;width:100%}bal-checkbox .bal-radio-checkbox__label::before{top:0}bal-checkbox .bal-radio-checkbox__label::after{margin-top:0px}";

const Table = proxyCustomElement(class Table extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.expanded = false;
  }
  render() {
    const block = BEM.block('table');
    const fullwidthClass = 'is-fullwidth';
    const hasFullwidth = this.expanded;
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), { 'ag-theme-alpine': true }), block.modifier(fullwidthClass).class(hasFullwidth)) }, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return {
    css: balTableCss
  }; }
}, [36, "bal-table", {
    "expanded": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-table"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-table":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Table);
      }
      break;
  } });
}

const BalTable = Table;
const defineCustomElement = defineCustomElement$1;

export { BalTable, defineCustomElement };
