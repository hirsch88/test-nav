import type { Components, JSX } from "../types/components";

interface BalCarousel extends Components.BalCarousel, HTMLElement {}
export const BalCarousel: {
  prototype: BalCarousel;
  new (): BalCarousel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
