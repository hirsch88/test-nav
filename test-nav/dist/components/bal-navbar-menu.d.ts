import type { Components, JSX } from "../types/components";

interface BalNavbarMenu extends Components.BalNavbarMenu, HTMLElement {}
export const BalNavbarMenu: {
  prototype: BalNavbarMenu;
  new (): BalNavbarMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
