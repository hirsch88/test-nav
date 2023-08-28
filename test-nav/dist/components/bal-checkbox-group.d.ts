import type { Components, JSX } from "../types/components";

interface BalCheckboxGroup extends Components.BalCheckboxGroup, HTMLElement {}
export const BalCheckboxGroup: {
  prototype: BalCheckboxGroup;
  new (): BalCheckboxGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
