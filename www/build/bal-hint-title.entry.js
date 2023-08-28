import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

const HintTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const block = BEM.block('hint');
    const elContent = block.element('content');
    const elTitle = elContent.element('title');
    const elHeading = elTitle.element('heading');
    return (h(Host, { class: Object.assign({}, elTitle.class()) }, h("h3", { class: Object.assign(Object.assign({}, elHeading.class()), { 'title': true, 'is-size-x-large': true }) }, h("span", null, h("slot", null)))));
  }
};

export { HintTitle as bal_hint_title };
