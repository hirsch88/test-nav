import type { Components, JSX } from "../types/components";

interface BalDataLabel extends Components.BalDataLabel, HTMLElement {}
export const BalDataLabel: {
  prototype: BalDataLabel;
  new (): BalDataLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
