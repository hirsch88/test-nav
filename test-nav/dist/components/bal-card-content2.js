import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const CardContent = proxyCustomElement(class CardContent extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, { class: "bal-card-content" }, h("slot", null)));
  }
}, [4, "bal-card-content"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-card-content"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-card-content":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CardContent);
      }
      break;
  } });
}

export { CardContent as C, defineCustomElement as d };
