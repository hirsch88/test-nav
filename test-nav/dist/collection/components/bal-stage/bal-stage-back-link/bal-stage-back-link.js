import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class StageBackLink {
  constructor() {
    this.href = undefined;
    this.shadow = false;
    this.inverted = false;
  }
  render() {
    const block = BEM.block('stage-back-link');
    return (h(Host, { class: Object.assign({}, block.class()) }, h("a", { class: {
        'is-link': true,
        'is-inverted': this.inverted,
        'has-text-shadow': this.shadow,
      }, href: this.href }, h("bal-icon", { class: "mr-x-small", name: "caret-left", size: "x-small", inverted: this.inverted, shadow: this.shadow }), h("slot", null))));
  }
  static get is() { return "bal-stage-back-link"; }
  static get properties() {
    return {
      "href": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies the URL of the page the link goes to"
        },
        "attribute": "href",
        "reflect": false
      },
      "shadow": {
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
          "text": "If `true` adds a text shadow to improve readability on image background"
        },
        "attribute": "shadow",
        "reflect": false,
        "defaultValue": "false"
      },
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
          "text": "If `true` the color gets inverted for dark backgrounds"
        },
        "attribute": "inverted",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
}
