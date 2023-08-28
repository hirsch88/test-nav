'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');

const DocPreview = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidRender() {
    this.updateContent();
  }
  updateContent() {
    if (this.previewContentEl && this.slotWrapperEl) {
      const content = this.slotWrapperEl.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      this.previewContentEl.innerHTML = content;
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "my-preview-html" }, index.h("div", { ref: el => (this.previewContentEl = el) })), index.h("div", { ref: el => (this.slotWrapperEl = el), style: { display: 'none' } }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};

exports.bal_doc_preview = DocPreview;
