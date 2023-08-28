import type { Components, JSX } from "../types/components";

interface BalNavigationPopover extends Components.BalNavigationPopover, HTMLElement {}
export const BalNavigationPopover: {
  prototype: BalNavigationPopover;
  new (): BalNavigationPopover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
