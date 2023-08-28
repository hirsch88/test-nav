import type { Components, JSX } from "../types/components";

interface BalNotification extends Components.BalNotification, HTMLElement {}
export const BalNotification: {
  prototype: BalNotification;
  new (): BalNotification;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
