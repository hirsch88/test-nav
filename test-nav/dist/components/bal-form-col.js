import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const FormCol = proxyCustomElement(class FormCol extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.size = 'fullwidth';
  }
  render() {
    return (h(Host, { class: {
        'column': true,
        'py-none': true,
        'is-12-touch': true,
        'is-12': this.size === 'fullwidth' || this.size === undefined,
        'is-6': this.size === 'half',
        'is-4': this.size === 'one-third',
        'is-8': this.size === 'two-thirds',
        'is-3': this.size === 'one-quarter',
        'is-9': this.size === 'three-quarters',
      } }, h("slot", null)));
  }
  get el() { return this; }
}, [4, "bal-form-col", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-form-col"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-form-col":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FormCol);
      }
      break;
  } });
}

const BalFormCol = FormCol;
const defineCustomElement = defineCustomElement$1;

export { BalFormCol, defineCustomElement };
