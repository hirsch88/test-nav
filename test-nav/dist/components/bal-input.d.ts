import type { Components, JSX } from "../types/components";

interface BalInput extends Components.BalInput, HTMLElement {}
export const BalInput: {
  prototype: BalInput;
  new (): BalInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
