import type { Components, JSX } from "../types/components";

interface BalStack extends Components.BalStack, HTMLElement {}
export const BalStack: {
  prototype: BalStack;
  new (): BalStack;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
