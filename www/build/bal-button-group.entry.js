import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

const ButtonGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};

export { ButtonGroup as bal_button_group };
