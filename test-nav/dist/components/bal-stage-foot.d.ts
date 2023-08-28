import type { Components, JSX } from "../types/components";

interface BalStageFoot extends Components.BalStageFoot, HTMLElement {}
export const BalStageFoot: {
  prototype: BalStageFoot;
  new (): BalStageFoot;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
