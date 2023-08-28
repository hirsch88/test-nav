import type { Components, JSX } from "../types/components";

interface BalDocLinkListItem extends Components.BalDocLinkListItem, HTMLElement {}
export const BalDocLinkListItem: {
  prototype: BalDocLinkListItem;
  new (): BalDocLinkListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
