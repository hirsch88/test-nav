import type { Components, JSX } from "../types/components";

interface BalForm extends Components.BalForm, HTMLElement {}
export const BalForm: {
  prototype: BalForm;
  new (): BalForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
