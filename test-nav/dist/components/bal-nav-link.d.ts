import type { Components, JSX } from "../types/components";

interface BalNavLink extends Components.BalNavLink, HTMLElement {}
export const BalNavLink: {
  prototype: BalNavLink;
  new (): BalNavLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
