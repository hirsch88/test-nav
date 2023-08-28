import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';

const NavigationMainBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mainBodyEl = BEM.block('nav').element('main').element('body');
    return (h(Host, { class: Object.assign({}, mainBodyEl.class()) }, h("slot", null)));
  }
};

export { NavigationMainBody as bal_navigation_main_body };
