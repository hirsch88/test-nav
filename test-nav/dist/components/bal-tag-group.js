import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const TagGroup = proxyCustomElement(class TagGroup extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, { class: "bal-tag-group" }, h("slot", null)));
  }
}, [4, "bal-tag-group"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-tag-group"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-tag-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TagGroup);
      }
      break;
  } });
}

const BalTagGroup = TagGroup;
const defineCustomElement = defineCustomElement$1;

export { BalTagGroup, defineCustomElement };
