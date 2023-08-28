/// <reference path="../../../interfaces.d.ts" />
declare namespace BalEvents {
  interface BalInputSliderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalInputSliderElement;
  }
  type BalInputSliderChangeDetail = string | number | null;
  type BalInputSliderChange = BalInputSliderCustomEvent<BalInputSliderChangeDetail>;
  type BalInputSliderInputDetail = string | number | null;
  type BalInputSliderInput = BalInputSliderCustomEvent<BalInputSliderInputDetail>;
  type BalInputSliderBlurDetail = FocusEvent;
  type BalInputSliderBlur = BalInputSliderCustomEvent<BalInputSliderBlurDetail>;
  type BalInputSliderKeyPressDetail = KeyboardEvent;
  type BalInputSliderKeyPress = BalInputSliderCustomEvent<BalInputSliderKeyPressDetail>;
  type BalInputSliderFocusDetail = FocusEvent;
  type BalInputSliderFocus = BalInputSliderCustomEvent<BalInputSliderFocusDetail>;
}
