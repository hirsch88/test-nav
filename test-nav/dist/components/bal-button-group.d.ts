import type { Components, JSX } from "../types/components";

interface BalButtonGroup extends Components.BalButtonGroup, HTMLElement {}
export const BalButtonGroup: {
  prototype: BalButtonGroup;
  new (): BalButtonGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
