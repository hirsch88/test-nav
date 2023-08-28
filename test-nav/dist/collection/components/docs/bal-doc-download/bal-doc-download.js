import { h, Host } from '@stencil/core';
export class BalDocDownload {
  constructor() {
    this.link = '';
    this.iconLeft = 'document';
    this.iconRight = 'download';
    this.subject = '';
    this.subtitle = '';
  }
  render() {
    return (h(Host, { class: "bal-app" }, h("a", { href: this.link, style: { textDecoration: 'none' } }, h("bal-card", null, h("bal-card-content", null, h("bal-list", { disabled: true }, h("bal-list-item", null, h("bal-list-item-icon", null, h("bal-icon", { name: this.iconLeft })), h("bal-list-item-content", null, h("bal-list-item-title", null, this.subject), h("bal-list-item-subtitle", null, this.subtitle)), h("bal-list-item-icon", { right: true }, h("bal-icon", { name: this.iconRight })))))))));
  }
  static get is() { return "bal-doc-download"; }
  static get properties() {
    return {
      "link": {
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
        "attribute": "link",
        "reflect": false,
        "defaultValue": "''"
      },
      "iconLeft": {
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
        "attribute": "icon-left",
        "reflect": false,
        "defaultValue": "'document'"
      },
      "iconRight": {
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
        "attribute": "icon-right",
        "reflect": false,
        "defaultValue": "'download'"
      },
      "subject": {
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
        "attribute": "subject",
        "reflect": false,
        "defaultValue": "''"
      },
      "subtitle": {
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
        "attribute": "subtitle",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
