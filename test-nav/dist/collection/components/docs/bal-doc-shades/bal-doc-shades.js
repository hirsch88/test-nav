import { h, Host } from '@stencil/core';
export class BalDocShades {
  constructor() {
    this.color = '';
  }
  render() {
    return (h(Host, null, h("div", { class: "columns is-multiline" }, h("bal-doc-color", { background: true, class: "column is-2", color: `${this.color}-0` }), h("bal-doc-color", { background: true, class: "column is-2", color: `${this.color}-1` }), h("bal-doc-color", { background: true, class: "column is-2", color: `${this.color}-2` }), h("bal-doc-color", { background: true, class: "column is-2", color: `${this.color}-3` }), h("bal-doc-color", { background: true, class: "column is-2", color: `${this.color}-4` })), h("div", { class: "columns is-multiline" }, h("bal-doc-color", { background: true, inverted: true, class: "column is-2", color: `${this.color}-5` }), h("bal-doc-color", { background: true, inverted: true, class: "column is-2", color: `${this.color}-6` }), h("bal-doc-color", { background: true, inverted: true, class: "column is-2", color: `${this.color}-7` }), h("bal-doc-color", { background: true, inverted: true, class: "column is-2", color: `${this.color}-8` }), h("bal-doc-color", { background: true, inverted: true, class: "column is-2", color: `${this.color}-9` }))));
  }
  static get is() { return "bal-doc-shades"; }
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
