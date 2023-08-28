import type { Components, JSX } from "../types/components";

interface BalDocApp extends Components.BalDocApp, HTMLElement {}
export const BalDocApp: {
  prototype: BalDocApp;
  new (): BalDocApp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
