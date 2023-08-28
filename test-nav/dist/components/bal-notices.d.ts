import type { Components, JSX } from "../types/components";

interface BalNotices extends Components.BalNotices, HTMLElement {}
export const BalNotices: {
  prototype: BalNotices;
  new (): BalNotices;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
