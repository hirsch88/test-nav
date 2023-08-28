import type { Components, JSX } from "../types/components";

interface BalTagGroup extends Components.BalTagGroup, HTMLElement {}
export const BalTagGroup: {
  prototype: BalTagGroup;
  new (): BalTagGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
