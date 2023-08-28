import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const BalDocImage$1 = proxyCustomElement(class BalDocImage extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.src = '';
    this.text = '';
  }
  render() {
    return (h(Host, { class: "bal-app" }, h("p", { style: { textAlign: 'center' } }, h("img", { loading: "lazy", src: this.src, alt: this.text }))));
  }
}, [0, "bal-doc-image", {
    "src": [1],
    "text": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-image"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-image":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BalDocImage$1);
      }
      break;
  } });
}

const BalDocImage = BalDocImage$1;
const defineCustomElement = defineCustomElement$1;

export { BalDocImage, defineCustomElement };
