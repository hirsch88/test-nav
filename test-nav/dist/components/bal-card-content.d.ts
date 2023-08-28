import type { Components, JSX } from "../types/components";

interface BalCardContent extends Components.BalCardContent, HTMLElement {}
export const BalCardContent: {
  prototype: BalCardContent;
  new (): BalCardContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
