import type { Components, JSX } from "../types/components";

interface BalSelectOption extends Components.BalSelectOption, HTMLElement {}
export const BalSelectOption: {
  prototype: BalSelectOption;
  new (): BalSelectOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
