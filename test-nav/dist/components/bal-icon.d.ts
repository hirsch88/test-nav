import type { Components, JSX } from "../types/components";

interface BalIcon extends Components.BalIcon, HTMLElement {}
export const BalIcon: {
  prototype: BalIcon;
  new (): BalIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
