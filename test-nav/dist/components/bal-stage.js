import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';
import { d as defineCustomElement$2 } from './bal-shape2.js';

const balStageCss = ":root{--bal-stage-background-red:var(--bal-color-red);--bal-stage-background-yellow:var(--bal-color-yellow);--bal-stage-background-green:var(--bal-color-green);--bal-stage-background-purple:var(--bal-color-purple);--bal-stage-back-font-family:var(--bal-font-family-title);--bal-stage-back-font-weight:var(--bal-weight-bold)}.bal-stage{display:block;position:relative}.bal-stage--is-purple{background:var(--bal-stage-background-purple)}.bal-stage--is-green{background:var(--bal-stage-background-green)}.bal-stage--is-red{background:var(--bal-stage-background-red)}.bal-stage--is-yellow{background:var(--bal-stage-background-yellow)}.bal-stage .bal-stage-content{display:block;position:static}.bal-stage .bal-stage-content .bal-stage-image{overflow:hidden}.bal-stage .bal-stage-content .bal-stage-image img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.bal-stage .bal-stage-content .bal-stage-body{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding-top:calc(var(--bal-space-xxxx-large) + 4rem);padding-bottom:var(--bal-space-xxx-large)}@media screen and (min-width: 769px),print{.bal-stage .bal-stage-content .bal-stage-body{padding-top:calc(var(--bal-space-tablet-xxxx-large) + 4rem);padding-bottom:var(--bal-space-tablet-xx-large)}}@media screen and (min-width: 1024px){.bal-stage .bal-stage-content .bal-stage-body{padding-top:calc(var(--bal-space-desktop-xxxx-large) + 3rem);padding-bottom:var(--bal-space-desktop-xx-large)}}@media screen and (max-width: 1023px){.bal-stage .bal-stage-content .bal-stage-back-link{display:none}}@media screen and (min-width: 1024px){.bal-stage .bal-stage-content .bal-stage-back-link a{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;font-family:var(--bal-stage-back-font-family);font-weight:var(--bal-stage-back-font-weight);text-decoration:none}.bal-stage .bal-stage-content .bal-stage-back-link a:hover{text-decoration:underline}.bal-stage .bal-stage-content .bal-stage-back-link a:active{text-decoration:underline}}@media screen and (min-width: 1024px){.bal-stage--is-medium .bal-stage-content .bal-stage-body{min-height:400px}}.bal-stage--is-large .bal-stage-content .bal-stage-body{min-height:375px}@media screen and (min-width: 769px),print{.bal-stage--is-large .bal-stage-content .bal-stage-body{min-height:560px}}@media screen and (min-width: 1024px){.bal-stage--is-large .bal-stage-content .bal-stage-body{min-height:840px}}.bal-stage--has-shape .bal-stage-content{margin-bottom:22px}@media screen and (min-width: 769px),print{.bal-stage--has-shape .bal-stage-content{margin-bottom:40px}}@media screen and (min-width: 1024px){.bal-stage--has-shape .bal-stage-content{margin-bottom:66px}}@media screen and (min-width: 769px),print{.bal-stage--has-shape .bal-stage-content .bal-stage-body>*{max-width:calc(100% - 120px)}}@media screen and (min-width: 1024px){.bal-stage--has-shape .bal-stage-content .bal-stage-body>*{max-width:calc(100% - 198px)}}.bal-stage--has-shape .bal-stage-content .bal-shape{position:absolute;bottom:-22px;right:0}@media screen and (min-width: 769px),print{.bal-stage--has-shape .bal-stage-content .bal-shape{bottom:-40px}}@media screen and (min-width: 1024px){.bal-stage--has-shape .bal-stage-content .bal-shape{bottom:-66px}}";

const Stage = proxyCustomElement(class Stage extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  static get style() { return {
    css: balStageCss
  }; }
}, [36, "bal-stage", {
    "containerSize": [1, "container-size"],
    "size": [1],
    "color": [1],
    "shape": [4],
    "shapeVariation": [1, "shape-variation"],
    "shapeRotation": [1, "shape-rotation"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-stage", "bal-shape"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-stage":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Stage);
      }
      break;
    case "bal-shape":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalStage = Stage;
const defineCustomElement = defineCustomElement$1;

export { BalStage, defineCustomElement };
