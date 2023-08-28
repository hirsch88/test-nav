import type { Components, JSX } from "../types/components";

interface BalField extends Components.BalField, HTMLElement {}
export const BalField: {
  prototype: BalField;
  new (): BalField;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
