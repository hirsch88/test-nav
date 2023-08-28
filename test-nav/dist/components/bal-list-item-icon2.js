import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ListItemIcon = proxyCustomElement(class ListItemIcon extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.right = false;
  }
  render() {
    return (h(Host, { class: {
        'bal-list__item__icon': true,
        'bal-list__item__icon--right': this.right,
      } }, h("slot", null)));
  }
}, [4, "bal-list-item-icon", {
    "right": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-list-item-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-list-item-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ListItemIcon);
      }
      break;
  } });
}

export { ListItemIcon as L, defineCustomElement as d };
