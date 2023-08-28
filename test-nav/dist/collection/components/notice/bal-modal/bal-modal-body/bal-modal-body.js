import { Host, h } from '@stencil/core';
export class ModalBody {
  render() {
    return (h(Host, { class: "bal-modal__body" }, h("slot", null)));
  }
  static get is() { return "bal-modal-body"; }
}
