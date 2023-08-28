import type { Components, JSX } from "../types/components";

interface BalClose extends Components.BalClose, HTMLElement {}
export const BalClose: {
  prototype: BalClose;
  new (): BalClose;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
