import { h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export const StepIcon = ({ item, isMobile }) => {
  const bemEl = BEM.block('steps').element('nav').element('item').element('icon');
  return (h("span", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.class()), bemEl.modifier('done').class(item.done)), bemEl.modifier('active').class(item.active)), bemEl.modifier('failed').class(item.failed)), bemEl.modifier('disabled').class(item.disabled)) }, h("bal-icon", { style: { display: item.done ? 'block' : 'none' }, size: isMobile ? 'small' : '', color: item.disabled ? 'grey' : 'white', name: "check" }), h("span", { style: { display: !item.done ? 'block' : 'none' } }, item.failed ? '!' : (item.index || 0) + 1)));
};
