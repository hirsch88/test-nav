import { h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export const TabLabel = ({ item, inverted, hasBubble, isVertical, context }) => {
  const bemEl = BEM.block('tabs').element('nav').element('item').element('label');
  return (h("span", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.class()), bemEl.modifier('inverted').class(inverted)), bemEl.modifier('active').class(item.active)), bemEl.modifier('disabled').class(item.disabled)), bemEl.modifier('vertical').class(isVertical)), bemEl.modifier(`context-${context}`).class(context !== undefined)), "data-testid": "bal-tabs-item-label" }, item.label, hasBubble ? (h("bal-badge", { class: Object.assign({}, bemEl.element('bubble').class()), size: "small" }, item.bubble)) : ('')));
};
