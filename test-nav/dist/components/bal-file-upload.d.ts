import type { Components, JSX } from "../types/components";

interface BalFileUpload extends Components.BalFileUpload, HTMLElement {}
export const BalFileUpload: {
  prototype: BalFileUpload;
  new (): BalFileUpload;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
