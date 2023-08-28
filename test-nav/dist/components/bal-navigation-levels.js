import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { r as readSubLevels } from './level.utils.js';

const NavigationLevels = proxyCustomElement(class NavigationLevels extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  async getLevelInfos() {
    return await readSubLevels(this.el, 'bal-navigation-level-meta');
  }
  render() {
    return (h(Host, { class: "is-hidden" }, h("slot", null)));
  }
  get el() { return this; }
}, [4, "bal-navigation-levels", {
    "getLevelInfos": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-navigation-levels"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-navigation-levels":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationLevels);
      }
      break;
  } });
}

const BalNavigationLevels = NavigationLevels;
const defineCustomElement = defineCustomElement$1;

export { BalNavigationLevels, defineCustomElement };
