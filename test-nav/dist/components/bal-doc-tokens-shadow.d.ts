import type { Components, JSX } from "../types/components";

interface BalDocTokensShadow extends Components.BalDocTokensShadow, HTMLElement {}
export const BalDocTokensShadow: {
  prototype: BalDocTokensShadow;
  new (): BalDocTokensShadow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
