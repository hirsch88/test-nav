import { h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
export const SmallControl = ({ isFirst, isLast, inverted, leftControlTitle, rightControlTitle, onNextClick, onPreviousClick, }) => {
  const block = BEM.block('carousel');
  const controls = block.element('controls');
  const button = controls.element('button');
  return (h("div", { class: Object.assign(Object.assign({}, controls.class()), controls.modifier('small').class()) }, h("bal-button", { class: Object.assign(Object.assign(Object.assign({}, button.class()), button.modifier('left').class()), button.modifier('hidden').class(isFirst)), square: true, size: "small", icon: "nav-go-left", rounded: true, inverted: inverted, onClick: () => onPreviousClick(), disabled: isFirst, "aria-hidden": isFirst ? 'true' : null, tabindex: "-1", "data-testid": "bal-carousel-control-left", title: leftControlTitle }), h("bal-button", { class: Object.assign(Object.assign(Object.assign({}, button.class()), button.modifier('right').class()), button.modifier('hidden').class(isLast)), square: true, size: "small", icon: "nav-go-right", rounded: true, inverted: inverted, onClick: () => onNextClick(), disabled: isLast, "aria-hidden": isLast ? 'true' : null, tabindex: "-1", "data-testid": "bal-carousel-control-right", title: rightControlTitle })));
};
