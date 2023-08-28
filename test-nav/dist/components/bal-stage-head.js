import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const StageHead = proxyCustomElement(class StageHead extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, { class: "hero-head" }, h("slot", null)));
  }
  get el() { return this; }
}, [4, "bal-stage-head"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-stage-head"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-stage-head":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StageHead);
      }
      break;
  } });
}

const BalStageHead = StageHead;
const defineCustomElement = defineCustomElement$1;

export { BalStageHead, defineCustomElement };
