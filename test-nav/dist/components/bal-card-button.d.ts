import type { Components, JSX } from "../types/components";

interface BalCardButton extends Components.BalCardButton, HTMLElement {}
export const BalCardButton: {
  prototype: BalCardButton;
  new (): BalCardButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
