import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';
import { i as inheritAttributes } from './attributes-56afda45.js';

const StageImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};

export { StageImage as bal_stage_image };
