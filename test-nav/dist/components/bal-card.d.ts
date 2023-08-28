import type { Components, JSX } from "../types/components";

interface BalCard extends Components.BalCard, HTMLElement {}
export const BalCard: {
  prototype: BalCard;
  new (): BalCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
