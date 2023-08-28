import type { Components, JSX } from "../types/components";

interface BalPopup extends Components.BalPopup, HTMLElement {}
export const BalPopup: {
  prototype: BalPopup;
  new (): BalPopup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
