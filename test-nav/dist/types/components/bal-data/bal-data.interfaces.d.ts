/// <reference path="../../interfaces.d.ts" />
declare namespace BalEvents {
  interface BalDataValueCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalDataValueElement;
  }
  type BalDataValueClickDetail = MouseEvent;
  type BalDataValueClick = BalDataValueCustomEvent<BalDataValueClickDetail>;
  type BalDataValueFocusDetail = void;
  type BalDataValueFocus = BalDataValueCustomEvent<BalDataValueFocusDetail>;
  type BalDataValueBlurDetail = void;
  type BalDataValueBlur = BalDataValueCustomEvent<BalDataValueBlurDetail>;
}
