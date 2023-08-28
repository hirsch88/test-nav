import { Host, h } from '@stencil/core';
import { BEM } from '../../utils/bem';
export class List {
  constructor() {
    this.disabled = false;
    this.background = 'light';
    this.border = false;
    this.accordionOneLevel = false;
    this.size = '';
  }
  accordionOneLevelHandler(newValue, oldValue) {
    if (newValue !== oldValue) {
      const allNestedLists = Array.from(this.el.querySelectorAll('bal-list'));
      allNestedLists.forEach(list => (list.accordionOneLevel = newValue));
    }
  }
  componentWillLoad() {
    this.accordionOneLevelHandler(this.accordionOneLevel, false);
  }
  render() {
    const block = BEM.block('list');
    const closestListEl = this.el.closest('.bal-list');
    const nested = closestListEl !== null && closestListEl !== this.el;
    return (h(Host, { role: "list", class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('nested').class(nested)), block.modifier('disabled').class(this.disabled)), block.modifier('border').class(this.border)), block.modifier(`size-${this.size || 'normal'}`).class()), block.modifier(`background-${this.background}`).class()) }, h("slot", null)));
  }
  static get is() { return "bal-list"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-list.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-list.css"]
    };
  }
  static get properties() {
    return {
      "disabled": {
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
          "text": "If `true` the list item can not be hovered"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "background": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalListBackground",
          "resolved": "\"color\" | \"dark\" | \"light\"",
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
          "text": "If `true` the list can be used on a light, dark or colored backgrounds"
        },
        "attribute": "background",
        "reflect": false,
        "defaultValue": "'light'"
      },
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
          "text": "If `true` each list item has a bottom border"
        },
        "attribute": "border",
        "reflect": false,
        "defaultValue": "false"
      },
      "accordionOneLevel": {
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
          "text": "If `true` only one of the layers can be open and the others close automatically"
        },
        "attribute": "accordion-one-level",
        "reflect": false,
        "defaultValue": "false"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalListSize",
          "resolved": "\"\" | \"large\" | \"small\"",
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
          "text": "Defines the min height of the list item"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "accordionOneLevel",
        "methodName": "accordionOneLevelHandler"
      }];
  }
}
