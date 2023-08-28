import type { Components, JSX } from "../types/components";

interface BalNumberInput extends Components.BalNumberInput, HTMLElement {}
export const BalNumberInput: {
  prototype: BalNumberInput;
  new (): BalNumberInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
