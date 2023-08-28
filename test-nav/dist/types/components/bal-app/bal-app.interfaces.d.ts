/// <reference path="../../interfaces.d.ts" />
declare namespace BalEvents {
  interface BalAppCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalAppElement;
  }
  type BalAppLoadDetail = boolean;
  type BalAppLoad = BalAppCustomEvent<BalAppLoadDetail>;
}
