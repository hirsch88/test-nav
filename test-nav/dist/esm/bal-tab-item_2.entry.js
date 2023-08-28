import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { a as inheritTrackingAttributes } from './attributes-56afda45.js';
import { g as areArraysEqual } from './index.esm-df73647b.js';
import { l as raf, f as deepReady, t as transitionEndAsync, m as debounceEvent, n as hasParent, o as isChildOfEventTarget, i as isDescendant } from './helpers-08b28736.js';
import { L as Logger } from './log-01623e2c.js';
import { L as ListenToConfig } from './config.decorator-54721e29.js';
import { B as BEM } from './bem-1b28532d.js';
import { n as newBalTabOption } from './bal-tab.util-5d3f5c9c.js';
import { s as stopEventBubbling } from './form-input-fd2d14ca.js';
import { b as balBrowser } from './browser-9199b5e2.js';
import { a as getComputedPadding } from './style-725bddec.js';
import { b as balBreakpoints } from './breakpoints.subject-52f20b1f.js';
import { L as ListenToBreakpoints } from './breakpoints.decorator-547e9ed6.js';
import { L as ListenToMutation } from './mutation.decorator-96ae606b.js';
import { L as ListenToResize } from './resize.decorator-87610696.js';
import './index-82aff103.js';
import './_commonjsHelpers-ba3f0406.js';
import './icons.constant-35253412.js';
import './index-8b8ed6bd.js';
import './device-c28cde6d.js';
import './listener-ea90dc02.js';
import './tokens.esm-8af6b758.js';

const TabItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balNavigate = createEvent(this, "balNavigate", 7);
    this.inheritAttributes = {};
    this.tabPanelID = `bal-tab-panel-id-${panelID++}`;
    this.isActive = false;
    this.active = false;
    this.value = '';
    this.label = '';
    this.href = '';
    this.target = '_self';
    this.bubble = false;
    this.disabled = false;
    this.hidden = false;
    this.prevent = false;
    this.icon = undefined;
  }
  componentWillLoad() {
    this.inheritAttributes = inheritTrackingAttributes(this.el);
  }
  async getOptions() {
    return this.options;
  }
  async setActive(active) {
    this.isActive = active;
  }
  get options() {
    return {
      tabPanelID: this.tabPanelID,
      value: this.value,
      icon: this.icon,
      label: this.label,
      href: this.href,
      target: this.target,
      active: this.active,
      disabled: this.disabled,
      hidden: this.hidden,
      bubble: this.bubble,
      passed: false,
      prevent: this.prevent,
      navigate: this.balNavigate,
      trackingData: this.inheritAttributes,
    };
  }
  render() {
    return (h(Host, { id: this.tabPanelID, role: "tabpanel", "aria-label": this.label, "aria-hidden": !this.isActive ? 'true' : 'false', tabindex: this.isActive ? '0' : '-1', class: {
        'bal-tab-item': true,
        'bal-tab-item--active': this.isActive,
      } }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
let panelID = 0;

const TabSelect = ({ items, value, onSelectTab }) => {
  const bemEl = BEM.block('tabs').element('select');
  const onChange = (ev) => {
    const selectedTabs = items.filter(tab => tab.value === ev.detail);
    if (selectedTabs.length > 0) {
      const selectedTab = selectedTabs[0];
      if (selectedTab.href !== '' && selectedTab.href !== undefined) {
        if (balBrowser.hasWindow) {
          window.open(selectedTab.href, selectedTab.target);
        }
      }
      onSelectTab(ev, selectedTab);
    }
  };
  return (h("bal-select", { class: Object.assign({}, bemEl.class()), value: value, onBalChange: event => onChange(event) }, items
    .filter(tab => !tab.disabled && !tab.hidden)
    .map(tab => (h("bal-select-option", { label: tab.label, value: tab.value }, tab.label)))));
};

const TabIcon = ({ item, inverted, accordion, isAccordionOpen, isMobile, hasBubble, }) => {
  const bemEl = BEM.block('tabs').element('nav').element('item').element('icon');
  let iconColor = item.disabled ? 'grey' : 'primary';
  if (inverted) {
    iconColor = item.disabled ? 'primary-light' : 'white';
  }
  return (h("span", { class: Object.assign(Object.assign(Object.assign({}, bemEl.class()), bemEl.modifier('active').class(item.active)), bemEl.modifier('disabled').class(item.disabled)) },
    h("bal-icon", { size: isMobile || accordion ? 'small' : '', name: accordion ? 'nav-go-down' : item.icon, color: iconColor, turn: accordion && isAccordionOpen === true && item.active }),
    hasBubble ? (h("bal-badge", { class: Object.assign({}, bemEl.element('bubble').class()), size: "small" }, item.bubble)) : ('')));
};

const TabLabel = ({ item, inverted, hasBubble, isVertical, context }) => {
  const bemEl = BEM.block('tabs').element('nav').element('item').element('label');
  return (h("span", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.class()), bemEl.modifier('inverted').class(inverted)), bemEl.modifier('active').class(item.active)), bemEl.modifier('disabled').class(item.disabled)), bemEl.modifier('vertical').class(isVertical)), bemEl.modifier(`context-${context}`).class(context !== undefined)), "data-testid": "bal-tabs-item-label" },
    item.label,
    hasBubble ? (h("bal-badge", { class: Object.assign({}, bemEl.element('bubble').class()), size: "small" }, item.bubble)) : ('')));
};

const TabButton = ({ item, tabsId, isFirst, isLast, isMobile, isVertical, accordion, isAccordionOpen, inverted, expanded, spaceless, clickable, iconPosition, context, onSelectTab, }) => {
  const bemEl = BEM.block('tabs').element('nav').element('item');
  if (item.hidden) {
    return;
  }
  const hasBubble = item.bubble !== false;
  const hasIcon = item.icon !== undefined;
  const hasIconBubble = (hasIcon && hasBubble && iconPosition !== 'horizontal' && !accordion) ||
    (isMobile && hasIcon && hasBubble && !isVertical && !accordion);
  const hasAccordionIconBubble = (accordion && hasBubble) || (accordion && isMobile && hasIcon && hasBubble && !isVertical);
  const hasLabelBubble = (!hasIcon && hasBubble && !accordion) ||
    (hasBubble && !isMobile && iconPosition === 'horizontal' && !accordion) ||
    (hasBubble && isVertical && !accordion);
  const TagType = item.href === undefined || item.href === '' ? 'button' : 'a';
  const attrs = TagType === 'button'
    ? { type: 'button' }
    : {
      href: item.href,
      target: item.target,
    };
  return (h(TagType, Object.assign({ id: `${tabsId}-button-${TabButtonIds++}`, role: "tab", class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.class()), bemEl.modifier('active').class(item.active)), bemEl.modifier('disabled').class(item.disabled)), bemEl.modifier('clickable').class(clickable)), bemEl.modifier('accordion').class(accordion)), bemEl.modifier('inverted').class(inverted)), bemEl.modifier('expanded').class(expanded)), bemEl.modifier('spaceless').class(spaceless)), bemEl.modifier('first').class(isFirst)), bemEl.modifier('last').class(isLast)), bemEl.modifier('passed').class(item.passed)), bemEl.modifier('vertical').class(isVertical)), bemEl.modifier(`context-${context}`).class(context !== undefined)), bemEl.modifier(`icon-position-${iconPosition}`).class(iconPosition !== 'horizontal')), { 'bal-focusable': !item.disabled && !item.hidden }), draggable: false, "data-tabs": tabsId, "data-label": item.label, "data-value": item.value, "data-index": item.index, "data-testid": "bal-tabs-item", "aria-selected": item.active ? 'true' : 'false', "aria-disabled": `${item.disabled}`, "aria-label": item.label, "aria-controls": item.tabPanelID }, attrs, { onClick: (ev) => onSelectTab(ev, item) }),
    item.icon ? (h(TabIcon, { accordion: false, item: item, isMobile: isMobile, hasBubble: hasIconBubble, inverted: inverted })) : (''),
    h(TabLabel, { item: item, isMobile: isMobile, isVertical: isVertical, hasBubble: hasLabelBubble, inverted: inverted, context: context }),
    accordion && !item.href ? (h(TabIcon, { accordion: accordion, isAccordionOpen: isAccordionOpen, item: item, isMobile: isMobile, hasBubble: hasAccordionIconBubble, inverted: inverted })) : ('')));
};
let TabButtonIds = 0;

const TabNav = ({ items, tabsId, hasCarousel, isVertical, inNavbar, isMobile, isTouch, lineActive, border, accordion, isAccordionOpen, inverted, clickable, animated, spaceless, expanded, verticalColSize, iconPosition, context, onSelectTab, }) => {
  const bemEl = BEM.block('tabs').element('nav');
  const tabs = items.filter(tab => !tab.hidden);
  const isFullHeight = inNavbar && !isTouch;
  const Button = ({ item, index }) => (h(TabButton, { item: item, tabsId: tabsId, isFirst: index === 0, isLast: index === tabs.length - 1, isMobile: isMobile, isVertical: isVertical, iconPosition: iconPosition, spaceless: spaceless, inverted: inverted, accordion: accordion, isAccordionOpen: isAccordionOpen, context: context, expanded: expanded, clickable: clickable && !item.disabled, onSelectTab: onSelectTab }));
  return (h("div", { role: "tablist", id: `${tabsId}-nav`, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.class()), bemEl.modifier(`full-height`).class(isFullHeight)), bemEl.modifier(`border`).class(border)), bemEl.modifier(`animated`).class(animated)), bemEl.modifier(`vertical`).class(isVertical)), bemEl.modifier(`expanded`).class(expanded && !isVertical)), bemEl.modifier(`vertical-col-${verticalColSize}`).class(isVertical)) },
    hasCarousel ? (h("bal-carousel", { id: `${tabsId}-carousel`, class: Object.assign({}, bemEl.element('carousel').class()), fullHeight: isFullHeight, border: border, inverted: inverted, controls: "small", "items-per-view": "auto", steps: 3, onBalChange: stopEventBubbling },
      tabs.map((tab, index) => (h("bal-carousel-item", { class: Object.assign(Object.assign({}, bemEl.element('carousel').element('item').class()), bemEl.element('carousel').element('item').modifier('expanded').class(expanded)) },
        h(Button, { item: tab, index: index })))),
      h("div", { id: `${tabsId}-line`, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.element('line').class()), bemEl.element('line').modifier(`active`).class(lineActive)), bemEl.element('line').modifier(`inverted`).class(inverted)), bemEl.element('line').modifier(`animated`).class(animated)), bemEl.element('line').modifier(`vertical`).class(isVertical)) }))) : (tabs.map((tab, index) => h(Button, { item: tab, index: index }))),
    !hasCarousel ? (h("div", { id: `${tabsId}-border`, class: Object.assign(Object.assign(Object.assign({}, bemEl.element('border').class()), bemEl.element('border').modifier(`inverted`).class(inverted)), bemEl.element('border').modifier(`vertical`).class(isVertical)) })) : (''),
    !hasCarousel ? (h("div", { id: `${tabsId}-line`, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.element('line').class()), bemEl.element('line').modifier(`active`).class(lineActive)), bemEl.element('line').modifier(`inverted`).class(inverted)), bemEl.element('line').modifier(`animated`).class(animated)), bemEl.element('line').modifier(`vertical`).class(isVertical)) })) : ('')));
};

const balTabsCss = "@media (hover: hover)and (pointer: fine){.bal-tabs__nav__item.bal-focused{-webkit-box-shadow:var(--bal-focus-shadow-inset) !important;box-shadow:var(--bal-focus-shadow-inset) !important}}@media (hover: hover)and (pointer: fine){.bal-tabs__nav__item.bal-focused.bal-tabs__nav__item--inverted{-webkit-box-shadow:var(--bal-focus-shadow-inverted-inset) !important;box-shadow:var(--bal-focus-shadow-inverted-inset) !important}}@media (hover: hover)and (pointer: fine){.bal-tabs__nav__item.bal-focused{-webkit-box-shadow:var(--bal-focus-shadow-inset) !important;box-shadow:var(--bal-focus-shadow-inset) !important}}@media (hover: hover)and (pointer: fine){.bal-tabs__nav__item.bal-focused.bal-tabs__nav__item--inverted{-webkit-box-shadow:var(--bal-focus-shadow-inverted-inset) !important;box-shadow:var(--bal-focus-shadow-inverted-inset) !important}}.bal-tabs__nav{display:block;position:relative;-webkit-overflow-scrolling:touch;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (min-width: 769px),print{.bal-tabs__nav--vertical-col-one-quarter{-ms-flex:none;flex:none;width:25%}.bal-tabs__nav--vertical-col-one-third{-ms-flex:none;flex:none;width:33.3333%}.bal-tabs__nav--vertical-col-half{-ms-flex:none;flex:none;width:33.3333%}.bal-tabs__nav--vertical-col-two-thirds{-ms-flex:none;flex:none;width:66.6666%}.bal-tabs__nav--vertical-col-three-quarters{-ms-flex:none;flex:none;width:75%}.bal-tabs__nav--vertical-col-full{-ms-flex:none;flex:none;width:100%}}.bal-tabs__nav--vertical{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.bal-tabs__nav--full-height{height:100%}.bal-tabs__nav--expanded{display:-ms-flexbox;display:flex}.bal-tabs__nav__carousel__item--expanded{-ms-flex:1;flex:1;width:5rem;min-width:5rem}.bal-tabs__nav__border{position:absolute;background:var(--bal-tabs-tab-nav-border-background);border-radius:var(--bal-tabs-tab-nav-border-radius);height:var(--bal-border-width-normal);left:1px;right:1px;bottom:0}.bal-tabs__nav__border--vertical{width:var(--bal-border-width-normal);height:100%;top:0;right:auto}.bal-tabs__nav__border--inverted{background:var(--bal-tabs-tab-nav-border-background-inverted)}.bal-tabs__nav__line{position:absolute;background:var(--bal-tabs-tab-nav-line-background);border-radius:var(--bal-tabs-tab-nav-line-radius);left:1px;z-index:1}.bal-tabs__nav__line:not(.bal-tabs__nav__line--vertical){bottom:0;min-width:5rem}.bal-tabs__nav__line--vertical{top:0;min-height:2.5rem}.bal-tabs__nav__line:not(.bal-tabs__nav__line--vertical).bal-tabs__nav__line--active{height:var(--bal-border-width-normal)}.bal-tabs__nav__line--vertical.bal-tabs__nav__line--active{width:var(--bal-border-width-normal)}.bal-tabs__nav__line--animated{will-change:min-width,width,min-height,height,transform;-webkit-transition:all var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:all var(--bal-animation-transition-duration) var(--bal-animation-transition-easing)}.bal-tabs__nav__line--inverted{background:var(--bal-tabs-tab-nav-line-background-inverted)}@media (hover: hover)and (pointer: fine){.bal-tabs__nav__item.bal-focused{-webkit-box-shadow:var(--bal-focus-shadow-inset) !important;box-shadow:var(--bal-focus-shadow-inset) !important}}@media (hover: hover)and (pointer: fine){.bal-tabs__nav__item.bal-focused.bal-tabs__nav__item--inverted{-webkit-box-shadow:var(--bal-focus-shadow-inverted-inset) !important;box-shadow:var(--bal-focus-shadow-inverted-inset) !important}}.bal-tabs__nav__item{display:-ms-flexbox;display:flex;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-direction:column;flex-direction:column;-ms-flex-preferred-size:1rem;flex-basis:1rem;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-decoration:none;cursor:default;gap:.5rem;padding:.25rem .75rem;border-radius:var(--bal-tabs-tab-button-radius);min-width:3rem;min-height:3rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;background-color:rgba(0,0,0,0);border:unset}@media screen and (min-width: 769px),print{.bal-tabs__nav__item{-ms-flex-direction:row;flex-direction:row;min-height:3.5rem}}.bal-tabs__nav__item--accordion{-ms-flex-direction:row;flex-direction:row}.bal-tabs__nav__item--hidden{display:none !important;visibility:hidden !important}.bal-tabs__nav__item--expanded{-ms-flex:1;flex:1;width:5rem;min-width:5rem}.bal-tabs__nav__item--icon-position-vertical{-ms-flex-direction:column;flex-direction:column}.bal-tabs__nav__item--clickable{cursor:pointer;pointer-events:all}@media (hover: hover)and (pointer: fine){.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled):hover .bal-tabs__nav__item__label{color:var(--bal-tabs-tab-button-label-text-color-hover)}.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled):hover .bal-tabs__nav__item__icon svg,.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled):hover .bal-tabs__nav__item__icon g,.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled):hover .bal-tabs__nav__item__icon path,.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled):hover .bal-tabs__nav__item__icon circle{fill:var(--bal-tabs-tab-button-icon-text-color-hover)}}.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled):active .bal-tabs__nav__item__label{color:var(--bal-tabs-tab-button-label-text-color-active)}.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled):active .bal-tabs__nav__item__icon svg,.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled):active .bal-tabs__nav__item__icon g,.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled):active .bal-tabs__nav__item__icon path,.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled):active .bal-tabs__nav__item__icon circle{fill:var(--bal-tabs-tab-button-icon-text-color-active)}@media (hover: hover)and (pointer: fine){.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled).bal-tabs__nav__item--inverted:hover .bal-tabs__nav__item__label{color:var(--bal-tabs-tab-button-label-text-color-inverted-hover)}.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled).bal-tabs__nav__item--inverted:hover .bal-tabs__nav__item__icon svg,.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled).bal-tabs__nav__item--inverted:hover .bal-tabs__nav__item__icon g,.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled).bal-tabs__nav__item--inverted:hover .bal-tabs__nav__item__icon path,.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled).bal-tabs__nav__item--inverted:hover .bal-tabs__nav__item__icon circle{fill:var(--bal-tabs-tab-button-icon-text-color-inverted-hover)}}.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled).bal-tabs__nav__item--inverted:active .bal-tabs__nav__item__label{color:var(--bal-tabs-tab-button-label-text-color-inverted-active)}.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled).bal-tabs__nav__item--inverted:active .bal-tabs__nav__item__icon svg,.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled).bal-tabs__nav__item--inverted:active .bal-tabs__nav__item__icon g,.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled).bal-tabs__nav__item--inverted:active .bal-tabs__nav__item__icon path,.bal-tabs__nav__item:not(.bal-tabs__nav__item--disabled).bal-tabs__nav__item--inverted:active .bal-tabs__nav__item__icon circle{fill:var(--bal-tabs-tab-button-icon-text-color-inverted-active)}.bal-tabs__nav__item--vertical{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;min-height:2.5rem;padding:.5rem 1rem}.bal-tabs__nav__item--spaceless.bal-tabs__nav__item--first{padding-left:0}.bal-tabs__nav__item--spaceless.bal-tabs__nav__item--last{padding-right:0}.bal-tabs__nav__item--context-meta{min-height:3rem;height:3rem}.bal-tabs__nav__item--context-navigation{min-height:3rem;height:3rem}@media screen and (min-width: 1024px){.bal-tabs__nav__item--context-navigation{min-height:4rem;height:4rem}}@media screen and (min-width: 1280px){.bal-tabs__nav__item--context-navigation{min-height:4rem;height:4rem}}@media screen and (min-width: 1440px){.bal-tabs__nav__item--context-navigation{min-height:5rem;height:5rem}}@media (hover: hover)and (pointer: fine){.bal-tabs__nav__item.bal-focused{-webkit-box-shadow:var(--bal-focus-shadow-inset) !important;box-shadow:var(--bal-focus-shadow-inset) !important}}@media (hover: hover)and (pointer: fine){.bal-tabs__nav__item.bal-focused.bal-tabs__nav__item--inverted{-webkit-box-shadow:var(--bal-focus-shadow-inverted-inset) !important;box-shadow:var(--bal-focus-shadow-inverted-inset) !important}}.bal-tabs__nav__item__icon{position:relative}.bal-tabs__nav__item__icon__bubble{position:absolute;right:-12px;top:-4px}@media screen and (min-width: 769px),print{.bal-tabs__nav__item__icon__bubble{right:-10px;top:-4px}}@media (hover: hover)and (pointer: fine){.bal-tabs__nav__item.bal-focused{-webkit-box-shadow:var(--bal-focus-shadow-inset) !important;box-shadow:var(--bal-focus-shadow-inset) !important}}@media (hover: hover)and (pointer: fine){.bal-tabs__nav__item.bal-focused.bal-tabs__nav__item--inverted{-webkit-box-shadow:var(--bal-focus-shadow-inverted-inset) !important;box-shadow:var(--bal-focus-shadow-inverted-inset) !important}}.bal-tabs__nav__item__label{display:block;position:relative;font-family:var(--bal-font-family-title);font-weight:var(--bal-weight-bold);font-size:var(--bal-size-normal);line-height:var(--bal-body-line-height);text-align:center;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--bal-tabs-tab-label-text-color)}.bal-tabs__nav__item__label--disabled{color:var(--bal-tabs-tab-label-text-color-disabled)}.bal-tabs__nav__item__label--inverted{font-family:var(--bal-font-family-text);color:var(--bal-tabs-tab-label-text-color-inverted)}.bal-tabs__nav__item__label--inverted.bal-tabs__nav__item__label--disabled{color:var(--bal-tabs-tab-label-text-color-inverted-disabled)}.bal-tabs__nav__item__label--inverted{font-weight:var(--bal-weight-regular);letter-spacing:.1085px}.bal-tabs__nav__item__label--inverted.bal-tabs__nav__item__label--active{font-weight:var(--bal-weight-bold);letter-spacing:0}.bal-tabs__nav__item__label__bubble{position:absolute;right:-8px;top:-8px}.bal-tabs__nav__item__label--vertical{text-align:left;width:auto;white-space:normal}.bal-tabs__nav__item__label--context-meta{font-size:var(--bal-size-small)}@media (hover: hover)and (pointer: fine){.bal-tabs__nav__item.bal-focused{-webkit-box-shadow:var(--bal-focus-shadow-inset) !important;box-shadow:var(--bal-focus-shadow-inset) !important}}@media (hover: hover)and (pointer: fine){.bal-tabs__nav__item.bal-focused.bal-tabs__nav__item--inverted{-webkit-box-shadow:var(--bal-focus-shadow-inverted-inset) !important;box-shadow:var(--bal-focus-shadow-inverted-inset) !important}}:root{--bal-tabs-tab-nav-border-background:var(--bal-color-border-grey);--bal-tabs-tab-nav-border-background-inverted:var(--bal-color-border-white);--bal-tabs-tab-nav-line-background:var(--bal-color-border-primary);--bal-tabs-tab-nav-line-background-inverted:var(--bal-color-border-white);--bal-tabs-tab-button-radius:var(--bal-radius-normal);--bal-tabs-tab-nav-border-radius:var(--bal-radius-rounded);--bal-tabs-tab-nav-line-radius:var(--bal-radius-rounded);--bal-tabs-tab-button-label-text-color-hover:var(--bal-color-light-blue-5);--bal-tabs-tab-button-icon-text-color-hover:var(--bal-color-light-blue-5);--bal-tabs-tab-button-label-text-color-active:var(--bal-color-primary-6);--bal-tabs-tab-button-icon-text-color-active:var(--bal-color-primary-6);--bal-tabs-tab-button-label-text-color-inverted-hover:var(--bal-color-light-blue-2);--bal-tabs-tab-button-icon-text-color-inverted-hover:var(--bal-color-light-blue-2);--bal-tabs-tab-button-label-text-color-inverted-active:var(--bal-color-text-info);--bal-tabs-tab-button-icon-text-color-inverted-active:var(--bal-color-text-info);--bal-tabs-tab-label-text-color:var(--bal-color-text-primary);--bal-tabs-tab-label-text-color-disabled:var(--bal-color-text-grey);--bal-tabs-tab-label-text-color-inverted:var(--bal-color-text-white);--bal-tabs-tab-label-text-color-inverted-disabled:var(--bal-color-text-primary-light)}.bal-tabs{display:block;min-width:0}.bal-tabs--fullwidth{width:100%}.bal-tabs--vertical{display:block}@media screen and (min-width: 769px),print{.bal-tabs--vertical{display:-ms-flexbox;display:flex}}@media screen and (min-width: 769px),print{.bal-tabs--navbar{height:100%}}.bal-tab-item{width:100%;display:none}.bal-tab-item--active{display:block}.bal-tabs__tabs__content{width:100%}.bal-tabs--animated{-webkit-transition:all var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:all var(--bal-animation-transition-duration) var(--bal-animation-transition-easing)}.bal-tabs--animated .bal-tabs__tabs__content{-webkit-transition:max-height var(--bal-animation-transition-duration) var(--bal-animation-transition-easing);transition:max-height var(--bal-animation-transition-duration) var(--bal-animation-transition-easing)}.bal-tabs--accordion .bal-tabs__tabs__content{overflow:hidden;will-change:max-height}.bal-tabs--accordion.bal-tabs--collapsing .bal-tabs__tabs__content{max-height:0 !important}.bal-tabs--accordion.bal-tabs--collapsed .bal-tabs__tabs__content{display:none}.bal-tabs--accordion.bal-tabs--expanding .bal-tabs__tabs__content{max-height:0}@media (prefers-reduced-motion: reduce){.bal-tabs--accordion .bal-tabs,.bal-tabs--accordion .bal-tabs__tabs__content{-webkit-transition:none !important;transition:none !important}}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balChange = createEvent(this, "balChange", 7);
    this.balWillAnimate = createEvent(this, "balWillAnimate", 7);
    this.balDidAnimate = createEvent(this, "balDidAnimate", 7);
    this.tabsId = `bal-tabs-${TabsIds++}`;
    this.mutationObserverActive = true;
    this.getOptions = () => {
      if (this.options.length > 0) {
        return [...this.options.map(newBalTabOption)];
      }
      else {
        return Promise.all(this.items.map(value => value.getOptions()));
      }
    };
    this.updateStore = (newStore) => {
      if (!areArraysEqual(this.store, newStore)) {
        this.store = newStore;
      }
    };
    this.setActiveItem = () => {
      const activeTabs = this.store.filter(t => t.active);
      if (activeTabs.length > 0) {
        const firstActiveTab = activeTabs[0];
        this.value = firstActiveTab.value;
      }
      else {
        if (!this.accordion && this.value === undefined && this.store.length > 0) {
          const firstStep = this.store[0];
          this.value = firstStep.value;
        }
      }
    };
    this.setActiveContent = () => {
      if (this.options.length === 0) {
        this.items.forEach(item => item.setActive(this.isActive(item)));
      }
    };
    this.getLineSize = (element, padding) => {
      if (element) {
        const isVertical = this.isVertical();
        if (isVertical) {
          return element.clientHeight;
        }
        else {
          const clientWidth = element.clientWidth;
          if (this.expanded) {
            return clientWidth;
          }
          const paddingX = padding.left + padding.right;
          return clientWidth - paddingX;
        }
      }
      return 0;
    };
    this.getOffset = (element, padding) => {
      const isVertical = this.isVertical();
      if (isVertical) {
        if (element.offsetTop) {
          return element.offsetTop;
        }
      }
      else {
        if (element.offsetLeft) {
          if (this.expanded) {
            return element.offsetLeft;
          }
          return element.offsetLeft + padding.left;
        }
        const carouselItem = element.closest('bal-carousel-item');
        if (carouselItem) {
          if (this.expanded) {
            return carouselItem.offsetLeft;
          }
          return carouselItem.offsetLeft + padding.left;
        }
      }
      return 0;
    };
    this.animateLine = async () => {
      if (!this.shouldAnimate()) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      raf(async () => {
        await deepReady(this.el, true);
        this.currentRaf = raf(async () => {
          const target = this.getTargetElement(this.value);
          if (!target) {
            return;
          }
          if (target.getAttribute('target') === '_blank') {
            return;
          }
          const padding = getComputedPadding(target);
          const size = this.getLineSize(target, padding);
          const offset = this.getOffset(target, padding);
          const lineElement = this.getLineElement();
          if (lineElement) {
            const isVertical = this.isVertical();
            this.balWillAnimate.emit(this.value);
            const waitForTransition = transitionEndAsync(lineElement, 300);
            if (isVertical) {
              lineElement.style.setProperty('transform', `translateY(${offset}px)`);
              lineElement.style.setProperty('min-height', `${size}px`);
              lineElement.style.setProperty('height', `${size}px`);
              lineElement.style.removeProperty('min-width');
              lineElement.style.removeProperty('width');
            }
            else {
              lineElement.style.setProperty('transform', `translateX(${offset}px)`);
              lineElement.style.setProperty('min-width', `${size}px`);
              lineElement.style.setProperty('width', `${size}px`);
              lineElement.style.removeProperty('min-height');
              lineElement.style.removeProperty('height');
              const borderElement = this.getBorderElement();
              const carouselElement = this.getCarouselElement();
              if (borderElement && carouselElement) {
                const containerMaxWidth = carouselElement.clientWidth;
                borderElement.style.setProperty('width', `${containerMaxWidth}px`);
              }
              await waitForTransition;
              this.balDidAnimate.emit(this.value);
            }
          }
        });
      });
    };
    this.toggleAccordionState = (initialUpdate = false) => {
      if (this.accordion) {
        if (this.isAccordionOpen) {
          this.collapseAccordion(initialUpdate);
        }
        else {
          this.expandAccordion(initialUpdate);
        }
      }
    };
    this.expandAccordion = (initialUpdate = false) => {
      this.isAccordionOpen = true;
      const { contentEl, contentElWrapper } = this;
      if (initialUpdate || contentEl === undefined || contentElWrapper === undefined) {
        this.accordionState = 4;
        return;
      }
      if (this.accordionState === 4) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        raf(() => {
          this.accordionState = 8;
          this.currentRaf = raf(async () => {
            const contentHeight = contentElWrapper.offsetHeight;
            const waitForTransition = transitionEndAsync(contentEl, 300);
            contentEl.style.setProperty('max-height', `${contentHeight}px`);
            this.balWillAnimate.emit(this.value);
            await waitForTransition;
            this.accordionState = 4;
            contentEl.style.removeProperty('max-height');
            this.balDidAnimate.emit(this.value);
          });
        });
      }
      else {
        this.accordionState = 4;
        this.balWillAnimate.emit(this.value);
        this.balDidAnimate.emit(this.value);
      }
    };
    this.collapseAccordion = (initialUpdate = false) => {
      this.isAccordionOpen = false;
      const { contentEl } = this;
      if (initialUpdate || contentEl === undefined) {
        this.accordionState = 1;
        return;
      }
      if (this.accordionState === 1) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        this.currentRaf = raf(async () => {
          const contentHeight = contentEl.offsetHeight;
          contentEl.style.setProperty('max-height', `${contentHeight}px`);
          raf(async () => {
            const waitForTransition = transitionEndAsync(contentEl, 300);
            this.accordionState = 2;
            this.balWillAnimate.emit(this.value);
            await waitForTransition;
            this.accordionState = 1;
            contentEl.style.removeProperty('max-height');
            this.balDidAnimate.emit(this.value);
          });
        });
      }
      else {
        this.accordionState = 1;
        this.balWillAnimate.emit(this.value);
        this.balDidAnimate.emit(this.value);
      }
    };
    this.shouldAnimate = () => {
      if (typeof window === 'undefined') {
        return false;
      }
      return this.animated;
    };
    this.onOptionChange = async () => {
      try {
        const options = await this.getOptions();
        this.updateStore(options);
        this.setActiveItem();
        this.setActiveContent();
        this.animateLine();
      }
      catch (e) {
        console.warn('[WARN] - Could not read tab options');
      }
    };
    this.onSelectTab = async (ev, step) => {
      if (step.prevent || step.disabled || !this.clickable) {
        stopEventBubbling(ev);
      }
      if (!step.disabled && this.clickable) {
        if (this.accordion) {
          if (step.value === this.value) {
            this.toggleAccordionState();
          }
          else {
            this.expandAccordion();
          }
        }
        if (step.navigate) {
          step.navigate.emit(ev);
        }
        if (step.value !== this.value) {
          this.balChange.emit(step.value);
          await this.select(step);
        }
      }
    };
    this.isAccordionOpen = false;
    this.accordionState = 1;
    this.isNavbarOpen = false;
    this.inNavbar = false;
    this.inNavbarLight = false;
    this.isMobile = balBreakpoints.isMobile;
    this.isTablet = balBreakpoints.isTablet;
    this.store = [];
    this.animated = true;
    this.float = 'left';
    this.fullwidth = false;
    this.accordion = false;
    this.overflow = true;
    this.options = [];
    this.context = undefined;
    this.iconPosition = 'horizontal';
    this.expanded = false;
    this.spaceless = false;
    this.clickable = true;
    this.border = false;
    this.inverted = false;
    this.debounce = 0;
    this.vertical = false;
    this.verticalColSize = 'one-third';
    this.selectOnMobile = false;
    this.value = undefined;
  }
  createLogger(log) {
    this.log = log;
  }
  async optionChanged() {
    this.onOptionChange();
    this.mutationObserverActive = this.options === undefined;
  }
  debounceChanged() {
    this.balChange = debounceEvent(this.balChange, this.debounce);
  }
  async valueChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.onOptionChange();
    }
  }
  connectedCallback() {
    this.inNavbar = hasParent('bal-navbar', this.el);
    if (this.inNavbar) {
      const parentNavbar = this.el.closest('bal-navbar');
      if (parentNavbar) {
        this.inNavbarLight = parentNavbar.light;
      }
    }
    this.debounceChanged();
    this.mutationObserverActive = this.options === undefined || this.options.length < 1;
    if (this.accordion) {
      const inNavMenuBar = hasParent('bal-nav-menu-bar', this.el);
      if (inNavMenuBar) {
        this.isAccordionOpen = false;
      }
      else {
        const isAccordionOpen = this.value !== undefined && this.value.length > 0;
        if (isAccordionOpen) {
          this.expandAccordion(true);
        }
        else {
          this.collapseAccordion(true);
        }
      }
    }
  }
  componentDidLoad() {
    this.onOptionChange();
  }
  mutationListener() {
    this.onOptionChange();
  }
  breakpointListener(breakpoints) {
    this.isMobile = breakpoints.mobile;
    this.isTablet = breakpoints.tablet;
    this.animateLine();
  }
  resizeListener() {
    this.animateLine();
  }
  listenToWillAnimate(ev) {
    isChildOfEventTarget(ev, this.el, () => this.animateLine());
  }
  listenToDidAnimate(ev) {
    isChildOfEventTarget(ev, this.el, () => this.animateLine());
    this.isUsedInNavbar(ev);
  }
  isUsedInNavbar(ev) {
    const target = ev.target;
    const parentNavbar = target.closest('bal-navbar');
    const isNavbarOpen = ev.target;
    if (parentNavbar && isDescendant(parentNavbar, this.el)) {
      this.isNavbarOpen = isNavbarOpen;
    }
  }
  async configChanged(state) {
    this.animated = state.animated;
  }
  async select(tab) {
    this.value = tab.value;
  }
  async getOptionByValue(value) {
    const options = this.store;
    return options.find(option => option.value === value);
  }
  async renderLine() {
    this.animateLine();
  }
  async closeAccordion() {
    console.log('in collapseAccordionGlobal');
    if (this.isAccordionOpen) {
      this.collapseAccordion();
    }
  }
  get items() {
    return Array.from(this.el.querySelectorAll(`#${this.tabsId} > bal-tab-item`));
  }
  isActive(step) {
    return step.value === this.value;
  }
  parseVertical() {
    if (this.vertical === 'true' || this.vertical === '') {
      return true;
    }
    if (this.vertical === 'false' || this.vertical === undefined) {
      return false;
    }
    if (this.vertical === 'mobile') {
      return this.isMobile;
    }
    if (this.vertical === 'tablet') {
      return this.isTablet || this.isMobile;
    }
    return this.vertical;
  }
  isVertical() {
    const isVertical = this.parseVertical();
    const isMobile = this.isMobile;
    const isTablet = this.isTablet;
    const isTouch = isMobile || isTablet;
    return isVertical || (isTouch && this.inNavbar);
  }
  getTargetElement(value) {
    const selector = `[data-tabs="${this.tabsId}"]`;
    const elements = Array.from(this.el.querySelectorAll(selector));
    return elements.filter(element => element.getAttribute('data-value') == value)[0];
  }
  getLineElement() {
    return this.el.querySelector(`#${this.tabsId}-line`);
  }
  getBorderElement() {
    return this.el.querySelector(`#${this.tabsId}-border`);
  }
  getCarouselElement() {
    return this.el.querySelector(`#${this.tabsId}-carousel`);
  }
  render() {
    const block = BEM.block('tabs');
    const isMobile = this.isMobile;
    const isTablet = this.isTablet;
    const isTouch = isMobile || isTablet;
    const isInverted = (this.inNavbar && !isTouch && !this.inNavbarLight) || (!this.inNavbar && this.inverted);
    const isVertical = this.isVertical();
    const hasCarousel = !isVertical && this.overflow && !this.expanded;
    const isSelect = isMobile && this.selectOnMobile;
    const tabs = this.store.map(tab => (Object.assign(Object.assign({}, tab), { active: tab.value === this.value })));
    const expanded = this.accordionState === 4 || this.accordionState === 8;
    const contentPart = expanded ? 'content expanded' : 'content';
    return (h(Host, { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('navbar').class(this.inNavbar)), block.modifier('vertical').class(isVertical)), block.modifier('fullwidth').class(this.expanded || this.fullwidth)), block.modifier('accordion').class(this.accordion)), block.modifier('animated').class(this.animated)), block.modifier('expanding').class(this.accordionState === 8)), block.modifier('expanded').class(this.accordionState === 4)), block.modifier('collapsing').class(this.accordionState === 2)), block.modifier('collapsed').class(this.accordionState === 1)), "data-value": this.store
        .filter(t => this.isActive(t))
        .map(t => t.value)
        .join(','), "data-label": this.store
        .filter(t => this.isActive(t))
        .map(t => t.label)
        .join(',') }, isSelect ? (h(TabSelect, { value: this.value, items: tabs, onSelectTab: this.onSelectTab })) : (h(TabNav, { items: tabs, tabsId: this.tabsId, onSelectTab: this.onSelectTab, clickable: this.clickable, accordion: this.accordion, isAccordionOpen: this.isAccordionOpen, lineActive: this.value !== undefined, inverted: isInverted, animated: this.animated, context: this.context, border: this.border, spaceless: this.spaceless, expanded: this.expanded, isMobile: isMobile, isTouch: isTouch, isVertical: isVertical, inNavbar: this.inNavbar, hasCarousel: hasCarousel, iconPosition: this.iconPosition, verticalColSize: this.verticalColSize })), h("div", { role: "region", part: contentPart, ref: contentEl => (this.contentEl = contentEl), class: Object.assign({}, block.element('tabs').element('content').class()) }, h("div", { id: this.tabsId, class: Object.assign({}, block.element('tabs').element('content').element('wrapper').class()), ref: contentElWrapper => (this.contentElWrapper = contentElWrapper) }, h("slot", null)))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "options": ["optionChanged"],
    "debounce": ["debounceChanged"],
    "value": ["valueChanged"]
  }; }
};
__decorate([
  Logger('bal-tabs')
], Tabs.prototype, "createLogger", null);
__decorate([
  ListenToMutation({ tags: ['bal-tabs', 'bal-tab-item'] })
], Tabs.prototype, "mutationListener", null);
__decorate([
  ListenToBreakpoints()
], Tabs.prototype, "breakpointListener", null);
__decorate([
  ListenToResize()
], Tabs.prototype, "resizeListener", null);
__decorate([
  ListenToConfig()
], Tabs.prototype, "configChanged", null);
let TabsIds = 0;
Tabs.style = {
  css: balTabsCss
};

export { TabItem as bal_tab_item, Tabs as bal_tabs };
