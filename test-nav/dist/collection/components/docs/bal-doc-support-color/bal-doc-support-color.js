import { h, Host } from '@stencil/core';
export class BalDocSupportColor {
  constructor() {
    this.color = '';
  }
  render() {
    return (h(Host, null, h("div", { class: "columns is-multiline" }, h("bal-doc-color", { class: "column is-2", color: `${this.color}-1` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-2` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-3` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-4` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-5` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-6` }))));
  }
  static get is() { return "bal-doc-support-color"; }
  static get properties() {
    return {
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
