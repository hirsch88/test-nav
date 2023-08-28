import { h, Host } from '@stencil/core';
export class BalDocIcons {
  constructor() {
    this.icons = '';
  }
  render() {
    return (h(Host, { class: "bal-app" }, h("div", { class: "columns is-multiline" }, this.icons.split(',').map(icon => (h("div", { class: "column is-3 p-x-small has-background-blue-light" }, h("div", { class: "p-small has-text-center is-flex is-align-items-center is-flex-direction-column is-justify-content-center" }, h("bal-icon", { color: "primary", name: icon }), h("span", { class: "mt-xx-small" }, icon))))))));
  }
  static get is() { return "bal-doc-icons"; }
  static get properties() {
    return {
      "icons": {
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
        "attribute": "icons",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
