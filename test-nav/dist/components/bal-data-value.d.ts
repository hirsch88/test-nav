import type { Components, JSX } from "../types/components";

interface BalDataValue extends Components.BalDataValue, HTMLElement {}
export const BalDataValue: {
  prototype: BalDataValue;
  new (): BalDataValue;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
