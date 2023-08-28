import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './bal-button-group2.js';

const CardActions = proxyCustomElement(class CardActions extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.position = '';
  }
  render() {
    return (h(Host, { class: "bal-card-actions" }, h("bal-button-group", { class: "m-none", position: this.position }, h("slot", null))));
  }
}, [4, "bal-card-actions", {
    "position": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-card-actions", "bal-button-group"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-card-actions":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CardActions);
      }
      break;
    case "bal-button-group":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalCardActions = CardActions;
const defineCustomElement = defineCustomElement$1;

export { BalCardActions, defineCustomElement };
