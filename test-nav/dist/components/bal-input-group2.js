import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const balInputGroupCss = ".bal-input-group{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;min-height:48px;gap:4px;border:var(--bal-border-width-normal) solid var(--bal-color-border-grey);border-radius:var(--bal-radius-normal);background:var(--bal-color-white)}.bal-input-group .input{min-height:44px;height:44px;border:none;border-radius:var(--bal-radius-none);padding-left:0;padding-right:0;padding-bottom:calc(.5em - 5px);padding-top:calc(.5em - 5px)}.bal-input-group .bal-select__control{border:none;min-height:44px}.bal-input-group .bal-select__control__input{padding-left:0 !important;padding-right:0 !important}.bal-input-group .bal-icon{min-width:48px}.bal-input-group>*:first-child.bal-select .bal-select__control{padding-left:.625rem}.bal-input-group>*:first-child.bal-input .input{padding-left:.625rem}.bal-input-group>*:last-child.bal-input .input{padding-right:.625rem}.bal-input-group>*:first-child.input{padding-left:.625rem}.bal-input-group>*:last-child.input{padding-right:.625rem}.bal-input-group>*:last-child.bal-tag{margin-right:.625rem}.bal-input-group>*:first-child.bal-tag{margin-left:.625rem}.bal-input-group.is-hovered,.bal-input-group.is-hovered .input,.bal-input-group.is-hovered .bal-select__control,.bal-input-group:hover,.bal-input-group:hover .input,.bal-input-group:hover .bal-select__control{background:var(--bal-color-grey-1)}.bal-input-group--is-danger,.bal-input-group--is-danger .input{border-color:var(--bal-color-border-danger);background:var(--bal-color-danger-1)}.bal-input-group--is-danger svg g,.bal-input-group--is-danger svg path,.bal-input-group--is-danger svg circle{fill:var(--bal-color-border-danger)}.bal-input-group.bal-input-group--is-danger,.bal-input-group.bal-input-group--is-danger .input{border-color:var(--bal-color-border-danger);background:var(--bal-color-danger-1)}.bal-input-group.bal-input-group--is-danger svg,.bal-input-group.bal-input-group--is-danger svg g,.bal-input-group.bal-input-group--is-danger svg path,.bal-input-group.bal-input-group--is-danger svg circle{fill:var(--bal-color-border-danger)}.bal-input-group.bal-input-group--is-success,.bal-input-group.bal-input-group--is-success .input{border-color:var(--bal-color-border-success);background:var(--bal-color-success-1)}.bal-input-group.bal-input-group--is-success svg,.bal-input-group.bal-input-group--is-success svg g,.bal-input-group.bal-input-group--is-success svg path,.bal-input-group.bal-input-group--is-success svg circle{fill:var(--bal-color-border-success)}.bal-input-group.bal-input-group--is-warning,.bal-input-group.bal-input-group--is-warning .input{border-color:var(--bal-color-border-warning);background:var(--bal-color-warning-1)}.bal-input-group.bal-input-group--is-warning svg,.bal-input-group.bal-input-group--is-warning svg g,.bal-input-group.bal-input-group--is-warning svg path,.bal-input-group.bal-input-group--is-warning svg circle{fill:var(--bal-color-border-warning)}.bal-input-group.bal-input-group--is-disabled,.bal-input-group.bal-input-group--is-disabled .input{border-color:var(--bal-color-border-grey-dark);background:var(--bal-color-grey-2)}.bal-input-group.bal-input-group--is-disabled svg,.bal-input-group.bal-input-group--is-disabled svg g,.bal-input-group.bal-input-group--is-disabled svg path,.bal-input-group.bal-input-group--is-disabled svg circle{fill:var(--bal-color-border-grey-dark)}.bal-input-group--is-disabled,.bal-input-group--is-disabled .input{cursor:default;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--bal-color-text-grey-dark)}.bal-input-group--is-disabled ::-webkit-input-placeholder,.bal-input-group--is-disabled .input ::-webkit-input-placeholder{color:var(--bal-color-text-grey)}.bal-input-group--is-disabled ::-moz-placeholder,.bal-input-group--is-disabled .input ::-moz-placeholder{color:var(--bal-color-text-grey)}.bal-input-group--is-disabled :-ms-input-placeholder,.bal-input-group--is-disabled .input :-ms-input-placeholder{color:var(--bal-color-text-grey)}.bal-input-group--is-disabled ::-ms-input-placeholder,.bal-input-group--is-disabled .input ::-ms-input-placeholder{color:var(--bal-color-text-grey)}.bal-input-group--is-disabled ::placeholder,.bal-input-group--is-disabled .input ::placeholder{color:var(--bal-color-text-grey)}.bal-input-group--is-disabled .tag{background-color:var(--bal-color-grey-5)}.bal-input-group--is-disabled .tag span{color:var(--bal-color-text-white)}.bal-input-group--is-disabled .tag .delete{display:none}.bal-input-group:not(.bal-input-group--is-disabled):focus-within{border-color:var(--bal-color-primary)}";

const InputGroup = proxyCustomElement(class InputGroup extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.invalid = false;
    this.disabled = false;
    this.readonly = false;
  }
  render() {
    const block = BEM.block('input-group');
    const dangerClass = 'is-danger';
    const hasDanger = this.invalid;
    const disabledClass = 'is-disabled';
    const hasDisabled = this.disabled || this.readonly;
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(dangerClass).class(hasDanger)), block.modifier(disabledClass).class(hasDisabled)) }, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return {
    css: balInputGroupCss
  }; }
}, [36, "bal-input-group", {
    "invalid": [4],
    "disabled": [4],
    "readonly": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-input-group"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-input-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InputGroup);
      }
      break;
  } });
}

export { InputGroup as I, defineCustomElement as d };
