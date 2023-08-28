import { r as registerInstance, h, H as Host } from './index-e015dbc8.js';
import { B as BEM } from './bem-1b28532d.js';

const NavigationMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.linkHref = undefined;
    this.linkName = undefined;
    this.target = '_self';
    this.elements = [];
    this.tracking = {};
  }
  render() {
    const navMenuEl = BEM.block('nav').element('menu');
    return (h(Host, { class: Object.assign({}, navMenuEl.class()) }, this.linkHref && this.linkName && (h("div", { class: Object.assign({}, navMenuEl.element('link').class()) }, h("a", Object.assign({ href: this.linkHref, target: this.target }, this.tracking), this.linkName, " \u279E"))), this.elements && (h("div", { style: { overflow: 'hidden' } }, h("div", { class: Object.assign({ 'columns is-multiline': true }, navMenuEl.element('wrapper').class()) }, this.elements.some(subLevel => subLevel.color === 'white') && (h("div", { class: {
        'bal-nav__menu__white-list__wrapper column is-full is-6-desktop is-two-thirds-widescreen': true,
      } }, h("div", { class: Object.assign({}, navMenuEl.element('white-list').class()) }, this.elements
      .filter(subLevel => subLevel.color === 'white')
      .map(block => {
      var _a;
      return (block && (h("bal-navigation-menu-list", { headline: block.label, href: block.link, target: block.target, tracking: block.trackingData }, h("div", { slot: "links" }, (_a = block.subLevels) === null || _a === void 0 ? void 0 : _a.map(item => (h("bal-navigation-menu-list-item", { href: item.link, target: item.target, tracking: item.trackingData }, item.label)))))));
    })))), this.elements.some(subLevel => subLevel.color === 'grey' ||
      subLevel.color === 'yellow' ||
      subLevel.color === 'red' ||
      subLevel.color === 'purple' ||
      subLevel.color === 'green') && (h("div", { class: Object.assign({ 'column is-full is-6-desktop is-one-third-widescreen': true }, navMenuEl.element('grey-list').class()) }, this.elements
      .filter(subLevel => subLevel.color === 'grey' ||
      subLevel.color === 'yellow' ||
      subLevel.color === 'red' ||
      subLevel.color === 'purple' ||
      subLevel.color === 'green')
      .map(block => {
      var _a;
      return (h("bal-navigation-menu-list", { headline: block.label, href: block.link, color: block.color, target: block.target, tracking: block.trackingData }, h("div", { slot: "links" }, (_a = block.subLevels) === null || _a === void 0 ? void 0 : _a.map(item => (h("bal-navigation-menu-list-item", { href: item.link, target: item.target, tracking: item.trackingData }, item.label))))));
    }))))))));
  }
};

export { NavigationMenu as bal_navigation_menu };
