import { r as registerInstance, h, H as Host } from './index-e015dbc8.js';
import { B as BEM } from './bem-1b28532d.js';

const NavigationMain = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ariaLabelMain = '';
  }
  render() {
    const mainEl = BEM.block('nav').element('main');
    return (h(Host, { class: Object.assign({}, mainEl.class()) }, h("nav", { role: "navigation", "aria-label": this.ariaLabelMain }, h("slot", { name: "main-head" })), h("slot", { name: "main-body" })));
  }
};

export { NavigationMain as bal_navigation_main };
