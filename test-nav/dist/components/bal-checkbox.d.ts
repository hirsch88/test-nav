import type { Components, JSX } from "../types/components";

interface BalCheckbox extends Components.BalCheckbox, HTMLElement {}
export const BalCheckbox: {
  prototype: BalCheckbox;
  new (): BalCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
