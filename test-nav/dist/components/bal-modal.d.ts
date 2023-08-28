import type { Components, JSX } from "../types/components";

interface BalModal extends Components.BalModal, HTMLElement {}
export const BalModal: {
  prototype: BalModal;
  new (): BalModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
