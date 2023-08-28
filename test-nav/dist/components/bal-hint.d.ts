import type { Components, JSX } from "../types/components";

interface BalHint extends Components.BalHint, HTMLElement {}
export const BalHint: {
  prototype: BalHint;
  new (): BalHint;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
