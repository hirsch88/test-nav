import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const ModalBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "bal-modal__body" }, h("slot", null)));
  }
};

export { ModalBody as bal_modal_body };
