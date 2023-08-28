import type { Components, JSX } from "../types/components";

interface BalData extends Components.BalData, HTMLElement {}
export const BalData: {
  prototype: BalData;
  new (): BalData;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
