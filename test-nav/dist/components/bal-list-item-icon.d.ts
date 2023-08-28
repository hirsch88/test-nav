import type { Components, JSX } from "../types/components";

interface BalListItemIcon extends Components.BalListItemIcon, HTMLElement {}
export const BalListItemIcon: {
  prototype: BalListItemIcon;
  new (): BalListItemIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
