import type { Components, JSX } from "../types/components";

interface BalSteps extends Components.BalSteps, HTMLElement {}
export const BalSteps: {
  prototype: BalSteps;
  new (): BalSteps;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
