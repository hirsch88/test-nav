import type { Components, JSX } from "../types/components";

interface BalNav extends Components.BalNav, HTMLElement {}
export const BalNav: {
  prototype: BalNav;
  new (): BalNav;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
