import type { Components, JSX } from "../types/components";

interface BalStageBackLink extends Components.BalStageBackLink, HTMLElement {}
export const BalStageBackLink: {
  prototype: BalStageBackLink;
  new (): BalStageBackLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
