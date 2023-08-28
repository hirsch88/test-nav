import type { Components, JSX } from "../types/components";

interface BalDocColor extends Components.BalDocColor, HTMLElement {}
export const BalDocColor: {
  prototype: BalDocColor;
  new (): BalDocColor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
