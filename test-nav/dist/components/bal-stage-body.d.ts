import type { Components, JSX } from "../types/components";

interface BalStageBody extends Components.BalStageBody, HTMLElement {}
export const BalStageBody: {
  prototype: BalStageBody;
  new (): BalStageBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
