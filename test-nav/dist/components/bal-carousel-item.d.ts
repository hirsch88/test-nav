import type { Components, JSX } from "../types/components";

interface BalCarouselItem extends Components.BalCarouselItem, HTMLElement {}
export const BalCarouselItem: {
  prototype: BalCarouselItem;
  new (): BalCarouselItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
