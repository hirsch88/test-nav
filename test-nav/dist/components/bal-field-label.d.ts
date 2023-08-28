import type { Components, JSX } from "../types/components";

interface BalFieldLabel extends Components.BalFieldLabel, HTMLElement {}
export const BalFieldLabel: {
  prototype: BalFieldLabel;
  new (): BalFieldLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
