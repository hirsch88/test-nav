import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';
import { d as defineCustomElement$a } from './bal-button2.js';
import { d as defineCustomElement$9 } from './bal-button-group2.js';
import { d as defineCustomElement$8 } from './bal-hint2.js';
import { d as defineCustomElement$7 } from './bal-hint-text2.js';
import { d as defineCustomElement$6 } from './bal-hint-title2.js';
import { d as defineCustomElement$5 } from './bal-icon2.js';
import { d as defineCustomElement$4 } from './bal-popover2.js';
import { d as defineCustomElement$3 } from './bal-popover-content2.js';
import { d as defineCustomElement$2 } from './bal-spinner2.js';

const FieldHint = proxyCustomElement(class FieldHint extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.subject = '';
    this.closeLabel = 'Close';
    this.small = false;
  }
  render() {
    const block = BEM.block('field-hint');
    return (h(Host, { class: Object.assign({}, block.class()) }, h("bal-hint", { class: Object.assign({}, block.element('hint').class()), "data-testid": "bal-field-hint", closeLabel: this.closeLabel, small: this.small }, this.subject ? h("bal-hint-title", null, this.subject) : '', h("bal-hint-text", null, h("slot", null)))));
  }
}, [6, "bal-field-hint", {
    "subject": [1],
    "closeLabel": [1, "close-label"],
    "small": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-field-hint", "bal-button", "bal-button-group", "bal-hint", "bal-hint-text", "bal-hint-title", "bal-icon", "bal-popover", "bal-popover-content", "bal-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-field-hint":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FieldHint);
      }
      break;
    case "bal-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "bal-button-group":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "bal-hint":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "bal-hint-text":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "bal-hint-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "bal-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-popover-content":
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

const BalFieldHint = FieldHint;
const defineCustomElement = defineCustomElement$1;

export { BalFieldHint, defineCustomElement };
