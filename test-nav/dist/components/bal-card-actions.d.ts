import type { Components, JSX } from "../types/components";

interface BalCardActions extends Components.BalCardActions, HTMLElement {}
export const BalCardActions: {
  prototype: BalCardActions;
  new (): BalCardActions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
