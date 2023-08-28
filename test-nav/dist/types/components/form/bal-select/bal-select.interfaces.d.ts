/// <reference path="../../../interfaces.d.ts" />
declare namespace BalProps {
  type BalSelectFilter = 'includes' | 'starts-with';
}
declare namespace BalEvents {
  interface BalSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalSelectElement;
  }
  type BalSelectChangeDetail = string | string[] | undefined;
  type BalSelectChange = BalSelectCustomEvent<BalSelectChangeDetail>;
  type BalSelectBlurDetail = FocusEvent;
  type BalSelectBlur = BalSelectCustomEvent<BalSelectBlurDetail>;
  type BalSelectKeyPressDetail = KeyboardEvent;
  type BalSelectKeyPress = BalSelectCustomEvent<BalSelectKeyPressDetail>;
  type BalSelectFocusDetail = FocusEvent;
  type BalSelectFocus = BalSelectCustomEvent<BalSelectFocusDetail>;
  type BalSelectInputDetail = string;
  type BalSelectInput = BalSelectCustomEvent<BalSelectInputDetail>;
  type BalSelectInputClickDetail = MouseEvent;
  type BalSelectInputClick = BalSelectCustomEvent<BalSelectInputClickDetail>;
  type BalSelectCancelDetail = KeyboardEvent;
  type BalSelectCancel = BalSelectCustomEvent<BalSelectCancelDetail>;
}
