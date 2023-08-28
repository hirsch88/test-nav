import type { Components, JSX } from "../types/components";

interface BalStageImage extends Components.BalStageImage, HTMLElement {}
export const BalStageImage: {
  prototype: BalStageImage;
  new (): BalStageImage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
