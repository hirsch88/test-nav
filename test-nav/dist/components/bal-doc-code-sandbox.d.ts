import type { Components, JSX } from "../types/components";

interface BalDocCodeSandbox extends Components.BalDocCodeSandbox, HTMLElement {}
export const BalDocCodeSandbox: {
  prototype: BalDocCodeSandbox;
  new (): BalDocCodeSandbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
