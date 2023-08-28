/// <reference path="../../../interfaces.d.ts" />
declare namespace BalProps {
  type BalToastColor = BalNotificationColor;
}
declare namespace BalEvents {
  interface BalToastCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalToastElement;
  }
  type BalToastCloseDetail = string;
  type BalToastClose = BalToastCustomEvent<BalToastCloseDetail>;
}
