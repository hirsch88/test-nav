import type { Components, JSX } from "../types/components";

interface BalAccordionSummary extends Components.BalAccordionSummary, HTMLElement {}
export const BalAccordionSummary: {
  prototype: BalAccordionSummary;
  new (): BalAccordionSummary;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
