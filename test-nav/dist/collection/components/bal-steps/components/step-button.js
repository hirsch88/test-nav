import { h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
import { StepIcon } from './step-icon';
import { StepLabel } from './step-label';
export const StepButton = ({ item, isMobile, clickable, onSelectTab }) => {
  const bemEl = BEM.block('steps').element('nav').element('item');
  if (item.hidden) {
    return;
  }
  return (h("a", { role: "tab", class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, bemEl.class()), bemEl.modifier('done').class(item.done)), bemEl.modifier('active').class(item.active)), bemEl.modifier('failed').class(item.failed)), bemEl.modifier('disabled').class(item.disabled)), bemEl.modifier('clickable').class(clickable)), bemEl.modifier('passed').class(item.passed)), { 'bal-focusable': !item.disabled && !item.hidden }), "data-label": item.label, "data-value": item.value, "data-index": item.index, "data-testid": "bal-steps-option", "aria-disabled": `${item.disabled}`, href: item.href === '' ? 'javascript:;' : item.href, target: item.target, onClick: (ev) => onSelectTab(ev, item) }, h(StepIcon, { item: item, isMobile: isMobile }), h(StepLabel, { item: item })));
};
