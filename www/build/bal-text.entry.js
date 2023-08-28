import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

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

export { Text as bal_text };
