import { r as registerInstance, f as createEvent, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { l as lodash_isnil } from './index-82aff103.js';
import { B as BEM } from './bem-1b28532d.js';

const DataValue = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balClick = createEvent(this, "balClick", 7);
    this.balFocus = createEvent(this, "balFocus", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
    this.editable = false;
    this.disabled = false;
    this.multiline = false;
  }
  onClickHandler(ev) {
    this.balClick.emit(ev);
    const input = this.el.querySelector('bal-input');
    if (!lodash_isnil(input)) {
      input.setFocus();
    }
  }
  render() {
    const block = BEM.block('data-value');
    const buttonEl = block.element('button');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('is-editable').class(this.editable)), block.modifier('is-multiline').class(this.multiline)) }, h("div", null, h("slot", null)), h("bal-button", { class: Object.assign({}, buttonEl.class()), "data-testid": "bal-data-value-button", square: true, outlined: true, color: "text", size: "small", icon: "edit", disabled: this.disabled, onBalBlur: _ => this.balBlur.emit(), onBalFocus: _ => this.balFocus.emit(), onClick: ev => this.onClickHandler(ev) })));
  }
  get el() { return getElement(this); }
};

export { DataValue as bal_data_value };
