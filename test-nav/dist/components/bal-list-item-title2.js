import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './bal-heading2.js';

const ListItemTitle = proxyCustomElement(class ListItemTitle extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.level = 'h5';
    this.visualLevel = undefined;
  }
  render() {
    return (h(Host, { class: "bal-list__item__title" }, h("bal-heading", { level: this.level, visualLevel: this.visualLevel, space: "none" }, h("slot", null))));
  }
}, [4, "bal-list-item-title", {
    "level": [1],
    "visualLevel": [1, "visual-level"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-list-item-title", "bal-heading"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-list-item-title":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ListItemTitle);
      }
      break;
    case "bal-heading":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { ListItemTitle as L, defineCustomElement as d };
