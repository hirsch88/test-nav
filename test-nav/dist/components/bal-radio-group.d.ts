import type { Components, JSX } from "../types/components";

interface BalRadioGroup extends Components.BalRadioGroup, HTMLElement {}
export const BalRadioGroup: {
  prototype: BalRadioGroup;
  new (): BalRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
