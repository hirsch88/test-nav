import { Host, h } from '@stencil/core';
export class BalNotices {
  constructor() {
    this.interface = 'toast';
  }
  render() {
    return (h(Host, { class: {
        'bal-app': true,
        'bal-notices': true,
        [`has-${this.interface}`]: true,
      } }, h("slot", null)));
  }
  static get is() { return "bal-notices"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-notices.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-notices.css"]
    };
  }
  static get properties() {
    return {
      "interface": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'toast' | 'snackbar'",
          "resolved": "\"snackbar\" | \"toast\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": "The interface tells the notice where to show the notice."
            }],
          "text": ""
        },
        "attribute": "interface",
        "reflect": false,
        "defaultValue": "'toast'"
      }
    };
  }
}
