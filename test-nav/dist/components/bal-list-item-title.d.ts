import type { Components, JSX } from "../types/components";

interface BalListItemTitle extends Components.BalListItemTitle, HTMLElement {}
export const BalListItemTitle: {
  prototype: BalListItemTitle;
  new (): BalListItemTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
