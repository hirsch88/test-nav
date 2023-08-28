import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './bal-close2.js';
import { d as defineCustomElement$3 } from './bal-heading2.js';
import { d as defineCustomElement$2 } from './bal-icon2.js';

const ModalHeader = proxyCustomElement(class ModalHeader extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.closeHandler = () => {
      if (this.parentModal) {
        this.parentModal.dismiss(undefined, 'model-close');
      }
    };
  }
  get parentModal() {
    return this.el.closest('bal-modal');
  }
  render() {
    var _a;
    return (h(Host, { class: "bal-modal__header" }, h("div", { class: "bal-modal__header__title" }, h("bal-heading", { level: "h2", space: "none" }, h("slot", null))), ((_a = this.parentModal) === null || _a === void 0 ? void 0 : _a.isClosable) ? (h("bal-close", { class: "bal-modal__header__close data-test-modal-close", onClick: this.closeHandler })) : ('')));
  }
  get el() { return this; }
}, [4, "bal-modal-header"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-modal-header", "bal-close", "bal-heading", "bal-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-modal-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ModalHeader);
      }
      break;
    case "bal-close":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-heading":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalModalHeader = ModalHeader;
const defineCustomElement = defineCustomElement$1;

export { BalModalHeader, defineCustomElement };
