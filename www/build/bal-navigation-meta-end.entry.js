import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
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
