/// <reference path="../../../interfaces.d.ts" />
declare namespace BalProps {
  type BalDatepickerCallback = (dateString: string) => boolean;
}
declare namespace BalEvents {
  interface BalDatepickerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalDatepickerElement;
  }
  type BalDatepickerChangeDetail = string | undefined;
  type BalDatepickerChange = BalDatepickerCustomEvent<BalDatepickerChangeDetail>;
  type BalDatepickerInputDetail = string | undefined;
  type BalDatepickerInput = BalDatepickerCustomEvent<BalDatepickerInputDetail>;
  type BalDatepickerBlurDetail = FocusEvent;
  type BalDatepickerBlur = BalDatepickerCustomEvent<BalDatepickerBlurDetail>;
  type BalDatepickerFocusDetail = FocusEvent;
  type BalDatepickerFocus = BalDatepickerCustomEvent<BalDatepickerFocusDetail>;
  type BalDatepickerInputClickDetail = MouseEvent;
  type BalDatepickerInputClick = BalDatepickerCustomEvent<BalDatepickerInputClickDetail>;
  type BalDatepickerIconClickDetail = MouseEvent;
  type BalDatepickerIconClick = BalDatepickerCustomEvent<BalDatepickerIconClickDetail>;
}
