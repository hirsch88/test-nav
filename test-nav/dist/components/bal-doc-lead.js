import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './bal-app2.js';
import { d as defineCustomElement$2 } from './bal-doc-app2.js';

const DocLead = proxyCustomElement(class DocLead extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, null, h("bal-doc-app", null, h("p", { class: "is-size-large has-text-blue my-x-large" }, h("slot", null)))));
  }
  get el() { return this; }
}, [4, "bal-doc-lead"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-doc-lead", "bal-app", "bal-doc-app"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-doc-lead":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocLead);
      }
      break;
    case "bal-app":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-doc-app":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalDocLead = DocLead;
const defineCustomElement = defineCustomElement$1;

export { BalDocLead, defineCustomElement };
