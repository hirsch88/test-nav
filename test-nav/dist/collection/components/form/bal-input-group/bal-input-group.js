import { h, Host } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class InputGroup {
  constructor() {
    this.invalid = false;
    this.disabled = false;
    this.readonly = false;
  }
  render() {
    const block = BEM.block('input-group');
    const dangerClass = 'is-danger';
    const hasDanger = this.invalid;
    const disabledClass = 'is-disabled';
    const hasDisabled = this.disabled || this.readonly;
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(dangerClass).class(hasDanger)), block.modifier(disabledClass).class(hasDisabled)) }, h("slot", null)));
  }
  static get is() { return "bal-input-group"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-input-group.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-input-group.css"]
    };
  }
  static get properties() {
    return {
      "invalid": {
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
          "text": "If `true` the component gets a invalid style."
        },
        "attribute": "invalid",
        "reflect": false,
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
          "text": "If `true`, the element is not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "readonly": {
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
          "text": "If `true` the element can not mutated, meaning the user can not edit the control."
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
}
