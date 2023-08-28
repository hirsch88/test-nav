import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { i as inheritAttributes } from './attributes-56afda45.js';
import { B as BEM } from './bem-1b28532d.js';

const balTagCss = ":root{--bal-tag-background:var(--bal-color-grey);--bal-tag-background-primary:var(--bal-color-primary);--bal-tag-background-grey:var(--bal-color-grey);--bal-tag-background-success:var(--bal-color-success-4);--bal-tag-background-info:var(--bal-color-info-4);--bal-tag-background-warning:var(--bal-color-warning-4);--bal-tag-background-danger:var(--bal-color-danger-4);--bal-tag-background-purple:var(--bal-color-purple-5);--bal-tag-background-red:var(--bal-color-red-5);--bal-tag-background-yellow:var(--bal-color-yellow-4);--bal-tag-background-green:var(--bal-color-green-4);--bal-tag-background-purple-light:var(--bal-color-purple-2);--bal-tag-background-red-light:var(--bal-color-red-2);--bal-tag-background-yellow-light:var(--bal-color-yellow-2);--bal-tag-background-green-light:var(--bal-color-green-2);--bal-tag-background-invalid:var(--bal-color-border-danger);--bal-tag-background-disabled:var(--bal-color-border-grey-dark);--bal-tag-radius:var(--bal-radius-rounded);--bal-tag-border-disabled-color:var(--bal-color-border-grey-dark);--bal-tag-text:var(--bal-color-grey-inverted);--bal-tag-text-primary:var(--bal-color-primary-inverted);--bal-tag-text-grey:var(--bal-color-grey-inverted);--bal-tag-text-success:var(--bal-color-success-inverted);--bal-tag-text-info:var(--bal-color-info-inverted);--bal-tag-text-warning:var(--bal-color-warning-5-inverted);--bal-tag-text-danger:var(--bal-color-danger-inverted);--bal-tag-text-purple:var(--bal-color-purple-5-inverted);--bal-tag-text-red:var(--bal-color-red-5-inverted);--bal-tag-text-yellow:var(--bal-color-yellow-5-inverted);--bal-tag-text-green:var(--bal-color-green-5-inverted);--bal-tag-text-purple-light:var(--bal-color-purple-2-inverted);--bal-tag-text-red-light:var(--bal-color-red-2-inverted);--bal-tag-text-yellow-light:var(--bal-color-yellow-2-inverted);--bal-tag-text-green-light:var(--bal-color-green-2-inverted);--bal-tag-text-invalid:var(--bal-color-text-white);--bal-tag-text-disabled:var(--bal-color-text-white)}.bal-tag{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:static;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-height:2rem;line-height:1.5rem;padding:.25rem .75rem .25rem .75rem;background-color:var(--bal-tag-background);border-radius:var(--bal-tag-radius)}.bal-tag--is-small{padding:0 .75rem 0 .75rem;min-height:1.5rem}.bal-tag--is-medium{min-height:2.5rem;padding:.5rem 1rem .5rem 1rem}.bal-tag--is-large{min-height:3rem;padding:.75rem 1.5rem .75rem 1.5rem}.bal-tag--is-primary{background:var(--bal-tag-background-primary)}.bal-tag--is-grey{background:var(--bal-tag-background-grey)}.bal-tag--is-success{background:var(--bal-tag-background-success)}.bal-tag--is-info{background:var(--bal-tag-background-info)}.bal-tag--is-warning{background:var(--bal-tag-background-warning)}.bal-tag--is-danger{background:var(--bal-tag-background-danger)}.bal-tag--is-purple{background:var(--bal-tag-background-purple)}.bal-tag--is-red{background:var(--bal-tag-background-red)}.bal-tag--is-yellow{background:var(--bal-tag-background-yellow)}.bal-tag--is-green{background:var(--bal-tag-background-green)}.bal-tag--is-purple-light{background:var(--bal-tag-background-purple-light)}.bal-tag--is-red-light{background:var(--bal-tag-background-red-light)}.bal-tag--is-yellow-light{background:var(--bal-tag-background-yellow-light)}.bal-tag--is-green-light{background:var(--bal-tag-background-green-light)}.bal-tag--is-invalid{background:var(--bal-tag-background-invalid);color:var(--bal-color-text-white)}.bal-tag__label{font-family:var(--bal-font-family-text);color:var(--bal-tag-text);font-weight:var(--bal-weight-bold);font-size:var(--bal-size-normal) !important;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;gap:.25rem}.bal-tag__label--is-small{font-size:var(--bal-size-small) !important;font-weight:var(--bal-weight-regular) !important}.bal-tag__label--is-medium{font-size:var(--bal-size-medium) !important}.bal-tag__label--is-large{font-size:var(--bal-size-medium) !important}.bal-tag__label--is-primary{color:var(--bal-tag-text-primary)}.bal-tag__label--is-grey{color:var(--bal-tag-text-grey)}.bal-tag__label--is-success{color:var(--bal-tag-text-success)}.bal-tag__label--is-info{color:var(--bal-tag-text-info)}.bal-tag__label--is-warning{color:var(--bal-tag-text-warning)}.bal-tag__label--is-danger{color:var(--bal-tag-text-danger)}.bal-tag__label--is-purple{color:var(--bal-tag-text-purple)}.bal-tag__label--is-red{color:var(--bal-tag-text-red)}.bal-tag__label--is-yellow{color:var(--bal-tag-text-yellow)}.bal-tag__label--is-green{color:var(--bal-tag-text-green)}.bal-tag__label--is-purple-light{color:var(--bal-tag-text-purple-light)}.bal-tag__label--is-red-light{color:var(--bal-tag-text-red-light)}.bal-tag__label--is-yellow-light{color:var(--bal-tag-text-yellow-light)}.bal-tag__label--is-green-light{color:var(--bal-tag-text-green-light)}.bal-tag__label--is-invalid{background:var(--bal-color-border-danger);color:var(--bal-tag-text-invalid)}.bal-tag__label--is-disabled{background-color:var(--bal-tag-background-disabled);border-color:var(--bal-tag-border-disabled-color)}.bal-tag--is-disabled{cursor:default;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:var(--bal-tag-background-disabled);border-color:var(--bal-tag-border-disabled-color);-webkit-box-shadow:var(--bal-shadow-none);box-shadow:var(--bal-shadow-none);color:var(--bal-tag-text-disabled)}.bal-tag--is-disabled>span{color:var(--bal-tag-text-disabled)}.bal-tag__close{margin-left:.25rem;margin-right:-0.5rem}.bal-tag-group{display:-ms-flexbox;display:flex;gap:.25rem}";

const Tag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balCloseClick = createEvent(this, "balCloseClick", 7);
    this.inheritedAttributes = {};
    this.inheritedAttributesClose = {};
    this.color = '';
    this.size = '';
    this.closable = false;
    this.invalid = false;
    this.disabled = false;
    this.position = 'left';
    this.light = false;
    this.transparent = false;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'title']);
    this.inheritedAttributesClose = inheritAttributes(this.el, ['tabindex']);
  }
  render() {
    const block = BEM.block('tag');
    const elLabel = block.element('label');
    const sizeClass = `is-${this.size}`;
    const hasSize = this.size !== undefined;
    const hasColor = this.color !== '';
    const colorClass = `is-${this.color}${this.light ? '-light' : ''}`;
    const disabledClass = 'is-disabled';
    const hasDisabled = this.disabled;
    const positionClass = `is-${this.position}`;
    const hasPosition = this.position !== undefined;
    return (h(Host, Object.assign({ "aria-disabled": this.disabled ? 'true' : null, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(sizeClass).class(hasSize)), block.modifier(colorClass).class(hasColor)), block.modifier(disabledClass).class(hasDisabled)), block.modifier(positionClass).class(hasPosition)), block.modifier('is-invalid').class(this.invalid)) }, this.inheritedAttributes), h("span", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, elLabel.class()), elLabel.modifier(sizeClass).class(hasSize)), elLabel.modifier(colorClass).class(hasColor)), elLabel.modifier(disabledClass).class(hasDisabled)), elLabel.modifier('is-invalid').class(this.invalid)), "data-testid": "bal-tag-label" }, h("slot", null)), h("bal-close", Object.assign({ class: Object.assign({}, block.element('close').class()), style: {
        display: this.closable && !this.disabled ? 'flex' : 'none',
      }, size: this.size === 'small' ? 'small' : '', inverted: (['blue', 'primary', 'info', 'success', 'warning', 'danger', 'red', 'purple', 'yellow', 'green'].includes(this.color) &&
        !this.light) ||
        this.invalid, "data-testid": "bal-tag-close", onClick: (ev) => this.balCloseClick.emit(ev) }, this.inheritedAttributesClose))));
  }
  get el() { return getElement(this); }
};
Tag.style = {
  css: balTagCss
};

const TagGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "bal-tag-group" }, h("slot", null)));
  }
};

export { Tag as bal_tag, TagGroup as bal_tag_group };
