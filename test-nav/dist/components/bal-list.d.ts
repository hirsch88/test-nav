import type { Components, JSX } from "../types/components";

interface BalList extends Components.BalList, HTMLElement {}
export const BalList: {
  prototype: BalList;
  new (): BalList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
