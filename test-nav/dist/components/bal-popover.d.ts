import type { Components, JSX } from "../types/components";

interface BalPopover extends Components.BalPopover, HTMLElement {}
export const BalPopover: {
  prototype: BalPopover;
  new (): BalPopover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
