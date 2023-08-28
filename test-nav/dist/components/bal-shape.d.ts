import type { Components, JSX } from "../types/components";

interface BalShape extends Components.BalShape, HTMLElement {}
export const BalShape: {
  prototype: BalShape;
  new (): BalShape;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
