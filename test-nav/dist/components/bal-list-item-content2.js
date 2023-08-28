import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ListItemContent = proxyCustomElement(class ListItemContent extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.contentAlignment = undefined;
  }
  render() {
    return (h(Host, { class: {
        'bal-list__item__content': true,
        [`bal-list__item__content--${this.contentAlignment}`]: this.contentAlignment !== undefined,
      } }, h("slot", null)));
  }
}, [4, "bal-list-item-content", {
    "contentAlignment": [1, "content-alignment"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-list-item-content"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-list-item-content":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ListItemContent);
      }
      break;
  } });
}

export { ListItemContent as L, defineCustomElement as d };
