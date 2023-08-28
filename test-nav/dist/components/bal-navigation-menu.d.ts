import type { Components, JSX } from "../types/components";

interface BalNavigationMenu extends Components.BalNavigationMenu, HTMLElement {}
export const BalNavigationMenu: {
  prototype: BalNavigationMenu;
  new (): BalNavigationMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
