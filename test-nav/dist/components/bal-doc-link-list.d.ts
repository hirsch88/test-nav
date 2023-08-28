import type { Components, JSX } from "../types/components";

interface BalDocLinkList extends Components.BalDocLinkList, HTMLElement {}
export const BalDocLinkList: {
  prototype: BalDocLinkList;
  new (): BalDocLinkList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
