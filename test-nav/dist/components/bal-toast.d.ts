import type { Components, JSX } from "../types/components";

interface BalToast extends Components.BalToast, HTMLElement {}
export const BalToast: {
  prototype: BalToast;
  new (): BalToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
