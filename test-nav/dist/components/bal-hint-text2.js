import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const HintText = proxyCustomElement(class HintText extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const block = BEM.block('hint');
    const elContent = block.element('content');
    const elText = elContent.element('text');
    const elTextField = elText.element('field');
    return (h(Host, { class: Object.assign({}, elText.class()) }, h("p", { class: Object.assign({}, elTextField.class()) }, h("slot", null))));
  }
}, [4, "bal-hint-text"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-hint-text"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-hint-text":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, HintText);
      }
      break;
  } });
}

export { HintText as H, defineCustomElement as d };
