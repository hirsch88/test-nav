import type { Components, JSX } from "../types/components";

interface BalTable extends Components.BalTable, HTMLElement {}
export const BalTable: {
  prototype: BalTable;
  new (): BalTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
