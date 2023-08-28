import type { Components, JSX } from "../types/components";

interface BalHintText extends Components.BalHintText, HTMLElement {}
export const BalHintText: {
  prototype: BalHintText;
  new (): BalHintText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
