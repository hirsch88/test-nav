import type { Components, JSX } from "../types/components";

interface BalFooter extends Components.BalFooter, HTMLElement {}
export const BalFooter: {
  prototype: BalFooter;
  new (): BalFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
