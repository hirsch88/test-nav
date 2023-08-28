import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { s as scrollToFirstInvalidField } from './form.js';

const Form = proxyCustomElement(class Form extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.native = false;
    this.novalidate = false;
  }
  async scrollToFirstInvalidField() {
    scrollToFirstInvalidField({ formEl: this.el });
  }
  render() {
    const NativeEl = this.native ? 'form' : 'div';
    let attrs = {};
    if (this.native) {
      attrs = {
        novalidate: this.novalidate,
      };
    }
    return (h(Host, null, h(NativeEl, Object.assign({}, attrs), h("slot", null))));
  }
  get el() { return this; }
}, [4, "bal-form", {
    "native": [4],
    "novalidate": [4],
    "scrollToFirstInvalidField": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-form"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-form":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Form);
      }
      break;
  } });
}

const BalForm = Form;
const defineCustomElement = defineCustomElement$1;

export { BalForm, defineCustomElement };
