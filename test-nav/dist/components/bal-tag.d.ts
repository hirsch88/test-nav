import type { Components, JSX } from "../types/components";

interface BalTag extends Components.BalTag, HTMLElement {}
export const BalTag: {
  prototype: BalTag;
  new (): BalTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
