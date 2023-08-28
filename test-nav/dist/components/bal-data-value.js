import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as lodash_isnil } from './index3.js';
import { B as BEM } from './bem.js';
import { d as defineCustomElement$4 } from './bal-button2.js';
import { d as defineCustomElement$3 } from './bal-icon2.js';
import { d as defineCustomElement$2 } from './bal-spinner2.js';

const DataValue = proxyCustomElement(class DataValue extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get el() { return this; }
}, [4, "bal-data-value", {
    "editable": [4],
    "disabled": [4],
    "multiline": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-data-value", "bal-button", "bal-icon", "bal-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-data-value":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DataValue);
      }
      break;
    case "bal-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalDataValue = DataValue;
const defineCustomElement = defineCustomElement$1;

export { BalDataValue, defineCustomElement };
