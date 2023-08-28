import { r as registerInstance, h, H as Host, g as getElement } from './index-e015dbc8.js';

const DocLead = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("bal-doc-app", null, h("p", { class: "is-size-large has-text-blue my-x-large" }, h("slot", null)))));
  }
  get el() { return getElement(this); }
};

export { DocLead as bal_doc_lead };
