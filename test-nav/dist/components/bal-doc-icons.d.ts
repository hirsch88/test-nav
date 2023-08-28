import type { Components, JSX } from "../types/components";

interface BalDocIcons extends Components.BalDocIcons, HTMLElement {}
export const BalDocIcons: {
  prototype: BalDocIcons;
  new (): BalDocIcons;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
