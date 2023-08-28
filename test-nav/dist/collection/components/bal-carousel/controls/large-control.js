import { h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export const LargeControl = ({ isFirst, isLast, inverted, areControlsHidden, onNextClick, onPreviousClick, leftControlTitle, rightControlTitle, }) => {
  const block = BEM.block('carousel');
  const controls = block.element('controls');
  const button = controls.element('button');
  return (h("div", { "data-mutation": "false", class: Object.assign(Object.assign({}, controls.class()), controls.modifier('large').class()) }, h("bal-button", { class: Object.assign(Object.assign(Object.assign({}, button.class()), button.modifier('left').class()), button.modifier('hidden').class(isFirst && areControlsHidden)), square: true, icon: "nav-go-left", rounded: true, inverted: inverted, onClick: () => onPreviousClick(), disabled: isFirst, "aria-hidden": isFirst && areControlsHidden ? 'true' : null, "data-testid": "bal-carousel-control-left", title: leftControlTitle }), h("bal-button", { class: Object.assign(Object.assign(Object.assign({}, button.class()), button.modifier('right').class()), button.modifier('hidden').class(isLast && areControlsHidden)), square: true, icon: "nav-go-right", rounded: true, inverted: inverted, onClick: () => onNextClick(), disabled: isLast, "aria-hidden": isLast && areControlsHidden ? 'true' : null, "data-testid": "bal-carousel-control-right", title: rightControlTitle })));
};
