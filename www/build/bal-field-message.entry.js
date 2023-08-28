import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { d as defaultBalAriaForm } from './form-479fd066.js';

const FieldMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ariaForm = defaultBalAriaForm;
    this.color = '';
    this.invalid = false;
    this.valid = false;
    this.disabled = false;
    this.readonly = false;
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  render() {
    return (h(Host, { id: this.ariaForm.messageId, class: {
        'bal-field-message': true,
        'help': true,
        'is-danger': this.invalid,
        'is-success': this.valid,
        'is-disabled': this.disabled || this.readonly,
        [`is-${this.color}`]: !!this.color,
      } }, h("slot", null)));
  }
};

export { FieldMessage as bal_field_message };
