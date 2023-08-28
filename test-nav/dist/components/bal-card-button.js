import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './bal-button2.js';
import { d as defineCustomElement$3 } from './bal-icon2.js';
import { d as defineCustomElement$2 } from './bal-spinner2.js';

const CardButton = proxyCustomElement(class CardButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.icon = '';
    this.elementType = 'button';
    this.disabled = false;
    this.href = undefined;
    this.target = '_self';
    this.iconRight = '';
    this.loading = false;
  }
  render() {
    return (h(Host, { class: "bal-card-button" }, h("bal-button", { color: "info", expanded: true, "bottom-rounded": true, icon: this.icon, iconRight: this.iconRight, elementType: this.elementType, disabled: this.disabled, href: this.href, target: this.target, loading: this.loading }, h("slot", null))));
  }
}, [4, "bal-card-button", {
    "icon": [1],
    "elementType": [1, "element-type"],
    "disabled": [516],
    "href": [1],
    "target": [1],
    "iconRight": [1, "icon-right"],
    "loading": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-card-button", "bal-button", "bal-icon", "bal-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-card-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CardButton);
      }
      break;
    case "bal-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalCardButton = CardButton;
const defineCustomElement = defineCustomElement$1;

export { BalCardButton, defineCustomElement };
