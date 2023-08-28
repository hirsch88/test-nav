import { h, Host } from '@stencil/core';
export class BalDocImage {
  constructor() {
    this.src = '';
    this.text = '';
  }
  render() {
    return (h(Host, { class: "bal-app" }, h("p", { style: { textAlign: 'center' } }, h("img", { loading: "lazy", src: this.src, alt: this.text }))));
  }
  static get is() { return "bal-doc-image"; }
  static get properties() {
    return {
      "src": {
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
        "attribute": "src",
        "reflect": false,
        "defaultValue": "''"
      },
      "text": {
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
        "attribute": "text",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
