import type { Components, JSX } from "../types/components";

interface BalTimeInput extends Components.BalTimeInput, HTMLElement {}
export const BalTimeInput: {
  prototype: BalTimeInput;
  new (): BalTimeInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
