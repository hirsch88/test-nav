import type { Components, JSX } from "../types/components";

interface BalModalBody extends Components.BalModalBody, HTMLElement {}
export const BalModalBody: {
  prototype: BalModalBody;
  new (): BalModalBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
