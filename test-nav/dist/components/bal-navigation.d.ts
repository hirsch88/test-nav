import type { Components, JSX } from "../types/components";

interface BalNavigation extends Components.BalNavigation, HTMLElement {}
export const BalNavigation: {
  prototype: BalNavigation;
  new (): BalNavigation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
