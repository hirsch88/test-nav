import type { Components, JSX } from "../types/components";

interface BalInputStepper extends Components.BalInputStepper, HTMLElement {}
export const BalInputStepper: {
  prototype: BalInputStepper;
  new (): BalInputStepper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
