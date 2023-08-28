import type { Components, JSX } from "../types/components";

interface BalListItemContent extends Components.BalListItemContent, HTMLElement {}
export const BalListItemContent: {
  prototype: BalListItemContent;
  new (): BalListItemContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
