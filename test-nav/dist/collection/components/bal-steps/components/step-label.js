import { h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export const StepLabel = ({ item }) => {
  const bemEl = BEM.block('steps').element('nav').element('item').element('label');
  return (h("span", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.class()), bemEl.modifier('done').class(item.done)), bemEl.modifier('active').class(item.active)), bemEl.modifier('failed').class(item.failed)), bemEl.modifier('disabled').class(item.disabled)), "data-testid": "bal-steps-option-label" }, item.label));
};
