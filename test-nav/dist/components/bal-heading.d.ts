import type { Components, JSX } from "../types/components";

interface BalHeading extends Components.BalHeading, HTMLElement {}
export const BalHeading: {
  prototype: BalHeading;
  new (): BalHeading;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
