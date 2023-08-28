import type { Components, JSX } from "../types/components";

interface BalNavigationLevelMeta extends Components.BalNavigationLevelMeta, HTMLElement {}
export const BalNavigationLevelMeta: {
  prototype: BalNavigationLevelMeta;
  new (): BalNavigationLevelMeta;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
