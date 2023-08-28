import type { Components, JSX } from "../types/components";

interface BalButton extends Components.BalButton, HTMLElement {}
export const BalButton: {
  prototype: BalButton;
  new (): BalButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
