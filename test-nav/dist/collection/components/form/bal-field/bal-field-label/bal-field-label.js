import { h, Host } from '@stencil/core';
export class FieldLabel {
  constructor() {
    this.htmlFor = undefined;
    this.required = true;
    this.valid = undefined;
    this.invalid = undefined;
    this.disabled = undefined;
    this.readonly = undefined;
    this.weight = 'bold';
  }
  componentDidLoad() {
    if (this.element) {
      this.parentBalFieldElement = this.element.closest('bal-field');
      if (this.parentBalFieldElement) {
        this.parentBalFieldElement.classList.add('has-label');
      }
    }
  }
  disconnectedCallback() {
    if (this.parentBalFieldElement) {
      this.parentBalFieldElement.classList.remove('has-label');
    }
  }
  render() {
    return (h(Host, { class: "bal-field-label" }, h("bal-label", { multiline: true, size: "small", htmlFor: this.htmlFor, required: this.required, valid: this.valid, invalid: this.invalid, disabled: this.disabled, readonly: this.readonly, weight: this.weight }, h("slot", null))));
  }
  static get is() { return "bal-field-label"; }
  static get encapsulation() { return "scoped"; }
  static get properties() {
    return {
      "htmlFor": {
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
          "text": "The value of the for attribute must be a single id for a labeled\nform-related element in the same document as the <label> element.\nSo, any given label element can be associated with only one form control."
        },
        "attribute": "html-for",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "required": {
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
          "text": "If `true` the form control needs to be filled. If it is set to\n`false` an optional label is added to the label.."
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "true"
      },
      "valid": {
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
          "text": "If `true` the component gets a valid green style."
        },
        "attribute": "valid",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "invalid": {
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
          "text": "If `true` the component gets a invalid red style."
        },
        "attribute": "invalid",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "disabled": {
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
          "text": "If `true`, the element is not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "readonly": {
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
          "text": "If `true` the element can not mutated, meaning the user can not edit the control."
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "undefined"
      },
      "weight": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalFieldLabelWeight",
          "resolved": "\"bold\" | \"regular\"",
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
          "text": "If `true` the component gets a invalid style."
        },
        "attribute": "weight",
        "reflect": false,
        "defaultValue": "'bold'"
      }
    };
  }
  static get elementRef() { return "element"; }
}
