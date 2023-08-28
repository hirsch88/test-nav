import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ListItemSubtitle = proxyCustomElement(class ListItemSubtitle extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, { class: "bal-list__item__subtitle" }, h("p", { class: "is-size-small" }, h("slot", null))));
  }
}, [4, "bal-list-item-subtitle"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-list-item-subtitle"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-list-item-subtitle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ListItemSubtitle);
      }
      break;
  } });
}

export { ListItemSubtitle as L, defineCustomElement as d };
