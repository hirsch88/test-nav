import type { Components, JSX } from "../types/components";

interface BalAccordionDetails extends Components.BalAccordionDetails, HTMLElement {}
export const BalAccordionDetails: {
  prototype: BalAccordionDetails;
  new (): BalAccordionDetails;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
