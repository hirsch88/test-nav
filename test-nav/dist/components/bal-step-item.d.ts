import type { Components, JSX } from "../types/components";

interface BalStepItem extends Components.BalStepItem, HTMLElement {}
export const BalStepItem: {
  prototype: BalStepItem;
  new (): BalStepItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
