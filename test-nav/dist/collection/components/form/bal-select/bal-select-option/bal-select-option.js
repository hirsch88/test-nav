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
import { h, Host } from '@stencil/core';
import { Logger } from '../../../../utils/log';
export class SelectOption {
  constructor() {
    this.label = undefined;
    this.disabled = false;
    this.value = undefined;
    this.for = `bal-selopt-${selectOptionIds++}`;
  }
  createLogger(log) {
    this.log = log;
  }
  render() {
    return (h(Host, { style: { display: 'none' } }, h("slot", null)));
  }
  static get is() { return "bal-select-option"; }
  static get properties() {
    return {
      "label": {
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
          "text": "Label will be shown in the input element when it got selected"
        },
        "attribute": "label",
        "reflect": true
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
          "text": "If `true`, the user cannot interact with the option."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
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
          "text": "The value of the select option. This value will be returned by the parent `<bal-select>` element."
        },
        "attribute": "value",
        "reflect": true
      },
      "for": {
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
          "tags": [{
              "name": "internal",
              "text": "ID of the option."
            }],
          "text": ""
        },
        "attribute": "for",
        "reflect": true,
        "defaultValue": "`bal-selopt-${selectOptionIds++}`"
      }
    };
  }
}
__decorate([
  Logger('bal-select-option')
], SelectOption.prototype, "createLogger", null);
let selectOptionIds = 0;
