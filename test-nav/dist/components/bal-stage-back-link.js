import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';
import { d as defineCustomElement$2 } from './bal-icon2.js';

const StageBackLink = proxyCustomElement(class StageBackLink extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.href = undefined;
    this.shadow = false;
    this.inverted = false;
  }
  render() {
    const block = BEM.block('stage-back-link');
    return (h(Host, { class: Object.assign({}, block.class()) }, h("a", { class: {
        'is-link': true,
        'is-inverted': this.inverted,
        'has-text-shadow': this.shadow,
      }, href: this.href }, h("bal-icon", { class: "mr-x-small", name: "caret-left", size: "x-small", inverted: this.inverted, shadow: this.shadow }), h("slot", null))));
  }
  get el() { return this; }
}, [4, "bal-stage-back-link", {
    "href": [1],
    "shadow": [4],
    "inverted": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-stage-back-link", "bal-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-stage-back-link":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StageBackLink);
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalStageBackLink = StageBackLink;
const defineCustomElement = defineCustomElement$1;

export { BalStageBackLink, defineCustomElement };
