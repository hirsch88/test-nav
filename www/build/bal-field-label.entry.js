import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';

const FieldLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get element() { return getElement(this); }
};

export { FieldLabel as bal_field_label };
