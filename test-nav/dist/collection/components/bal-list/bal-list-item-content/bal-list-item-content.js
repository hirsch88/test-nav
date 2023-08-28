import { Host, h } from '@stencil/core';
export class ListItemContent {
  constructor() {
    this.contentAlignment = undefined;
  }
  render() {
    return (h(Host, { class: {
        'bal-list__item__content': true,
        [`bal-list__item__content--${this.contentAlignment}`]: this.contentAlignment !== undefined,
      } }, h("slot", null)));
  }
  static get is() { return "bal-list-item-content"; }
  static get properties() {
    return {
      "contentAlignment": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "content-alignment",
        "reflect": false
      }
    };
  }
}
