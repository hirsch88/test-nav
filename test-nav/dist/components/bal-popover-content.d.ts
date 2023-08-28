import type { Components, JSX } from "../types/components";

interface BalPopoverContent extends Components.BalPopoverContent, HTMLElement {}
export const BalPopoverContent: {
  prototype: BalPopoverContent;
  new (): BalPopoverContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
