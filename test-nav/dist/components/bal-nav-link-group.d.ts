import type { Components, JSX } from "../types/components";

interface BalNavLinkGroup extends Components.BalNavLinkGroup, HTMLElement {}
export const BalNavLinkGroup: {
  prototype: BalNavLinkGroup;
  new (): BalNavLinkGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
