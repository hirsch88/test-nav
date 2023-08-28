import type { Components, JSX } from "../types/components";

interface BalNavMenuFlyout extends Components.BalNavMenuFlyout, HTMLElement {}
export const BalNavMenuFlyout: {
  prototype: BalNavMenuFlyout;
  new (): BalNavMenuFlyout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
