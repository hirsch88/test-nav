import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './bal-label2.js';

const FieldLabel = proxyCustomElement(class FieldLabel extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get element() { return this; }
}, [6, "bal-field-label", {
    "htmlFor": [1, "html-for"],
    "required": [4],
    "valid": [4],
    "invalid": [4],
    "disabled": [4],
    "readonly": [4],
    "weight": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-field-label", "bal-label"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-field-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FieldLabel);
      }
      break;
    case "bal-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalFieldLabel = FieldLabel;
const defineCustomElement = defineCustomElement$1;

export { BalFieldLabel, defineCustomElement };
