import { r as registerInstance, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { B as BEM } from './bem-1b28532d.js';
import { i as inheritAttributes } from './attributes-56afda45.js';

const balStageCss = ":root{--bal-stage-background-red:var(--bal-color-red);--bal-stage-background-yellow:var(--bal-color-yellow);--bal-stage-background-green:var(--bal-color-green);--bal-stage-background-purple:var(--bal-color-purple);--bal-stage-back-font-family:var(--bal-font-family-title);--bal-stage-back-font-weight:var(--bal-weight-bold)}.bal-stage{display:block;position:relative}.bal-stage--is-purple{background:var(--bal-stage-background-purple)}.bal-stage--is-green{background:var(--bal-stage-background-green)}.bal-stage--is-red{background:var(--bal-stage-background-red)}.bal-stage--is-yellow{background:var(--bal-stage-background-yellow)}.bal-stage .bal-stage-content{display:block;position:static}.bal-stage .bal-stage-content .bal-stage-image{overflow:hidden}.bal-stage .bal-stage-content .bal-stage-image img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.bal-stage .bal-stage-content .bal-stage-body{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding-top:calc(var(--bal-space-xxxx-large) + 4rem);padding-bottom:var(--bal-space-xxx-large)}@media screen and (min-width: 769px),print{.bal-stage .bal-stage-content .bal-stage-body{padding-top:calc(var(--bal-space-tablet-xxxx-large) + 4rem);padding-bottom:var(--bal-space-tablet-xx-large)}}@media screen and (min-width: 1024px){.bal-stage .bal-stage-content .bal-stage-body{padding-top:calc(var(--bal-space-desktop-xxxx-large) + 3rem);padding-bottom:var(--bal-space-desktop-xx-large)}}@media screen and (max-width: 1023px){.bal-stage .bal-stage-content .bal-stage-back-link{display:none}}@media screen and (min-width: 1024px){.bal-stage .bal-stage-content .bal-stage-back-link a{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;font-family:var(--bal-stage-back-font-family);font-weight:var(--bal-stage-back-font-weight);text-decoration:none}.bal-stage .bal-stage-content .bal-stage-back-link a:hover{text-decoration:underline}.bal-stage .bal-stage-content .bal-stage-back-link a:active{text-decoration:underline}}@media screen and (min-width: 1024px){.bal-stage--is-medium .bal-stage-content .bal-stage-body{min-height:400px}}.bal-stage--is-large .bal-stage-content .bal-stage-body{min-height:375px}@media screen and (min-width: 769px),print{.bal-stage--is-large .bal-stage-content .bal-stage-body{min-height:560px}}@media screen and (min-width: 1024px){.bal-stage--is-large .bal-stage-content .bal-stage-body{min-height:840px}}.bal-stage--has-shape .bal-stage-content{margin-bottom:22px}@media screen and (min-width: 769px),print{.bal-stage--has-shape .bal-stage-content{margin-bottom:40px}}@media screen and (min-width: 1024px){.bal-stage--has-shape .bal-stage-content{margin-bottom:66px}}@media screen and (min-width: 769px),print{.bal-stage--has-shape .bal-stage-content .bal-stage-body>*{max-width:calc(100% - 120px)}}@media screen and (min-width: 1024px){.bal-stage--has-shape .bal-stage-content .bal-stage-body>*{max-width:calc(100% - 198px)}}.bal-stage--has-shape .bal-stage-content .bal-shape{position:absolute;bottom:-22px;right:0}@media screen and (min-width: 769px),print{.bal-stage--has-shape .bal-stage-content .bal-shape{bottom:-40px}}@media screen and (min-width: 1024px){.bal-stage--has-shape .bal-stage-content .bal-shape{bottom:-66px}}";

const Stage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.getContainerWidth = () => {
      switch (this.containerSize) {
        case 'is-detail-page':
        case 'detail-page':
          return '680px';
        case 'is-compact':
        case 'compact':
          return '832px';
        case 'is-blog-page':
        case 'blog-page':
          return '920px';
        case 'is-fluid':
        case 'fluid':
          return '100vw';
        case 'is-wide':
        case 'wide':
        default:
          return '1400px';
      }
    };
    this.containerSize = '';
    this.size = '';
    this.color = 'purple';
    this.shape = false;
    this.shapeVariation = undefined;
    this.shapeRotation = undefined;
  }
  get containerClass() {
    if (this.containerSize.includes('wide')) {
      return '';
    }
    if (this.containerSize.startsWith('is-')) {
      return this.containerSize;
    }
    return `is-${this.containerSize}`;
  }
  render() {
    const block = BEM.block('stage');
    const element = BEM.block('stage-content');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`is-${this.size === '' ? 'medium' : this.size}`).class()), block.modifier(`is-${this.color}`).class(!!this.color)), block.modifier('has-shape').class(!!this.shape)), style: { '--bal-stage-container-width': this.getContainerWidth() } }, h("section", { class: Object.assign(Object.assign({}, element.class()), { container: true, [`${this.containerClass}`]: this.containerSize !== '' }) }, h("slot", null), this.shape && (h("div", { class: { container: true, [`${this.containerClass}`]: this.containerSize !== '' } }, h("bal-shape", { color: this.color, variation: this.shapeVariation, rotation: this.shapeRotation }))))));
  }
};
Stage.style = {
  css: balStageCss
};

const StageBackLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};

const StageBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const block = BEM.block('stage-body');
    return (h(Host, { class: Object.assign({}, block.class()) }, h("slot", null)));
  }
  get el() { return getElement(this); }
};

const StageFoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "hero-foot" }, h("slot", null)));
  }
  get el() { return getElement(this); }
};

const StageHead = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "hero-head" }, h("slot", null)));
  }
  get el() { return getElement(this); }
};

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

export { Stage as bal_stage, StageBackLink as bal_stage_back_link, StageBody as bal_stage_body, StageFoot as bal_stage_foot, StageHead as bal_stage_head, StageImage as bal_stage_image };
