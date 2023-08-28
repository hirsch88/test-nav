import type { Components, JSX } from "../types/components";

interface BalSnackbar extends Components.BalSnackbar, HTMLElement {}
export const BalSnackbar: {
  prototype: BalSnackbar;
  new (): BalSnackbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
