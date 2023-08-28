import type { Components, JSX } from "../types/components";

interface BalCardTitle extends Components.BalCardTitle, HTMLElement {}
export const BalCardTitle: {
  prototype: BalCardTitle;
  new (): BalCardTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
