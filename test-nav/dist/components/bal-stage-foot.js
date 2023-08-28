import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const StageFoot = proxyCustomElement(class StageFoot extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, { class: "hero-foot" }, h("slot", null)));
  }
  get el() { return this; }
}, [4, "bal-stage-foot"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-stage-foot"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-stage-foot":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StageFoot);
      }
      break;
  } });
}

const BalStageFoot = StageFoot;
const defineCustomElement = defineCustomElement$1;

export { BalStageFoot, defineCustomElement };
