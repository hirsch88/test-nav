import { r as registerInstance, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

const balDataCss = ":root{--bal-data-item-border-color:var(--bal-color-grey-2);--bal-data-item-border-style:solid;--bal-data-item-border-width:var(--bal-border-width-normal);--bal-data-horizontal-border-bottom-width:var(--bal-border-width-normal);--bal-data-horizontal-border-color:var(--bal-color-primary-2);--bal-data-item-border-bottom:none;--bal-data-item-text-color-disabled:var(--bal-color-text-grey-dark);--bal-data-label-text-color:var(--bal-color-text-primary)}.bal-data{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-width:100%;width:100%;outline:none;text-decoration:none;overflow-wrap:break-word;white-space:normal}.bal-data>*{display:-ms-flexbox;display:flex;-ms-flex:1 1;flex:1 1;-ms-flex-wrap:wrap;flex-wrap:wrap}.bal-data-item{display:-ms-flexbox;display:flex;-ms-flex:1 1;flex:1 1;min-height:48px;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:16px 0}.bal-data-item.is-disabled .bal-data-label,.bal-data-item.is-disabled .bal-data-value{color:var(--bal-data-item-text-color-disabled)}.bal-data-item--has-border{border-bottom:var(--bal-data-item-border-width) var(--bal-data-item-border-style) var(--bal-data-item-border-color)}.bal-data-label{position:relative;display:block;color:var(--bal-data-label-text-color);-ms-flex:1 1;flex:1 1;-ms-flex-preferred-size:100%;flex-basis:100%;font-family:var(--bal-font-family-text);font-weight:var(--bal-weight-bold);font-size:var(--bal-size-small);line-height:var(--bal-size-normal);-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.bal-data-label .bal-hint{margin-left:8px;position:absolute;top:-3px;font-weight:var(--bal-weight-regular)}.bal-data-value{display:block;-ms-flex:1 1;flex:1 1;-ms-flex-preferred-size:100%;flex-basis:100%;margin-top:4px;min-height:1.5rem;overflow:visible !important;font-family:var(--bal-font-family-text);font-weight:var(--bal-weight-bold);font-size:var(--bal-size-small);line-height:var(--bal-size-normal)}.bal-data-value,.bal-data-value>div{font-family:var(--bal-font-family-text);font-weight:var(--bal-weight-regular);font-size:var(--bal-size-normal);line-height:1.25rem;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;padding-bottom:2px}.bal-data-value>ul,.bal-data-value>div>ul{margin-bottom:0 !important;margin-left:1.5rem !important}.bal-data-value .bal-button{display:none}.bal-data-value--is-multiline,.bal-data-value--is-multiline>div{white-space:normal}.bal-data:not(.bal-data--is-horizontal) .bal-data-value{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.bal-data:not(.bal-data--is-horizontal) .bal-data-value>div{-ms-flex:1;flex:1}.bal-data:not(.bal-data--is-horizontal) .bal-data-value>div>bal-input input.input{-ms-flex:1;flex:1}.bal-data:not(.bal-data--is-horizontal) .bal-data-value--is-editable .bal-data-value__button{display:block}.bal-data:not(.bal-data--is-horizontal) .bal-data-value>bal-button{margin-left:8px}@media screen and (min-width: 769px),print{.bal-data>*{-ms-flex-wrap:no-wrap;flex-wrap:no-wrap}.bal-data .bal-data-item{-ms-flex-wrap:no-wrap;flex-wrap:no-wrap;padding:8px 0}.bal-data .bal-data-item .bal-data-label{-ms-flex-preferred-size:0;flex-basis:0}.bal-data .bal-data-item .bal-data-value{-ms-flex-preferred-size:0;flex-basis:0}.bal-data:not(.bal-data--is-horizontal) .bal-data-label{font-size:var(--bal-size-normal)}.bal-data:not(.bal-data--is-horizontal) .bal-data-value{margin-top:2px}.bal-data.bal-data--is-horizontal{-ms-flex-direction:row;flex-direction:row;gap:8px}.bal-data.bal-data--is-horizontal.has-border{border-bottom:var(--bal-data-horizontal-border-bottom-width) var(--bal-data-item-border-style) var(--bal-data-horizontal-border-color)}.bal-data.bal-data--is-horizontal>*{-ms-flex-wrap:wrap;flex-wrap:wrap}.bal-data.bal-data--is-horizontal .bal-data-item{-ms-flex-wrap:wrap;flex-wrap:wrap;min-width:80px;-ms-flex-align:start;align-items:flex-start;border-bottom:var(--bal-data-item-border-bottom)}.bal-data.bal-data--is-horizontal .bal-data-item .bal-data-value{min-height:100%}.bal-data.bal-data--is-horizontal .bal-data-item .bal-data-label,.bal-data.bal-data--is-horizontal .bal-data-item .bal-data-value{-ms-flex-preferred-size:100%;flex-basis:100%;width:100%;-ms-flex-item-align:start;align-self:flex-start}}";

const Data = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputElements = ['bal-data-item'];
    this.border = false;
    this.horizontal = false;
  }
  borderHandler() {
    this.updateProps([...this.inputElements], 'border');
  }
  updateProps(selectors, key) {
    const value = this[key];
    if (value !== undefined) {
      this.notifyComponents(selectors, input => (input[key] = value));
    }
  }
  notifyComponents(selectors, callback) {
    const components = this.element.querySelectorAll(selectors.join(', '));
    components.forEach((c) => callback(c));
  }
  componentWillLoad() {
    this.borderHandler();
  }
  render() {
    const block = BEM.block('data');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('has-border').class(this.border)), block.modifier('is-horizontal').class(this.horizontal)) }, h("slot", null)));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "border": ["borderHandler"]
  }; }
};
Data.style = {
  css: balDataCss
};

export { Data as bal_data };
