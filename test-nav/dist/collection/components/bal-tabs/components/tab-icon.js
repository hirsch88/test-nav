import { h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export const TabIcon = ({ item, inverted, accordion, isAccordionOpen, isMobile, hasBubble, }) => {
  const bemEl = BEM.block('tabs').element('nav').element('item').element('icon');
  let iconColor = item.disabled ? 'grey' : 'primary';
  if (inverted) {
    iconColor = item.disabled ? 'primary-light' : 'white';
  }
  return (h("span", { class: Object.assign(Object.assign(Object.assign({}, bemEl.class()), bemEl.modifier('active').class(item.active)), bemEl.modifier('disabled').class(item.disabled)) }, h("bal-icon", { size: isMobile || accordion ? 'small' : '', name: accordion ? 'nav-go-down' : item.icon, color: iconColor, turn: accordion && isAccordionOpen === true && item.active }), hasBubble ? (h("bal-badge", { class: Object.assign({}, bemEl.element('bubble').class()), size: "small" }, item.bubble)) : ('')));
};
