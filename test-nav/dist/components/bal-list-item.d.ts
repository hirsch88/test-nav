import type { Components, JSX } from "../types/components";

interface BalListItem extends Components.BalListItem, HTMLElement {}
export const BalListItem: {
  prototype: BalListItem;
  new (): BalListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
