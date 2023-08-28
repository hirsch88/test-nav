import type { Components, JSX } from "../types/components";

interface BalDocPreview extends Components.BalDocPreview, HTMLElement {}
export const BalDocPreview: {
  prototype: BalDocPreview;
  new (): BalDocPreview;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
