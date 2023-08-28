import type { Components, JSX } from "../types/components";

interface BalInputSlider extends Components.BalInputSlider, HTMLElement {}
export const BalInputSlider: {
  prototype: BalInputSlider;
  new (): BalInputSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
