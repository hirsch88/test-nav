import { h, Host } from '@stencil/core';
import tokens from '@baloise/design-system-tokens/dist/tokens.docs.json';
export class BalDocColor {
  constructor() {
    this.inverted = false;
    this.background = false;
    this.color = '';
    this.subject = '';
    this.description = '';
  }
  render() {
    const subject = this.subject !== '' ? this.subject : this.color;
    const hexValue = tokens.color[this.color].hex;
    return (h(Host, { class: "bal-app" }, h("div", { class: "has-radius-large has-shadow-normal" }, h("div", { class: `has-background-${this.color} has-radius-top-large is-flex is-justify-content-center is-align-items-center` }, h("strong", { class: `${this.inverted ? 'has-text-white' : 'has-text-blue'} has-font-title is-size-x-large py-normal`, style: { minHeight: '80px' } }, this.background ? 'A-a' : '')), h("div", { class: "is-flex is-flex-direction-column is-justify-content-center is-align-items-center p-x-small" }, h("h5", { class: "title is-size-normal m-none" }, subject), h("bal-text", { size: "small", style: { textAlign: 'center' } }, this.description), h("bal-text", { size: "small", color: "primary-light", style: { textAlign: 'center' } }, hexValue)))));
  }
  static get is() { return "bal-doc-color"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["bal-doc-color.sass"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["bal-doc-color.css"]
    };
  }
  static get properties() {
    return {
      "inverted": {
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
        "attribute": "inverted",
        "reflect": false,
        "defaultValue": "false"
      },
      "background": {
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
        "attribute": "background",
        "reflect": false,
        "defaultValue": "false"
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
        "defaultValue": "''"
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
      "description": {
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
        "attribute": "description",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
