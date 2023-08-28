import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class NavigationMenuListItem {
  constructor() {
    this.href = undefined;
    this.tracking = {};
    this.target = '_self';
  }
  render() {
    const navMenuListItemEl = BEM.block('nav').element('menu').element('list').element('item');
    return (h(Host, { class: Object.assign({}, navMenuListItemEl.class()) }, h("a", Object.assign({ class: Object.assign({}, navMenuListItemEl.element('link').class()), href: this.href, target: this.target }, this.tracking), h("slot", null))));
  }
  static get is() { return "bal-navigation-menu-list-item"; }
  static get properties() {
    return {
      "href": {
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
        "attribute": "href",
        "reflect": false
      },
      "tracking": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Attributes",
          "resolved": "{ [key: string]: any; }",
          "references": {
            "Attributes": {
              "location": "import",
              "path": "../../../utils/attributes"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "{}"
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalButtonTarget",
          "resolved": "\" _parent\" | \"_blank\" | \"_self\" | \"_top\"",
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
          "text": ""
        },
        "attribute": "target",
        "reflect": false,
        "defaultValue": "'_self'"
      }
    };
  }
}
