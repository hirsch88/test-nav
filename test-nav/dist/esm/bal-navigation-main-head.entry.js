import { r as registerInstance, h, H as Host } from './index-e015dbc8.js';
import { B as BEM } from './bem-1b28532d.js';

const NavigationMainHead = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mainHeadEl = BEM.block('nav').element('main').element('head');
    return (h(Host, { class: Object.assign({}, mainHeadEl.class()) }, h("slot", null)));
  }
};

export { NavigationMainHead as bal_navigation_main_head };
