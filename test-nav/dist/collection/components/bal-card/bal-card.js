import { h, Host } from '@stencil/core';
import isEmpty from 'lodash.isempty';
export class BalCard {
  constructor() {
    this.border = false;
    this.flat = false;
    this.square = false;
    this.inverted = false;
    this.clickable = false;
    this.selected = false;
    this.fullheight = false;
    this.space = '';
    this.color = 'white';
  }
  get colorTypeClass() {
    return isEmpty(this.color) ? '' : `is-${this.inverted ? 'blue' : this.color}`;
  }
  render() {
    return (h(Host, { class: {
        'bal-card': true,
        [`bal-card--${this.colorTypeClass}`]: !isEmpty(this.color),
        [`bal-card--is-${this.space}`]: this.space !== '',
        'bal-card--has-border': this.border,
        'bal-card--is-flat': this.flat,
        'bal-card--is-clickable': this.clickable,
        'bal-card--is-selected': this.selected,
        'bal-card--is-square': this.square,
        'bal-card--has-fullheight': this.fullheight,
      } }, h("slot", null)));
  }
  static get is() { return "bal-card"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-card.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-card.css"]
    };
  }
  static get properties() {
    return {
      "border": {
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
          "text": "If `true` a light blue border is added to the card."
        },
        "attribute": "border",
        "reflect": false,
        "defaultValue": "false"
      },
      "flat": {
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
          "text": "If `true` the card loses its shadow."
        },
        "attribute": "flat",
        "reflect": false,
        "defaultValue": "false"
      },
      "square": {
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
          "text": "If `true` the card loses its border radius."
        },
        "attribute": "square",
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
          "text": "If `true` the card background color becomes blue."
        },
        "attribute": "inverted",
        "reflect": false,
        "defaultValue": "false"
      },
      "clickable": {
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
          "text": "If `true` the card has a hover effect."
        },
        "attribute": "clickable",
        "reflect": false,
        "defaultValue": "false"
      },
      "selected": {
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
          "text": "If `true` the card gets a light background to indicate a selection."
        },
        "attribute": "selected",
        "reflect": false,
        "defaultValue": "false"
      },
      "fullheight": {
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
          "text": "If `true` the card uses 100% of the available height."
        },
        "attribute": "fullheight",
        "reflect": false,
        "defaultValue": "false"
      },
      "space": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalCardSpace",
          "resolved": "\"\" | \"large\" | \"medium\" | \"small\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines the space of the card content."
        },
        "attribute": "space",
        "reflect": false,
        "defaultValue": "''"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalCardColor",
          "resolved": "\"\" | \"primary\" | \"info\" | \"grey\" | \"danger\" | \"warning\" | \"success\" | \"red\" | \"yellow\" | \"green\" | \"purple\" | \"white\" | \"blue\" | \"red-light\" | \"yellow-light\" | \"purple-light\" | \"green-light\" | \"grey-light\" | \"purple-1\" | \"purple-2\" | \"purple-3\" | \"green-1\" | \"green-2\" | \"green-3\" | \"red-1\" | \"red-2\" | \"red-3\" | \"yellow-1\" | \"yellow-2\" | \"yellow-3\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines the color of the card."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'white'"
      }
    };
  }
}
