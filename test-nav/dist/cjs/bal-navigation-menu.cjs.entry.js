'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const bem = require('./bem-5d122a5c.js');

const NavigationMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.linkHref = undefined;
    this.linkName = undefined;
    this.target = '_self';
    this.elements = [];
    this.tracking = {};
  }
  render() {
    const navMenuEl = bem.BEM.block('nav').element('menu');
    return (index.h(index.Host, { class: Object.assign({}, navMenuEl.class()) }, this.linkHref && this.linkName && (index.h("div", { class: Object.assign({}, navMenuEl.element('link').class()) }, index.h("a", Object.assign({ href: this.linkHref, target: this.target }, this.tracking), this.linkName, " \u279E"))), this.elements && (index.h("div", { style: { overflow: 'hidden' } }, index.h("div", { class: Object.assign({ 'columns is-multiline': true }, navMenuEl.element('wrapper').class()) }, this.elements.some(subLevel => subLevel.color === 'white') && (index.h("div", { class: {
        'bal-nav__menu__white-list__wrapper column is-full is-6-desktop is-two-thirds-widescreen': true,
      } }, index.h("div", { class: Object.assign({}, navMenuEl.element('white-list').class()) }, this.elements
      .filter(subLevel => subLevel.color === 'white')
      .map(block => {
      var _a;
      return (block && (index.h("bal-navigation-menu-list", { headline: block.label, href: block.link, target: block.target, tracking: block.trackingData }, index.h("div", { slot: "links" }, (_a = block.subLevels) === null || _a === void 0 ? void 0 : _a.map(item => (index.h("bal-navigation-menu-list-item", { href: item.link, target: item.target, tracking: item.trackingData }, item.label)))))));
    })))), this.elements.some(subLevel => subLevel.color === 'grey' ||
      subLevel.color === 'yellow' ||
      subLevel.color === 'red' ||
      subLevel.color === 'purple' ||
      subLevel.color === 'green') && (index.h("div", { class: Object.assign({ 'column is-full is-6-desktop is-one-third-widescreen': true }, navMenuEl.element('grey-list').class()) }, this.elements
      .filter(subLevel => subLevel.color === 'grey' ||
      subLevel.color === 'yellow' ||
      subLevel.color === 'red' ||
      subLevel.color === 'purple' ||
      subLevel.color === 'green')
      .map(block => {
      var _a;
      return (index.h("bal-navigation-menu-list", { headline: block.label, href: block.link, color: block.color, target: block.target, tracking: block.trackingData }, index.h("div", { slot: "links" }, (_a = block.subLevels) === null || _a === void 0 ? void 0 : _a.map(item => (index.h("bal-navigation-menu-list-item", { href: item.link, target: item.target, tracking: item.trackingData }, item.label))))));
    }))))))));
  }
};

exports.bal_navigation_menu = NavigationMenu;
