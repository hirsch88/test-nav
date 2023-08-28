import type { Components, JSX } from "../types/components";

interface BalNavigationMenuListItem extends Components.BalNavigationMenuListItem, HTMLElement {}
export const BalNavigationMenuListItem: {
  prototype: BalNavigationMenuListItem;
  new (): BalNavigationMenuListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
