import type { Components, JSX } from "../types/components";

interface BalLogo extends Components.BalLogo, HTMLElement {}
export const BalLogo: {
  prototype: BalLogo;
  new (): BalLogo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
