import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const HintTitle = proxyCustomElement(class HintTitle extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const block = BEM.block('hint');
    const elContent = block.element('content');
    const elTitle = elContent.element('title');
    const elHeading = elTitle.element('heading');
    return (h(Host, { class: Object.assign({}, elTitle.class()) }, h("h3", { class: Object.assign(Object.assign({}, elHeading.class()), { 'title': true, 'is-size-x-large': true }) }, h("span", null, h("slot", null)))));
  }
}, [4, "bal-hint-title"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-hint-title"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-hint-title":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, HintTitle);
      }
      break;
  } });
}

export { HintTitle as H, defineCustomElement as d };
