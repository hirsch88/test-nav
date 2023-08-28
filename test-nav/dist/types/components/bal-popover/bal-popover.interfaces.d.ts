/// <reference path="../../interfaces.d.ts" />
declare namespace BalProps {
  type BalPopoverContentRadius = 'normal' | 'large' | 'none' | 'normal-bottom-none' | 'normal-top-none' | 'large-bottom-none' | 'large-top-none';
  type BalPopoverContentColor = 'white' | 'grey';
  type BalPopoverPlacement = 'auto' | 'auto-start' | 'auto-end' | 'top' | 'left' | 'bottom' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end';
}
declare namespace BalEvents {
  interface BalPopoverCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalPopoverElement;
  }
  type BalPopoverChangeDetail = boolean;
  type BalPopoverChange = BalPopoverCustomEvent<BalPopoverChangeDetail>;
  type BalPopoverWillAnimateDetail = boolean;
  type BalPopoverWillAnimate = BalPopoverCustomEvent<BalPopoverWillAnimateDetail>;
  type BalPopoverDidAnimateDetail = boolean;
  type BalPopoverDidAnimate = BalPopoverCustomEvent<BalPopoverDidAnimateDetail>;
}
