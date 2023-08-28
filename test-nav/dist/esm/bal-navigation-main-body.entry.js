import { r as registerInstance, h, H as Host } from './index-e015dbc8.js';
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
