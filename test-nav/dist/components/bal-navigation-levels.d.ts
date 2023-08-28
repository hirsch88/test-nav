import type { Components, JSX } from "../types/components";

interface BalNavigationLevels extends Components.BalNavigationLevels, HTMLElement {}
export const BalNavigationLevels: {
  prototype: BalNavigationLevels;
  new (): BalNavigationLevels;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
