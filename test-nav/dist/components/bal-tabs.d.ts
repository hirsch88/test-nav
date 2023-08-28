import type { Components, JSX } from "../types/components";

interface BalTabs extends Components.BalTabs, HTMLElement {}
export const BalTabs: {
  prototype: BalTabs;
  new (): BalTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
