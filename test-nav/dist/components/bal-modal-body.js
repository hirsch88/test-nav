import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ModalBody = proxyCustomElement(class ModalBody extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, { class: "bal-modal__body" }, h("slot", null)));
  }
}, [4, "bal-modal-body"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-modal-body"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-modal-body":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ModalBody);
      }
      break;
  } });
}

const BalModalBody = ModalBody;
const defineCustomElement = defineCustomElement$1;

export { BalModalBody, defineCustomElement };
