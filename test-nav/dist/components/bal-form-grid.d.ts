import type { Components, JSX } from "../types/components";

interface BalFormGrid extends Components.BalFormGrid, HTMLElement {}
export const BalFormGrid: {
  prototype: BalFormGrid;
  new (): BalFormGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
