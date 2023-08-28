import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';
import { b as balBrowser } from './browser.js';

const HEADING_TAGS = {
  'display': 'h1',
  'display-2': 'h1',
  'h1': 'h1',
  'h2': 'h2',
  'h3': 'h3',
  'h4': 'h4',
  'h5': 'h5',
  'span': 'span',
  'p': 'p',
  'xxxxx-large': 'h1',
  'xxxx-large': 'h1',
  'xxx-large': 'h1',
  'xx-large': 'h1',
  'x-large': 'h2',
  'large': 'h3',
  'medium': 'h4',
  'normal': 'h5',
};
const HEADING_ORDER = [
  'xxxxx-large',
  'xxxx-large',
  'xxx-large',
  'xx-large',
  'x-large',
  'large',
  'medium',
  'normal',
];
const HEADING_SIZES = {
  'display': 'xxxxx-large',
  'display-2': 'xxxx-large',
  'h1': 'xxx-large',
  'h2': 'xx-large',
  'h3': 'x-large',
  'h4': 'large',
  'h5': 'normal',
  'p': 'normal',
  'span': 'normal',
  'xxxxx-large': 'xxxxx-large',
  'xxxx-large': 'xxxx-large',
  'xxx-large': 'xxx-large',
  'xx-large': 'xx-large',
  'x-large': 'x-large',
  'large': 'large',
  'medium': 'medium',
  'normal': 'normal',
};
const HEADING_COLORS = {
  primary: 'primary',
  info: 'primary',
  blue: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  white: 'white',
};

const balHeadingCss = ":root{--bal-heading-color-white:var(--bal-color-text-white);--bal-heading-color-success:var(--bal-color-text-success);--bal-heading-color-warning:var(--bal-color-text-warning);--bal-heading-color-danger:var(--bal-color-text-danger)}.bal-heading{display:block;position:static;margin:0}.bal-heading:not(:last-child){margin-bottom:var(--bal-space-x-small)}.bal-heading.bal-heading--level-display:not(:last-child){margin-bottom:var(--bal-space-normal)}.bal-heading--space-all,.bal-heading--space-top{margin-top:var(--bal-space-x-small)}.bal-heading--space-all,.bal-heading--space-bottom{margin-bottom:var(--bal-space-x-small)}.bal-heading--level-display.bal-heading--space-all,.bal-heading--level-display.bal-heading--space-top{margin-top:var(--bal-space-normal)}.bal-heading--level-display.bal-heading--space-all,.bal-heading--level-display.bal-heading--space-bottom{margin-bottom:var(--bal-space-normal)}.bal-heading--space-top,.bal-heading--space-top:not(:last-child){margin-bottom:0}.bal-heading--space-none,.bal-heading--space-none:not(:last-child){margin:0}.bal-heading__text{margin:0 !important;padding:0;font-weight:var(--bal-weight-bold);font-family:var(--bal-font-family-title)}.bal-heading__text--no-wrap{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.bal-heading__text--subtitle{font-weight:var(--bal-weight-light)}.bal-heading__text--shadow{text-shadow:var(--bal-text-shadow-normal)}.bal-heading__text--color-white{color:var(--bal-heading-color-white)}.bal-heading__text--color-success{color:var(--bal-heading-color-success)}.bal-heading__text--color-warning{color:var(--bal-heading-color-warning)}.bal-heading__text--color-danger{color:var(--bal-heading-color-danger)}";

const Heading = proxyCustomElement(class Heading extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.autoFontSize = undefined;
    this.level = 'h1';
    this.visualLevel = undefined;
    this.autoLevel = undefined;
    this.noWrap = false;
    this.subtitle = false;
    this.space = undefined;
    this.color = '';
    this.inverted = false;
    this.shadow = false;
  }
  levelWatcher() {
    this.updateAutoFontSize();
  }
  visualLevelWatcher() {
    this.updateAutoFontSize();
  }
  autoLevelWatcher() {
    this.updateAutoFontSize();
  }
  connectedCallback() {
    this.updateAutoFontSize();
  }
  componentDidRender() {
    if (this.autoLevel && this.autoFontSize) {
      const rows = this.rows;
      if (rows > 1) {
        const minSize = HEADING_SIZES[this.autoLevel];
        if (minSize !== this.autoFontSize) {
          const nextIndex = HEADING_ORDER.indexOf(this.autoFontSize) + 1;
          this.autoFontSize = HEADING_ORDER[nextIndex];
        }
      }
    }
  }
  updateAutoFontSize() {
    this.autoFontSize = this.fontSize;
  }
  get rows() {
    if (this.headingEl && balBrowser.hasWindow) {
      const computedStyle = window.getComputedStyle(this.headingEl);
      const lineHeight = parseInt(computedStyle.lineHeight.slice(0, -2), 10);
      const height = this.headingEl.offsetHeight;
      return height / lineHeight;
    }
    return 1;
  }
  get fontColor() {
    if (this.inverted) {
      return 'white';
    }
    return HEADING_COLORS[this.color];
  }
  get fontSize() {
    return HEADING_SIZES[this.visualLevel ? this.visualLevel : this.level];
  }
  get tag() {
    return HEADING_TAGS[this.level];
  }
  render() {
    const block = BEM.block('heading');
    const bemTextEl = block.element('text');
    const Heading = this.tag;
    const fontColor = this.fontColor;
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`space-${this.space}`).class(this.space !== undefined)), block.modifier(`level-${this.level}`).class()) }, h(Heading, { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemTextEl.class()), bemTextEl.modifier('no-wrap').class(this.noWrap)), bemTextEl.modifier('subtitle').class(this.subtitle)), bemTextEl.modifier('shadow').class(this.shadow)), bemTextEl.modifier(`color-${fontColor}`).class()), { [`is-size-${this.autoFontSize}`]: true }), ref: (headingEl) => (this.headingEl = headingEl), "data-testid": "bal-heading" }, h("slot", null))));
  }
  get el() { return this; }
  static get watchers() { return {
    "level": ["levelWatcher"],
    "visualLevel": ["visualLevelWatcher"],
    "autoLevel": ["autoLevelWatcher"]
  }; }
  static get style() { return {
    css: balHeadingCss
  }; }
}, [36, "bal-heading", {
    "level": [1],
    "visualLevel": [1, "visual-level"],
    "autoLevel": [1, "auto-level"],
    "noWrap": [4, "no-wrap"],
    "subtitle": [4],
    "space": [1],
    "color": [1],
    "inverted": [4],
    "shadow": [4],
    "autoFontSize": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-heading"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-heading":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Heading);
      }
      break;
  } });
}

export { Heading as H, defineCustomElement as d };
