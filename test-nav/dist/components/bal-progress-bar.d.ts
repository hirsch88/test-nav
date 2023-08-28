import type { Components, JSX } from "../types/components";

interface BalProgressBar extends Components.BalProgressBar, HTMLElement {}
export const BalProgressBar: {
  prototype: BalProgressBar;
  new (): BalProgressBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
