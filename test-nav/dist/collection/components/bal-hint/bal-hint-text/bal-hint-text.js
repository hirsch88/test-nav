import { Host, h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class HintText {
  render() {
    const block = BEM.block('hint');
    const elContent = block.element('content');
    const elText = elContent.element('text');
    const elTextField = elText.element('field');
    return (h(Host, { class: Object.assign({}, elText.class()) }, h("p", { class: Object.assign({}, elTextField.class()) }, h("slot", null))));
  }
  static get is() { return "bal-hint-text"; }
}
