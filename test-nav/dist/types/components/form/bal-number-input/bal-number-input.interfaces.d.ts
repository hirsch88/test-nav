/// <reference path="../../../interfaces.d.ts" />
declare namespace BalEvents {
  interface BalNumberInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalNumberInputElement;
  }
  type BalNumberInputChangeDetail = number | undefined;
  type BalNumberInputChange = BalNumberInputCustomEvent<BalNumberInputChangeDetail>;
  type BalNumberInputInputDetail = number | undefined;
  type BalNumberInputInput = BalNumberInputCustomEvent<BalNumberInputInputDetail>;
  type BalNumberInputBlurDetail = FocusEvent;
  type BalNumberInputBlur = BalNumberInputCustomEvent<BalNumberInputBlurDetail>;
  type BalNumberInputKeyPressDetail = KeyboardEvent;
  type BalNumberInputKeyPress = BalNumberInputCustomEvent<BalNumberInputKeyPressDetail>;
  type BalNumberInputFocusDetail = FocusEvent;
  type BalNumberInputFocus = BalNumberInputCustomEvent<BalNumberInputFocusDetail>;
}
