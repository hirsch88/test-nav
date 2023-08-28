import type { Components, JSX } from "../types/components";

interface BalFormCol extends Components.BalFormCol, HTMLElement {}
export const BalFormCol: {
  prototype: BalFormCol;
  new (): BalFormCol;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
