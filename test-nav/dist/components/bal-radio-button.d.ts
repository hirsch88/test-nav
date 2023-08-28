import type { Components, JSX } from "../types/components";

interface BalRadioButton extends Components.BalRadioButton, HTMLElement {}
export const BalRadioButton: {
  prototype: BalRadioButton;
  new (): BalRadioButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
