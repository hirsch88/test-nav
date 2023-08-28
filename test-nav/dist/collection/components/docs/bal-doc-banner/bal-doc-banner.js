import { h, Host } from '@stencil/core';
export class DocBanner {
  constructor() {
    this.subtitle = 'Component';
    this.color = 'primary';
    this.shadowDom = false;
  }
  render() {
    return (h(Host, { style: { marginBottom: '3rem', display: 'block' } }, h("bal-doc-app", null, h("div", { class: {
        'bal-doc-banner__inner pt-x-large pb-large px-large': true,
        ['bal-doc-banner__inner--' + this.color]: true,
      }, style: {
        marginTop: '-32px',
        marginLeft: '-32px',
        marginRight: '-32px',
      } }, h("bal-heading", { space: "none", subtitle: true, level: "h3", inverted: this.color === 'primary' }, this.subtitle), h("bal-heading", { space: "none", level: "display-2", inverted: this.color === 'primary' }, h("slot", null), this.shadowDom ? (h("bal-tag", { class: "ml-normal is-vertical-align-middle", color: "red", light: true, size: "small" }, h("span", { class: "has-text-weight-bold" }, "Shadow DOM"))) : (''))))));
  }
  static get is() { return "bal-doc-banner"; }
  static get originalStyleUrls() {
    return {
      "$": ["bal-doc-banner.sass"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["bal-doc-banner.css"]
    };
  }
  static get properties() {
    return {
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
        "defaultValue": "'Component'"
      },
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
        "defaultValue": "'primary'"
      },
      "shadowDom": {
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
        "attribute": "shadow-dom",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
}
