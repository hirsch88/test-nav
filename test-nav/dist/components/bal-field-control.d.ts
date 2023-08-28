import type { Components, JSX } from "../types/components";

interface BalFieldControl extends Components.BalFieldControl, HTMLElement {}
export const BalFieldControl: {
  prototype: BalFieldControl;
  new (): BalFieldControl;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
