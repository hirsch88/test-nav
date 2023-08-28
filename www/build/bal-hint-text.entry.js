import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

const HintText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const block = BEM.block('hint');
    const elContent = block.element('content');
    const elText = elContent.element('text');
    const elTextField = elText.element('field');
    return (h(Host, { class: Object.assign({}, elText.class()) }, h("p", { class: Object.assign({}, elTextField.class()) }, h("slot", null))));
  }
};

export { HintText as bal_hint_text };
