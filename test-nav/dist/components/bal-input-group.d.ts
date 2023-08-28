import type { Components, JSX } from "../types/components";

interface BalInputGroup extends Components.BalInputGroup, HTMLElement {}
export const BalInputGroup: {
  prototype: BalInputGroup;
  new (): BalInputGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
