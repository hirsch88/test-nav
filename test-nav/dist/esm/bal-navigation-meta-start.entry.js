import { r as registerInstance, h, H as Host } from './index-e015dbc8.js';
import { B as BEM } from './bem-1b28532d.js';

const NavigationMetaStart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const metaStartEl = BEM.block('nav').element('meta').element('start');
    return (h(Host, { class: Object.assign({}, metaStartEl.class()) }, h("slot", null)));
  }
};

export { NavigationMetaStart as bal_navigation_meta_start };
