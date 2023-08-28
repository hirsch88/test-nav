import { h, Host } from '@stencil/core';
export class ModalHeader {
  constructor() {
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
  static get is() { return "bal-modal-header"; }
  static get elementRef() { return "el"; }
}
