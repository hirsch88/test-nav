import type { Components, JSX } from "../types/components";

interface BalContent extends Components.BalContent, HTMLElement {}
export const BalContent: {
  prototype: BalContent;
  new (): BalContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
