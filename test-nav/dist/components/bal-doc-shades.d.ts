import type { Components, JSX } from "../types/components";

interface BalDocShades extends Components.BalDocShades, HTMLElement {}
export const BalDocShades: {
  prototype: BalDocShades;
  new (): BalDocShades;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
