import { h, Host } from '@stencil/core';
import { readSubLevels } from '../utils/level.utils';
import { inheritTrackingAttributes } from '../../../utils/attributes';
export class NavigationLevelMeta {
  constructor() {
    this.inheritAttributes = {};
    this.label = '';
    this.value = `meta-value-${navigationLevelMetaIds++}`;
    this.link = undefined;
    this.linkLabel = undefined;
    this.isTabLink = undefined;
  }
  componentWillLoad() {
    this.inheritAttributes = inheritTrackingAttributes(this.el);
  }
  async getLevelInfo() {
    const subLevels = await readSubLevels(this.el, 'bal-navigation-level-main');
    return {
      type: 'meta',
      value: this.value,
      label: this.label,
      link: this.link,
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
  static get is() { return "bal-navigation-level-meta"; }
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
        "defaultValue": "`meta-value-${navigationLevelMetaIds++}`"
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
          "text": "sub link of the meta tab, rendered on touch resolution"
        },
        "attribute": "link",
        "reflect": false
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
        "reflect": false
      },
      "isTabLink": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "It is 'true' when the meta item is used as a link and not as a tab"
        },
        "attribute": "is-tab-link",
        "reflect": false
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
          "original": "BalEvents.BalNavigationLevelMetaClickDetail",
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
let navigationLevelMetaIds = 0;
