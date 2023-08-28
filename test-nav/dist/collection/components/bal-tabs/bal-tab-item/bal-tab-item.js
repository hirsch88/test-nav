import { Host, h } from '@stencil/core';
import { inheritTrackingAttributes } from '../../../utils/attributes';
export class TabItem {
  constructor() {
    this.inheritAttributes = {};
    this.tabPanelID = `bal-tab-panel-id-${panelID++}`;
    this.isActive = false;
    this.active = false;
    this.value = '';
    this.label = '';
    this.href = '';
    this.target = '_self';
    this.bubble = false;
    this.disabled = false;
    this.hidden = false;
    this.prevent = false;
    this.icon = undefined;
  }
  componentWillLoad() {
    this.inheritAttributes = inheritTrackingAttributes(this.el);
  }
  async getOptions() {
    return this.options;
  }
  async setActive(active) {
    this.isActive = active;
  }
  get options() {
    return {
      tabPanelID: this.tabPanelID,
      value: this.value,
      icon: this.icon,
      label: this.label,
      href: this.href,
      target: this.target,
      active: this.active,
      disabled: this.disabled,
      hidden: this.hidden,
      bubble: this.bubble,
      passed: false,
      prevent: this.prevent,
      navigate: this.balNavigate,
      trackingData: this.inheritAttributes,
    };
  }
  render() {
    return (h(Host, { id: this.tabPanelID, role: "tabpanel", "aria-label": this.label, "aria-hidden": !this.isActive ? 'true' : 'false', tabindex: this.isActive ? '0' : '-1', class: {
        'bal-tab-item': true,
        'bal-tab-item--active': this.isActive,
      } }, h("slot", null)));
  }
  static get is() { return "bal-tab-item"; }
  static get properties() {
    return {
      "active": {
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
          "text": "Tells if this route is active and overrides the bal-tabs value property."
        },
        "attribute": "active",
        "reflect": true,
        "defaultValue": "false"
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
          "text": "This is the key of the tab."
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "''"
      },
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
          "text": "Label for the tab."
        },
        "attribute": "label",
        "reflect": true,
        "defaultValue": "''"
      },
      "href": {
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
          "text": "Link to path."
        },
        "attribute": "href",
        "reflect": true,
        "defaultValue": "''"
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
          "text": "Specifies where to display the linked URL.\nOnly applies when an `href` is provided."
        },
        "attribute": "target",
        "reflect": false,
        "defaultValue": "'_self'"
      },
      "bubble": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "boolean | string",
          "resolved": "boolean | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` a small red bubble is added to the tab."
        },
        "attribute": "bubble",
        "reflect": true,
        "defaultValue": "false"
      },
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
          "text": "If `true` the tab is disabled."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "hidden": {
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
          "text": "If `true` the step is hidden."
        },
        "attribute": "hidden",
        "reflect": true,
        "defaultValue": "false"
      },
      "prevent": {
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
          "text": "Tell's if the linking is done by a router."
        },
        "attribute": "prevent",
        "reflect": false,
        "defaultValue": "false"
      },
      "icon": {
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
          "text": "Tab icon not available for the steps."
        },
        "attribute": "icon",
        "reflect": true,
        "defaultValue": "undefined"
      }
    };
  }
  static get states() {
    return {
      "isActive": {}
    };
  }
  static get events() {
    return [{
        "method": "balNavigate",
        "name": "balNavigate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the link element has clicked"
        },
        "complexType": {
          "original": "BalEvents.BalTabItemNavigateDetail",
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
      "getOptions": {
        "complexType": {
          "signature": "() => Promise<BalTabOption>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalTabOption": {
              "location": "import",
              "path": "../bal-tab.type"
            }
          },
          "return": "Promise<BalTabOption>"
        },
        "docs": {
          "text": "Options of the tab like label, value etc.",
          "tags": []
        }
      },
      "setActive": {
        "complexType": {
          "signature": "(active: boolean) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets the tab active.",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
let panelID = 0;
