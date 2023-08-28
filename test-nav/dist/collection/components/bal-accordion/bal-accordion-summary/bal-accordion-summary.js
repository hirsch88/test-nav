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
export class AccordionSummary {
  constructor() {
    this.componentId = `bal-accordion-summary-${accordionSummaryIds++}`;
    this.updateAccordionId = () => { var _a; return (this.parentAccordionId = (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.id); };
    this.onClick = (ev) => {
      var _a;
      stopEventBubbling(ev);
      (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.humanToggle();
    };
    this.parentAccordionId = undefined;
    this.trigger = false;
    this.active = false;
    this.state = 1;
  }
  createLogger(log) {
    this.log = log;
  }
  connectedCallback() {
    const accordion = this.parentAccordionElement;
    if (accordion) {
      accordion.version = 2;
    }
    this.updateAccordionId();
  }
  disconnectedCallback() {
    const accordion = this.parentAccordionElement;
    if (accordion) {
      accordion.version = 1;
    }
    this.updateAccordionId();
  }
  get parentAccordionElement() {
    var _a;
    return ((_a = this.el) === null || _a === void 0 ? void 0 : _a.closest('bal-accordion')) || null;
  }
  render() {
    const block = BEM.block('accordion').element('summary');
    const id = this.parentAccordionId ? `${this.parentAccordionId}-summary` : this.componentId;
    const expanded = this.state === 4 || this.state === 8;
    const buttonPart = expanded ? 'button expanded' : 'button';
    let attributes = {};
    if (this.trigger) {
      attributes = {
        'aria-controls': `${this.parentAccordionId}-details-content`,
        'role': 'button',
        'part': buttonPart,
        'data-testid': 'bal-accordion-button',
        'onClick': this.onClick,
      };
    }
    return (h(Host, Object.assign({ id: id, class: Object.assign(Object.assign({}, block.class()), block.modifier('trigger').class(this.trigger)) }, attributes, { "data-testid": "bal-accordion-summary" })));
  }
  static get is() { return "bal-accordion-summary"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-accordion-summary.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-accordion-summary.css"]
    };
  }
  static get properties() {
    return {
      "trigger": {
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
          "text": "If `true` the whole summary component acts as a trigger and can be clicked"
        },
        "attribute": "trigger",
        "reflect": false,
        "defaultValue": "false"
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
  Logger('bal-accordion-summary')
], AccordionSummary.prototype, "createLogger", null);
let accordionSummaryIds = 0;
