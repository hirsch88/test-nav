import type { Components, JSX } from "../types/components";

interface BalApp extends Components.BalApp, HTMLElement {}
export const BalApp: {
  prototype: BalApp;
  new (): BalApp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
