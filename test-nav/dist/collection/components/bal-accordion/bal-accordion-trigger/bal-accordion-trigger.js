var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Host, h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
import { Logger } from '../../../utils/log';
import { stopEventBubbling } from '../../../utils/form-input';
export class AccordionTrigger {
  constructor() {
    this.componentId = `bal-accordion-trigger-${accordionTriggerIds++}`;
    this.updateAccordionId = () => { var _a; return (this.parentAccordionId = (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.id); };
    this.onClick = (ev) => {
      var _a;
      stopEventBubbling(ev);
      (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.humanToggle();
    };
    this.parentAccordionId = undefined;
    this.button = false;
    this.openLabel = '';
    this.openIcon = 'caret-down';
    this.closeLabel = '';
    this.closeIcon = '';
    this.color = 'info';
    this.size = '';
    this.active = false;
    this.state = 1;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    this.updateAccordionId();
  }
  componentWillRender() {
    this.updateAccordionId();
  }
  get parentAccordionElement() {
    var _a;
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.closest('bal-accordion')) || null;
  }
  render() {
    const block = BEM.block('accordion').element('trigger');
    const id = this.parentAccordionId ? `${this.parentAccordionId}-trigger` : this.componentId;
    const label = this.active ? this.closeLabel : this.openLabel;
    let turn = false;
    let icon = this.active ? this.closeIcon : this.openIcon;
    if (this.closeIcon === '' || this.closeIcon === undefined || this.closeIcon === null) {
      turn = this.active;
      icon = this.openIcon || 'caret-down';
    }
    const expanded = this.state === 4 || this.state === 8;
    const buttonPart = expanded ? 'button expanded' : 'button';
    return (h(Host, { id: id, class: Object.assign({}, block.class()) }, this.button ? (h("bal-button", { id: `${id}-button`, "aria-controls": `${this.parentAccordionId}-details-content`, part: buttonPart, "data-testid": "bal-accordion-trigger", expanded: true, icon: icon, iconTurn: turn, color: this.color, size: this.size, onClick: this.onClick }, label)) : (h("button", { class: Object.assign({}, block.element('button').class()), id: `${id}-button`, "aria-controls": `${this.parentAccordionId}-details-content`, "aria-label": "accordion trigger", part: buttonPart, "data-testid": "bal-accordion-trigger", onClick: this.onClick }, h("bal-icon", { turn: turn, name: icon })))));
  }
  static get is() { return "bal-accordion-trigger"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-accordion-trigger.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-accordion-trigger.css"]
    };
  }
  static get properties() {
    return {
      "button": {
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
          "text": "Trigger will be a bal-button"
        },
        "attribute": "button",
        "reflect": false,
        "defaultValue": "false"
      },
      "openLabel": {
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
          "text": "Label of the open trigger button"
        },
        "attribute": "open-label",
        "reflect": false,
        "defaultValue": "''"
      },
      "openIcon": {
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
          "text": "BalIcon of the open trigger button"
        },
        "attribute": "open-icon",
        "reflect": false,
        "defaultValue": "'caret-down'"
      },
      "closeLabel": {
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
          "text": "Label of the close trigger button"
        },
        "attribute": "close-label",
        "reflect": false,
        "defaultValue": "''"
      },
      "closeIcon": {
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
          "text": "BalIcon of the close trigger button"
        },
        "attribute": "close-icon",
        "reflect": false,
        "defaultValue": "''"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalButtonColor",
          "resolved": "\"danger\" | \"info\" | \"info-light\" | \"light\" | \"link\" | \"primary\" | \"primary-light\" | \"secondary\" | \"success\" | \"tertiary\" | \"tertiary-green\" | \"tertiary-purple\" | \"tertiary-red\" | \"tertiary-yellow\" | \"text\" | \"warning\"",
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
          "text": "The color to use from your application's color palette."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'info'"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalButtonSize",
          "resolved": "\"\" | \"small\"",
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
          "text": "Size of the button"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "''"
      },
      "active": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "active",
        "reflect": true,
        "defaultValue": "false"
      },
      "state": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "AccordionState",
          "resolved": "AccordionState",
          "references": {
            "AccordionState": {
              "location": "import",
              "path": "../../../interfaces"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "state",
        "reflect": false,
        "defaultValue": "AccordionState.Collapsed"
      }
    };
  }
  static get states() {
    return {
      "parentAccordionId": {}
    };
  }
  static get elementRef() { return "el"; }
}
__decorate([
  Logger('bal-accordion-trigger')
], AccordionTrigger.prototype, "createLogger", null);
let accordionTriggerIds = 0;
