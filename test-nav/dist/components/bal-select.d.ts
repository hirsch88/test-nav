import type { Components, JSX } from "../types/components";

interface BalSelect extends Components.BalSelect, HTMLElement {}
export const BalSelect: {
  prototype: BalSelect;
  new (): BalSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
