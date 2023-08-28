import type { Components, JSX } from "../types/components";

interface BalStage extends Components.BalStage, HTMLElement {}
export const BalStage: {
  prototype: BalStage;
  new (): BalStage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
