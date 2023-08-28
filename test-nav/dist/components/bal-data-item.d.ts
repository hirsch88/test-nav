import type { Components, JSX } from "../types/components";

interface BalDataItem extends Components.BalDataItem, HTMLElement {}
export const BalDataItem: {
  prototype: BalDataItem;
  new (): BalDataItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
