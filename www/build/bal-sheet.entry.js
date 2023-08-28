import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

const balSheetCss = ":root{--bal-sheet-radius:var(--bal-radius-large);--bal-sheet-background-color:var(--bal-color-white);--bal-sheet-shadow:var(--bal-shadow-normal);--bal-sheet-position-bottom:.5rem}.bal-sheet{display:block;position:fixed;bottom:var(--bal-sheet-position-bottom);left:0;right:0;width:100%;z-index:var(--bal-z-index-sticky);font-weight:var(--bal-weight-regular);font-family:var(--bal-font-family-text);font-size:var(--bal-size-normal)}.bal-sheet__container .bal-sheet__container__inner,.bal-sheet__container.container .bal-sheet__container__inner{border-radius:var(--bal-sheet-radius);background:var(--bal-sheet-background);-webkit-box-shadow:var(--bal-sheet-shadow);box-shadow:var(--bal-sheet-shadow);padding:1rem}@media screen and (min-width: 769px),print{.bal-sheet__container .bal-sheet__container__inner,.bal-sheet__container.container .bal-sheet__container__inner{padding:1rem 1.5rem}}";

const Sheet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.containerSize = '';
  }
  render() {
    const block = BEM.block('sheet');
    const container = block.element('container');
    const containerInner = container.element('inner');
    const containerModifier = this.containerSize !== '' ? `is-${this.containerSize}` : '';
    return (h(Host, { class: Object.assign({}, block.class()) }, h("div", { class: Object.assign(Object.assign({}, container.class()), { container: true, [containerModifier]: true }) }, h("div", { class: Object.assign({}, containerInner.class()) }, h("slot", null)))));
  }
};
Sheet.style = {
  css: balSheetCss
};

export { Sheet as bal_sheet };
