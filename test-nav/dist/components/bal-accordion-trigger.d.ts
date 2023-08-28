import type { Components, JSX } from "../types/components";

interface BalAccordionTrigger extends Components.BalAccordionTrigger, HTMLElement {}
export const BalAccordionTrigger: {
  prototype: BalAccordionTrigger;
  new (): BalAccordionTrigger;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
