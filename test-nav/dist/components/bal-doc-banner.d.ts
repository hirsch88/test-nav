import type { Components, JSX } from "../types/components";

interface BalDocBanner extends Components.BalDocBanner, HTMLElement {}
export const BalDocBanner: {
  prototype: BalDocBanner;
  new (): BalDocBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
