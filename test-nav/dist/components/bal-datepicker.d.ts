import type { Components, JSX } from "../types/components";

interface BalDatepicker extends Components.BalDatepicker, HTMLElement {}
export const BalDatepicker: {
  prototype: BalDatepicker;
  new (): BalDatepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
