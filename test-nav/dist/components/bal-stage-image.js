import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';
import { i as inheritAttributes } from './attributes.js';

const StageImage = proxyCustomElement(class StageImage extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.imageInheritAttributes = {};
    this.srcSet = undefined;
    this.fallback = undefined;
  }
  componentWillLoad() {
    this.imageInheritAttributes = inheritAttributes(this.el, ['alt']);
  }
  render() {
    const block = BEM.block('stage-image');
    return (h(Host, { class: Object.assign({}, block.class()) }, h("img", Object.assign({ loading: "lazy", src: this.fallback ? this.fallback : this.srcSet.split(',')[0], srcset: this.srcSet, sizes: "100vw" }, this.imageInheritAttributes))));
  }
  get el() { return this; }
}, [0, "bal-stage-image", {
    "srcSet": [1, "src-set"],
    "fallback": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-stage-image"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-stage-image":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StageImage);
      }
      break;
  } });
}

const BalStageImage = StageImage;
const defineCustomElement = defineCustomElement$1;

export { BalStageImage, defineCustomElement };
