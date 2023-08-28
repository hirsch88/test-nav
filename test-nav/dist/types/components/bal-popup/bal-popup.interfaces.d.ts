/// <reference path="../../interfaces.d.ts" />
declare namespace BalProps {
  type BalPopupTouchPosition = 'top' | 'bottom';
  type BalPopupVariant = 'popover' | 'fullscreen' | 'drawer';
  type BalPopupPlacement = 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
}
declare namespace BalEvents {
  interface BalPopupCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalPopupElement;
  }
  type BalPopupChangeDetail = boolean;
  type BalPopupChange = BalPopupCustomEvent<BalPopupChangeDetail>;
  type BalPopupWillAnimateDetail = boolean;
  type BalPopupWillAnimate = BalPopupCustomEvent<BalPopupWillAnimateDetail>;
  type BalPopupDidAnimateDetail = boolean;
  type BalPopupDidAnimate = BalPopupCustomEvent<BalPopupDidAnimateDetail>;
}
