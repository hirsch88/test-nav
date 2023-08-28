import type { Components, JSX } from "../types/components";

interface BalSheet extends Components.BalSheet, HTMLElement {}
export const BalSheet: {
  prototype: BalSheet;
  new (): BalSheet;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
