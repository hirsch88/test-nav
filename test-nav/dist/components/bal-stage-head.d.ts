import type { Components, JSX } from "../types/components";

interface BalStageHead extends Components.BalStageHead, HTMLElement {}
export const BalStageHead: {
  prototype: BalStageHead;
  new (): BalStageHead;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
