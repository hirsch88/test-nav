import { r as registerInstance, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { B as BEM } from './bem-1b28532d.js';
import { b as balBrowser } from './browser-9199b5e2.js';

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

const Heading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "level": ["levelWatcher"],
    "visualLevel": ["visualLevelWatcher"],
    "autoLevel": ["autoLevelWatcher"]
  }; }
};
Heading.style = {
  css: balHeadingCss
};

const balTextCss = ":root{--bal-text-color-light-blue:var(--bal-color-text-light-blue);--bal-text-color-blue-dark:var(--bal-color-text-primary-dark);--bal-text-color-blue-light:var(--bal-color-text-blue-light);--bal-text-color-primary-light:var(--bal-color-text-primary-light);--bal-text-color-primary-dark:var(--bal-color-text-primary-dark);--bal-text-color-white:var(--bal-color-text-white);--bal-text-color-black:var(--bal-color-text-black);--bal-text-color-grey:var(--bal-color-text-grey);--bal-text-color-primary:var(--bal-color-text-primary);--bal-text-color-blue:var(--bal-color-text-primary);--bal-text-color-info:var(--bal-color-text-info);--bal-text-color-success:var(--bal-color-text-success);--bal-text-color-warning:var(--bal-color-text-warning);--bal-text-color-danger:var(--bal-color-text-danger);--bal-text-color-danger-dark:var(--bal-color-text-danger-dark);--bal-text-color-danger-darker:var(--bal-color-text-danger-darker)}.bal-text{display:block;-webkit-box-sizing:content-box;box-sizing:content-box;position:static;word-break:break-word;margin:0 0 var(--bal-space-normal) 0}.bal-text--inline{display:inline;margin:0}.bal-text--space-all{margin-top:var(--bal-space-normal);margin-bottom:var(--bal-space-normal)}.bal-text--space-top{margin-top:var(--bal-space-normal);margin-bottom:0}.bal-text--space-bottom{margin-top:0;margin-bottom:var(--bal-space-normal)}.bal-text--space-none{margin:0}.bal-text__text{padding:0;margin:0}.bal-text__text--no-wrap{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.bal-text__text--has-text-light-blue{color:var(--bal-text-color-light-blue)}.bal-text__text--has-text-blue-dark{color:var(--bal-text-color-primary-dark)}.bal-text__text--has-text-blue-light{color:var(--bal-text-color-blue-light)}.bal-text__text--has-text-primary-light{color:var(--bal-text-color-primary-light)}.bal-text__text--has-text-primary-dark{color:var(--bal-text-color-primary-dark)}.bal-text__text--has-text-white{color:var(--bal-text-color-white)}.bal-text__text--has-text-black{color:var(--bal-text-color-black)}.bal-text__text--has-text-grey{color:var(--bal-text-color-grey)}.bal-text__text--has-text-primary{color:var(--bal-text-color-primary)}.bal-text__text--has-text-blue{color:var(--bal-text-color-primary)}.bal-text__text--has-text-info{color:var(--bal-text-color-info)}.bal-text__text--has-text-success{color:var(--bal-text-color-success)}.bal-text__text--has-text-warning{color:var(--bal-text-color-warning)}.bal-text__text--has-text-danger{color:var(--bal-text-color-danger)}.bal-text__text--has-text-danger-dark{color:var(--bal-text-color-danger-dark)}.bal-text__text--has-text-danger-darker{color:var(--bal-text-color-danger-darker)}";

const Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = '';
    this.heading = false;
    this.noWrap = false;
    this.bold = false;
    this.inline = false;
    this.color = '';
    this.space = '';
    this.inverted = false;
    this.shadow = false;
    this.disabled = undefined;
    this.invalid = undefined;
    this.hovered = false;
    this.pressed = false;
  }
  parseColor() {
    if (this.disabled) {
      return 'grey';
    }
    if (this.invalid) {
      if (this.pressed) {
        return 'danger-darker';
      }
      if (this.hovered) {
        return 'danger-dark';
      }
      return 'danger';
    }
    const color = this.inverted ? 'white' : this.color === 'info' ? 'primary' : this.color;
    if (this.pressed) {
      return 'primary-dark';
    }
    if (this.hovered) {
      return 'light-blue';
    }
    return color;
  }
  render() {
    const Text = this.inline ? 'span' : 'p';
    const color = this.parseColor();
    const block = BEM.block('text');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`space-${this.space}`).class(this.space !== '')), block.modifier(`inline`).class(this.inline)) }, h(Text, { class: Object.assign(Object.assign(Object.assign(Object.assign({}, block.element('text').class()), block.element('text').modifier(`has-text-${color}`).class()), block.element('text').modifier(`no-wrap`).class(this.noWrap)), { 'is-size-small': this.size === 'small', 'is-size-large': this.size === 'lead', 'is-size-medium': this.size === 'block', 'has-text-weight-bold': this.bold, 'is-family-title': this.heading, 'has-text-shadow': this.shadow }), "data-testid": "bal-text" }, h("slot", null))));
  }
};
Text.style = {
  css: balTextCss
};

export { Heading as bal_heading, Text as bal_text };
