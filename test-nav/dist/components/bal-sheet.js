import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const balSheetCss = ":root{--bal-sheet-radius:var(--bal-radius-large);--bal-sheet-background-color:var(--bal-color-white);--bal-sheet-shadow:var(--bal-shadow-normal);--bal-sheet-position-bottom:.5rem}.bal-sheet{display:block;position:fixed;bottom:var(--bal-sheet-position-bottom);left:0;right:0;width:100%;z-index:var(--bal-z-index-sticky);font-weight:var(--bal-weight-regular);font-family:var(--bal-font-family-text);font-size:var(--bal-size-normal)}.bal-sheet__container .bal-sheet__container__inner,.bal-sheet__container.container .bal-sheet__container__inner{border-radius:var(--bal-sheet-radius);background:var(--bal-sheet-background);-webkit-box-shadow:var(--bal-sheet-shadow);box-shadow:var(--bal-sheet-shadow);padding:1rem}@media screen and (min-width: 769px),print{.bal-sheet__container .bal-sheet__container__inner,.bal-sheet__container.container .bal-sheet__container__inner{padding:1rem 1.5rem}}";

const Sheet = proxyCustomElement(class Sheet extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.containerSize = '';
  }
  render() {
    const block = BEM.block('sheet');
    const container = block.element('container');
    const containerInner = container.element('inner');
    const containerModifier = this.containerSize !== '' ? `is-${this.containerSize}` : '';
    return (h(Host, { class: Object.assign({}, block.class()) }, h("div", { class: Object.assign(Object.assign({}, container.class()), { container: true, [containerModifier]: true }) }, h("div", { class: Object.assign({}, containerInner.class()) }, h("slot", null)))));
  }
  static get style() { return {
    css: balSheetCss
  }; }
}, [36, "bal-sheet", {
    "containerSize": [1, "container-size"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-sheet"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-sheet":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Sheet);
      }
      break;
  } });
}

const BalSheet = Sheet;
const defineCustomElement = defineCustomElement$1;

export { BalSheet, defineCustomElement };
