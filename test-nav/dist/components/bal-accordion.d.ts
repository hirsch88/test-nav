import type { Components, JSX } from "../types/components";

interface BalAccordion extends Components.BalAccordion, HTMLElement {}
export const BalAccordion: {
  prototype: BalAccordion;
  new (): BalAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
