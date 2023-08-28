import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const BalDocSupportColor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = '';
  }
  render() {
    return (h(Host, null, h("div", { class: "columns is-multiline" }, h("bal-doc-color", { class: "column is-2", color: `${this.color}-1` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-2` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-3` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-4` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-5` }), h("bal-doc-color", { class: "column is-2", color: `${this.color}-6` }))));
  }
};

export { BalDocSupportColor as bal_doc_support_color };
