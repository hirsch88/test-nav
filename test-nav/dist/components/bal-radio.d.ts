import type { Components, JSX } from "../types/components";

interface BalRadio extends Components.BalRadio, HTMLElement {}
export const BalRadio: {
  prototype: BalRadio;
  new (): BalRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
