import { r as registerInstance, h, H as Host } from './index-e015dbc8.js';
import { B as BEM } from './bem-1b28532d.js';

const NavigationMeta = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ariaLabelMeta = '';
  }
  render() {
    const metaEl = BEM.block('nav').element('meta');
    return (h(Host, { class: Object.assign({}, metaEl.class()) }, h("nav", { class: "container", role: "navigation", "aria-label": this.ariaLabelMeta }, h("slot", null))));
  }
};

export { NavigationMeta as bal_navigation_meta };
