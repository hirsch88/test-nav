import { h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
import { stopEventBubbling } from '../../../utils/form-input';
import { TabButton } from './tab-button';
export const TabNav = ({ items, tabsId, hasCarousel, isVertical, inNavbar, isMobile, isTouch, lineActive, border, accordion, isAccordionOpen, inverted, clickable, animated, spaceless, expanded, verticalColSize, iconPosition, context, onSelectTab, }) => {
  const bemEl = BEM.block('tabs').element('nav');
  const tabs = items.filter(tab => !tab.hidden);
  const isFullHeight = inNavbar && !isTouch;
  const Button = ({ item, index }) => (h(TabButton, { item: item, tabsId: tabsId, isFirst: index === 0, isLast: index === tabs.length - 1, isMobile: isMobile, isVertical: isVertical, iconPosition: iconPosition, spaceless: spaceless, inverted: inverted, accordion: accordion, isAccordionOpen: isAccordionOpen, context: context, expanded: expanded, clickable: clickable && !item.disabled, onSelectTab: onSelectTab }));
  return (h("div", { role: "tablist", id: `${tabsId}-nav`, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.class()), bemEl.modifier(`full-height`).class(isFullHeight)), bemEl.modifier(`border`).class(border)), bemEl.modifier(`animated`).class(animated)), bemEl.modifier(`vertical`).class(isVertical)), bemEl.modifier(`expanded`).class(expanded && !isVertical)), bemEl.modifier(`vertical-col-${verticalColSize}`).class(isVertical)) }, hasCarousel ? (h("bal-carousel", { id: `${tabsId}-carousel`, class: Object.assign({}, bemEl.element('carousel').class()), fullHeight: isFullHeight, border: border, inverted: inverted, controls: "small", "items-per-view": "auto", steps: 3, onBalChange: stopEventBubbling }, tabs.map((tab, index) => (h("bal-carousel-item", { class: Object.assign(Object.assign({}, bemEl.element('carousel').element('item').class()), bemEl.element('carousel').element('item').modifier('expanded').class(expanded)) }, h(Button, { item: tab, index: index })))), h("div", { id: `${tabsId}-line`, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.element('line').class()), bemEl.element('line').modifier(`active`).class(lineActive)), bemEl.element('line').modifier(`inverted`).class(inverted)), bemEl.element('line').modifier(`animated`).class(animated)), bemEl.element('line').modifier(`vertical`).class(isVertical)) }))) : (tabs.map((tab, index) => h(Button, { item: tab, index: index }))), !hasCarousel ? (h("div", { id: `${tabsId}-border`, class: Object.assign(Object.assign(Object.assign({}, bemEl.element('border').class()), bemEl.element('border').modifier(`inverted`).class(inverted)), bemEl.element('border').modifier(`vertical`).class(isVertical)) })) : (''), !hasCarousel ? (h("div", { id: `${tabsId}-line`, class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.element('line').class()), bemEl.element('line').modifier(`active`).class(lineActive)), bemEl.element('line').modifier(`inverted`).class(inverted)), bemEl.element('line').modifier(`animated`).class(animated)), bemEl.element('line').modifier(`vertical`).class(isVertical)) })) : ('')));
};
