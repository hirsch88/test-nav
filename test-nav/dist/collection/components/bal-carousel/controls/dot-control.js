import { h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export const DotControl = ({ value, items, onControlChange }) => {
  const block = BEM.block('carousel');
  const controls = block.element('controls');
  const onChange = (ev) => {
    let selectedValue = ev.detail - 1;
    if (selectedValue < 0) {
      selectedValue = 0;
    }
    if (selectedValue >= items.length) {
      selectedValue = items.length - 1;
    }
    onControlChange(items[selectedValue]);
  };
  return (h("div", { class: Object.assign(Object.assign({}, controls.class()), controls.modifier('tabs').class()) }, h("bal-pagination", { interface: "small", value: value + 1, totalPages: items.length, onBalChange: onChange })));
};
