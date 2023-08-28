import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defaultBalAriaForm } from './form.js';

const FieldMessage = proxyCustomElement(class FieldMessage extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
}, [4, "bal-field-message", {
    "color": [1],
    "invalid": [4],
    "valid": [4],
    "disabled": [4],
    "readonly": [4],
    "ariaForm": [32],
    "setAriaForm": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-field-message"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-field-message":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FieldMessage);
      }
      break;
  } });
}

const BalFieldMessage = FieldMessage;
const defineCustomElement = defineCustomElement$1;

export { BalFieldMessage, defineCustomElement };
