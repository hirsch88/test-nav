import { h, Host } from '@stencil/core';
import { readSubLevels } from '../utils/level.utils';
import { inheritTrackingAttributes } from '../../../utils/attributes';
export class NavigationLevelMain {
  constructor() {
    this.inheritAttributes = {};
    this.label = '';
    this.value = `main-value-${navigationLevelMainIds++}`;
    this.link = undefined;
    this.linkLabel = undefined;
    this.isTabLink = false;
    this.target = '_self';
  }
  componentWillLoad() {
    this.inheritAttributes = inheritTrackingAttributes(this.el);
  }
  async getLevelInfo() {
    const subLevels = await readSubLevels(this.el, 'bal-navigation-level-block');
    return {
      type: 'main',
      value: this.value,
      label: this.label,
      link: this.link,
      target: this.target,
      linkLabel: this.linkLabel,
      isTabLink: this.isTabLink,
      subLevels,
      trackingData: this.inheritAttributes,
      onClick: (ev) => this.balClick.emit(ev),
    };
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "bal-navigation-level-main"; }
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
        "defaultValue": "`main-value-${navigationLevelMainIds++}`"
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
      "isTabLink": {
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
          "text": "It is 'true' when the meta item is used as a link and not as a tab"
        },
        "attribute": "is-tab-link",
        "reflect": false,
        "defaultValue": "false"
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
          "original": "BalEvents.BalNavigationLevelMainClickDetail",
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
let navigationLevelMainIds = 0;
