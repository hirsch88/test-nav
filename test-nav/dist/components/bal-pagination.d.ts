import type { Components, JSX } from "../types/components";

interface BalPagination extends Components.BalPagination, HTMLElement {}
export const BalPagination: {
  prototype: BalPagination;
  new (): BalPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
