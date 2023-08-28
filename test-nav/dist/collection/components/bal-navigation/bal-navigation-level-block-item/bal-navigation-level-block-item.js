import { h, Host } from '@stencil/core';
import { inheritTrackingAttributes } from '../../../utils/attributes';
export class NavigationLevelBlockItem {
  constructor() {
    this.inheritAttributes = {};
    this.label = '';
    this.value = `block-value-${navigationLevelBlockItemIds++}`;
    this.link = undefined;
    this.linkLabel = undefined;
    this.target = '_self';
  }
  componentWillLoad() {
    this.inheritAttributes = inheritTrackingAttributes(this.el);
  }
  async getLevelInfo() {
    return {
      type: 'block-item',
      value: this.value,
      label: this.label,
      link: this.link,
      target: this.target,
      trackingData: this.inheritAttributes,
      onClick: (ev) => this.balClick.emit(ev),
    };
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "bal-navigation-level-block-item"; }
  static get properties() {
    return {
      "label": {
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
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "value": {
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
        "attribute": "value",
        "reflect": false,
        "defaultValue": "`block-value-${navigationLevelBlockItemIds++}`"
      },
      "link": {
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
        "attribute": "link",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "linkLabel": {
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
        "attribute": "link-label",
        "reflect": false,
        "defaultValue": "undefined"
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
  static get events() {
    return [{
        "method": "balClick",
        "name": "balClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "BalEvents.BalNavigationLevelBlockItemClickDetail",
          "resolved": "MouseEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "getLevelInfo": {
        "complexType": {
          "signature": "() => Promise<LevelInfo>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "LevelInfo": {
              "location": "import",
              "path": "../utils/level.utils"
            },
            "MouseEvent": {
              "location": "global"
            }
          },
          "return": "Promise<LevelInfo>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
let navigationLevelBlockItemIds = 0;
