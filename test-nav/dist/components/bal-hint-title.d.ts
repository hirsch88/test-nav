import type { Components, JSX } from "../types/components";

interface BalHintTitle extends Components.BalHintTitle, HTMLElement {}
export const BalHintTitle: {
  prototype: BalHintTitle;
  new (): BalHintTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
