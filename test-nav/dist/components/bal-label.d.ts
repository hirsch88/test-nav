import type { Components, JSX } from "../types/components";

interface BalLabel extends Components.BalLabel, HTMLElement {}
export const BalLabel: {
  prototype: BalLabel;
  new (): BalLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
