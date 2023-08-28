import type { Components, JSX } from "../types/components";

interface BalNavigationMeta extends Components.BalNavigationMeta, HTMLElement {}
export const BalNavigationMeta: {
  prototype: BalNavigationMeta;
  new (): BalNavigationMeta;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
