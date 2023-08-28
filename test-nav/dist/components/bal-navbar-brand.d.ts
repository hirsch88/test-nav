import type { Components, JSX } from "../types/components";

interface BalNavbarBrand extends Components.BalNavbarBrand, HTMLElement {}
export const BalNavbarBrand: {
  prototype: BalNavbarBrand;
  new (): BalNavbarBrand;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
