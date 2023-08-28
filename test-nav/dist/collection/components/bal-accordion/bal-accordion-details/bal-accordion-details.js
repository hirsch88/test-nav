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
export class AccordionDetail {
  constructor() {
    this.componentId = `bal-accordion-details-${accordionDetailIds++}`;
    this.updateAccordionId = () => { var _a; return (this.parentAccordionId = (_a = this.parentAccordionElement) === null || _a === void 0 ? void 0 : _a.id); };
    this.parentAccordionId = undefined;
    this.state = 1;
    this.active = false;
    this.animated = true;
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
    const block = BEM.block('accordion').element('details');
    const containerEl = block.element('container');
    const wrapperEl = containerEl.element('wrapper');
    const id = this.parentAccordionId ? `${this.parentAccordionId}-details` : this.componentId;
    const expanded = this.state === 4 || this.state === 8;
    const contentPart = expanded ? 'content expanded' : 'content';
    return (h(Host, { id: id, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('active').class(this.active)), block.modifier('expanding').class(this.state === 8)), block.modifier('expanded').class(this.state === 4)), block.modifier('collapsing').class(this.state === 2)), block.modifier('collapsed').class(this.state === 1)), block.modifier('animated').class(this.animated)) }, h("div", { id: `${id}-content`, "aria-labelledby": `${this.parentAccordionId}-trigger-button`, role: "region", part: contentPart, class: Object.assign({}, wrapperEl.class()), "data-testid": "bal-accordion-details" }, h("slot", null))));
  }
  static get is() { return "bal-accordion-details"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-accordion-details.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-accordion-details.css"]
    };
  }
  static get properties() {
    return {
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
      },
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
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "active",
        "reflect": false,
        "defaultValue": "false"
      },
      "animated": {
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
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "animated",
        "reflect": false,
        "defaultValue": "true"
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
  Logger('bal-accordion-details')
], AccordionDetail.prototype, "createLogger", null);
let accordionDetailIds = 0;
