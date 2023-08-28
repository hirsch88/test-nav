import type { Components, JSX } from "../types/components";

interface BalSpinner extends Components.BalSpinner, HTMLElement {}
export const BalSpinner: {
  prototype: BalSpinner;
  new (): BalSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
