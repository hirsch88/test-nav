import { h, Host } from '@stencil/core';
import { BEM } from '../../utils/bem';
export class Table {
  constructor() {
    this.expanded = false;
  }
  render() {
    const block = BEM.block('table');
    const fullwidthClass = 'is-fullwidth';
    const hasFullwidth = this.expanded;
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), { 'ag-theme-alpine': true }), block.modifier(fullwidthClass).class(hasFullwidth)) }, h("slot", null)));
  }
  static get is() { return "bal-table"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-table.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-table.css"]
    };
  }
  static get properties() {
    return {
      "expanded": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the table has a full width"
        },
        "attribute": "expanded",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
}
