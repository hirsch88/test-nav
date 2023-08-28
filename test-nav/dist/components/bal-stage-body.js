import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const StageBody = proxyCustomElement(class StageBody extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const block = BEM.block('stage-body');
    return (h(Host, { class: Object.assign({}, block.class()) }, h("slot", null)));
  }
  get el() { return this; }
}, [4, "bal-stage-body"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-stage-body"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-stage-body":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StageBody);
      }
      break;
  } });
}

const BalStageBody = StageBody;
const defineCustomElement = defineCustomElement$1;

export { BalStageBody, defineCustomElement };
