import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';

const DocPreview = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("div", { class: "my-preview-html" }, h("div", { ref: el => (this.previewContentEl = el) })), h("div", { ref: el => (this.slotWrapperEl = el), style: { display: 'none' } }, h("slot", null))));
  }
  get el() { return getElement(this); }
};

export { DocPreview as bal_doc_preview };
