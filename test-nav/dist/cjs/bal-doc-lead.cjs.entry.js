'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');

const DocLead = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("bal-doc-app", null, index.h("p", { class: "is-size-large has-text-blue my-x-large" }, index.h("slot", null)))));
  }
  get el() { return index.getElement(this); }
};

exports.bal_doc_lead = DocLead;
