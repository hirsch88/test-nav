import { h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export const TabControl = ({ value, items, onControlChange }) => {
  const block = BEM.block('carousel');
  const controls = block.element('controls');
  return (h("div", { class: Object.assign(Object.assign({}, controls.class()), controls.modifier('tabs').class()) }, h("bal-card", null, h("bal-card-content", null, items.map(item => (h("bal-button", { expanded: true, color: value === item.value ? 'primary' : 'light', onClick: () => onControlChange(item) }, item.label)))))));
};
