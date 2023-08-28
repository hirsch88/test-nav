import type { Components, JSX } from "../types/components";

interface BalModalHeader extends Components.BalModalHeader, HTMLElement {}
export const BalModalHeader: {
  prototype: BalModalHeader;
  new (): BalModalHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
