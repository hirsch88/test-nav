import { h, Host } from '@stencil/core';
export class DocLinkList {
  constructor() {
    this.oneColumn = false;
  }
  render() {
    return (h(Host, { class: {
        'bal-doc-link-list': true,
        'link-list': true,
        'has-one-column': this.oneColumn,
      } }, h("slot", null)));
  }
  static get is() { return "bal-doc-link-list"; }
  static get originalStyleUrls() {
    return {
      "$": ["bal-doc-link-list.sass"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["bal-doc-link-list.css"]
    };
  }
  static get properties() {
    return {
      "oneColumn": {
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
          "text": ""
        },
        "attribute": "one-column",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
}
