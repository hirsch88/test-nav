import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$b } from './bal-card2.js';
import { d as defineCustomElement$a } from './bal-card-content2.js';
import { d as defineCustomElement$9 } from './bal-heading2.js';
import { d as defineCustomElement$8 } from './bal-icon2.js';
import { d as defineCustomElement$7 } from './bal-list2.js';
import { d as defineCustomElement$6 } from './bal-list-item2.js';
import { d as defineCustomElement$5 } from './bal-list-item-content2.js';
import { d as defineCustomElement$4 } from './bal-list-item-icon2.js';
import { d as defineCustomElement$3 } from './bal-list-item-subtitle2.js';
import { d as defineCustomElement$2 } from './bal-list-item-title2.js';

const BalDocDownload$1 = proxyCustomElement(class BalDocDownload extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.link = '';
    this.iconLeft = 'document';
    this.iconRight = 'download';
    this.subject = '';
    this.subtitle = '';
  }
  render() {
    return (h(Host, { class: "bal-app" }, h("a", { href: this.link, style: { textDecoration: 'none' } }, h("bal-card", null, h("bal-card-content", null, h("bal-list", { disabled: true }, h("bal-list-item", null, h("bal-list-item-icon", null, h("bal-icon", { name: this.iconLeft })), h("bal-list-item-content", null, h("bal-list-item-title", null, this.subject), h("bal-list-item-subtitle", null, this.subtitle)), h("bal-list-item-icon", { right: true }, h("bal-icon", { name: this.iconRight })))))))));
  }
}, [0, "bal-doc-download", {
    "link": [1],
    "iconLeft": [1, "icon-left"],
    "iconRight": [1, "icon-right"],
    "subject": [1],
    "subtitle": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-download", "bal-card", "bal-card-content", "bal-heading", "bal-icon", "bal-list", "bal-list-item", "bal-list-item-content", "bal-list-item-icon", "bal-list-item-subtitle", "bal-list-item-title"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-download":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BalDocDownload$1);
      }
      break;
    case "bal-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "bal-card-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "bal-heading":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "bal-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "bal-list-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "bal-list-item-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "bal-list-item-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-list-item-subtitle":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-list-item-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalDocDownload = BalDocDownload$1;
const defineCustomElement = defineCustomElement$1;

export { BalDocDownload, defineCustomElement };
