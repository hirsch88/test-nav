import { Host, h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export class HintTitle {
  render() {
    const block = BEM.block('hint');
    const elContent = block.element('content');
    const elTitle = elContent.element('title');
    const elHeading = elTitle.element('heading');
    return (h(Host, { class: Object.assign({}, elTitle.class()) }, h("h3", { class: Object.assign(Object.assign({}, elHeading.class()), { 'title': true, 'is-size-x-large': true }) }, h("span", null, h("slot", null)))));
  }
  static get is() { return "bal-hint-title"; }
}
