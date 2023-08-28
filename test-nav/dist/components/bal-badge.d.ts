import type { Components, JSX } from "../types/components";

interface BalBadge extends Components.BalBadge, HTMLElement {}
export const BalBadge: {
  prototype: BalBadge;
  new (): BalBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
