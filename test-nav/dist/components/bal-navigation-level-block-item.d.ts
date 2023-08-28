import type { Components, JSX } from "../types/components";

interface BalNavigationLevelBlockItem extends Components.BalNavigationLevelBlockItem, HTMLElement {}
export const BalNavigationLevelBlockItem: {
  prototype: BalNavigationLevelBlockItem;
  new (): BalNavigationLevelBlockItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
