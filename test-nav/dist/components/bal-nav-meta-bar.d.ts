import type { Components, JSX } from "../types/components";

interface BalNavMetaBar extends Components.BalNavMetaBar, HTMLElement {}
export const BalNavMetaBar: {
  prototype: BalNavMetaBar;
  new (): BalNavMetaBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
