import type { Components, JSX } from "../types/components";

interface BalFieldMessage extends Components.BalFieldMessage, HTMLElement {}
export const BalFieldMessage: {
  prototype: BalFieldMessage;
  new (): BalFieldMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
