import { h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
import { TabIcon } from './tab-icon';
import { TabLabel } from './tab-label';
export const TabButton = ({ item, tabsId, isFirst, isLast, isMobile, isVertical, accordion, isAccordionOpen, inverted, expanded, spaceless, clickable, iconPosition, context, onSelectTab, }) => {
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
  return (h(TagType, Object.assign({ id: `${tabsId}-button-${TabButtonIds++}`, role: "tab", class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.class()), bemEl.modifier('active').class(item.active)), bemEl.modifier('disabled').class(item.disabled)), bemEl.modifier('clickable').class(clickable)), bemEl.modifier('accordion').class(accordion)), bemEl.modifier('inverted').class(inverted)), bemEl.modifier('expanded').class(expanded)), bemEl.modifier('spaceless').class(spaceless)), bemEl.modifier('first').class(isFirst)), bemEl.modifier('last').class(isLast)), bemEl.modifier('passed').class(item.passed)), bemEl.modifier('vertical').class(isVertical)), bemEl.modifier(`context-${context}`).class(context !== undefined)), bemEl.modifier(`icon-position-${iconPosition}`).class(iconPosition !== 'horizontal')), { 'bal-focusable': !item.disabled && !item.hidden }), draggable: false, "data-tabs": tabsId, "data-label": item.label, "data-value": item.value, "data-index": item.index, "data-testid": "bal-tabs-item", "aria-selected": item.active ? 'true' : 'false', "aria-disabled": `${item.disabled}`, "aria-label": item.label, "aria-controls": item.tabPanelID }, attrs, { onClick: (ev) => onSelectTab(ev, item) }), item.icon ? (h(TabIcon, { accordion: false, item: item, isMobile: isMobile, hasBubble: hasIconBubble, inverted: inverted })) : (''), h(TabLabel, { item: item, isMobile: isMobile, isVertical: isVertical, hasBubble: hasLabelBubble, inverted: inverted, context: context }), accordion && !item.href ? (h(TabIcon, { accordion: accordion, isAccordionOpen: isAccordionOpen, item: item, isMobile: isMobile, hasBubble: hasAccordionIconBubble, inverted: inverted })) : ('')));
};
let TabButtonIds = 0;
