import type { Components, JSX } from "../types/components";

interface BalDivider extends Components.BalDivider, HTMLElement {}
export const BalDivider: {
  prototype: BalDivider;
  new (): BalDivider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
