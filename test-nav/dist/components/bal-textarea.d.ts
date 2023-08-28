import type { Components, JSX } from "../types/components";

interface BalTextarea extends Components.BalTextarea, HTMLElement {}
export const BalTextarea: {
  prototype: BalTextarea;
  new (): BalTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
