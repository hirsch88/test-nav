import type { Components, JSX } from "../types/components";

interface BalDocLead extends Components.BalDocLead, HTMLElement {}
export const BalDocLead: {
  prototype: BalDocLead;
  new (): BalDocLead;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
