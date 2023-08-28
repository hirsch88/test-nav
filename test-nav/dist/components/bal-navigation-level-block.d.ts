import type { Components, JSX } from "../types/components";

interface BalNavigationLevelBlock extends Components.BalNavigationLevelBlock, HTMLElement {}
export const BalNavigationLevelBlock: {
  prototype: BalNavigationLevelBlock;
  new (): BalNavigationLevelBlock;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
