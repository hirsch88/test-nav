import type { Components, JSX } from "../types/components";

interface BalNavbar extends Components.BalNavbar, HTMLElement {}
export const BalNavbar: {
  prototype: BalNavbar;
  new (): BalNavbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
