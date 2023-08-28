import { Host, h } from '@stencil/core';
import { inheritTrackingAttributes } from '../../../utils/attributes';
export class StepItem {
  constructor() {
    this.inheritAttributes = {};
    this.isActive = false;
    this.active = false;
    this.value = '';
    this.label = '';
    this.href = '';
    this.target = '_self';
    this.disabled = false;
    this.done = false;
    this.hidden = false;
    this.failed = false;
    this.prevent = false;
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
      value: this.value,
      label: this.label,
      href: this.href,
      target: this.target,
      active: this.active,
      disabled: this.disabled,
      done: this.done,
      hidden: this.hidden,
      failed: this.failed,
      passed: false,
      prevent: this.prevent,
      navigate: this.balNavigate,
      trackingData: this.inheritAttributes,
    };
  }
  render() {
    return (h(Host, { role: "tabpanel", class: {
        'bal-step-item': true,
        'bal-step-item--active': this.isActive,
      } }, h("slot", null)));
  }
  static get is() { return "bal-step-item"; }
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
      "done": {
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
          "text": "If `true` the step is marked as done."
        },
        "attribute": "done",
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
      "failed": {
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
          "text": "If `true` the step is marked as failed."
        },
        "attribute": "failed",
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
          "original": "BalEvents.BalStepItemNavigateDetail",
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
          "signature": "() => Promise<BalStepOption>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalStepOption": {
              "location": "import",
              "path": "../bal-step.type"
            }
          },
          "return": "Promise<BalStepOption>"
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
