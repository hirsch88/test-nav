import { r as registerInstance, h, H as Host } from './index-e015dbc8.js';
import { B as BEM } from './bem-1b28532d.js';

const NavigationMetaEnd = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const metaEndEl = BEM.block('nav').element('meta').element('end');
    return (h(Host, { class: Object.assign({}, metaEndEl.class()) }, h("slot", null)));
  }
};

export { NavigationMetaEnd as bal_navigation_meta_end };
