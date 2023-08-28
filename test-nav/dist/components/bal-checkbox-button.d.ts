import type { Components, JSX } from "../types/components";

interface BalCheckboxButton extends Components.BalCheckboxButton, HTMLElement {}
export const BalCheckboxButton: {
  prototype: BalCheckboxButton;
  new (): BalCheckboxButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
