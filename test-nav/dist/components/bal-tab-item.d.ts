import type { Components, JSX } from "../types/components";

interface BalTabItem extends Components.BalTabItem, HTMLElement {}
export const BalTabItem: {
  prototype: BalTabItem;
  new (): BalTabItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
