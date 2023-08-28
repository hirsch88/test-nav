import type { Components, JSX } from "../types/components";

interface BalText extends Components.BalText, HTMLElement {}
export const BalText: {
  prototype: BalText;
  new (): BalText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
