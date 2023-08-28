import type { Components, JSX } from "../types/components";

interface BalDocImage extends Components.BalDocImage, HTMLElement {}
export const BalDocImage: {
  prototype: BalDocImage;
  new (): BalDocImage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
