import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
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
