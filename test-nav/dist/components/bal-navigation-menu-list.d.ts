import type { Components, JSX } from "../types/components";

interface BalNavigationMenuList extends Components.BalNavigationMenuList, HTMLElement {}
export const BalNavigationMenuList: {
  prototype: BalNavigationMenuList;
  new (): BalNavigationMenuList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
