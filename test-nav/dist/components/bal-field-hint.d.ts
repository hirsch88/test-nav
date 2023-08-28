import type { Components, JSX } from "../types/components";

interface BalFieldHint extends Components.BalFieldHint, HTMLElement {}
export const BalFieldHint: {
  prototype: BalFieldHint;
  new (): BalFieldHint;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
