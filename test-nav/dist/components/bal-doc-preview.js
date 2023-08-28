import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const DocPreview = proxyCustomElement(class DocPreview extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get el() { return this; }
}, [4, "bal-doc-preview"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-preview"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-preview":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocPreview);
      }
      break;
  } });
}

const BalDocPreview = DocPreview;
const defineCustomElement = defineCustomElement$1;

export { BalDocPreview, defineCustomElement };
