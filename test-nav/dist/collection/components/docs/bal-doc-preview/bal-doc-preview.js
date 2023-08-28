import { h, Host } from '@stencil/core';
export class DocPreview {
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
  static get is() { return "bal-doc-preview"; }
  static get elementRef() { return "el"; }
}
