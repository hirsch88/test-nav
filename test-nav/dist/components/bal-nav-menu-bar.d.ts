import type { Components, JSX } from "../types/components";

interface BalNavMenuBar extends Components.BalNavMenuBar, HTMLElement {}
export const BalNavMenuBar: {
  prototype: BalNavMenuBar;
  new (): BalNavMenuBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
