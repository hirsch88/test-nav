import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BEM } from './bem.js';

const ButtonGroup = proxyCustomElement(class ButtonGroup extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.position = '';
    this.direction = 'auto';
    this.reverse = false;
  }
  render() {
    const block = BEM.block('button-group');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`position-${this.position}`).class()), block.modifier(`direction-${this.direction}`).class()) }, h("div", { class: {
        'field': true,
        'is-grouped': true,
        'is-reverse': this.reverse,
        [`has-direction-${this.direction}`]: true,
      } }, h("slot", null))));
  }
}, [4, "bal-button-group", {
    "position": [1],
    "direction": [1],
    "reverse": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-button-group"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-button-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ButtonGroup);
      }
      break;
  } });
}

export { ButtonGroup as B, defineCustomElement as d };
