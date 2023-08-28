/// <reference path="../../../interfaces.d.ts" />
declare namespace BalEvents {
  interface BalTimeInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalTimeInputElement;
  }
  type BalTimeInputChangeDetail = string | undefined;
  type BalTimeInputChange = BalTimeInputCustomEvent<BalTimeInputChangeDetail>;
  type BalTimeInputInputDetail = string | undefined;
  type BalTimeInputInput = BalTimeInputCustomEvent<BalTimeInputInputDetail>;
  type BalTimeInputBlurDetail = FocusEvent;
  type BalTimeInputBlur = BalTimeInputCustomEvent<BalTimeInputBlurDetail>;
  type BalTimeInputKeyPressDetail = KeyboardEvent;
  type BalTimeInputKeyPress = BalTimeInputCustomEvent<BalTimeInputKeyPressDetail>;
  type BalTimeInputFocusDetail = FocusEvent;
  type BalTimeInputFocus = BalTimeInputCustomEvent<BalTimeInputFocusDetail>;
  type BalTimeInputClickDetail = MouseEvent;
  type BalTimeInputClick = BalTimeInputCustomEvent<BalTimeInputClickDetail>;
}
