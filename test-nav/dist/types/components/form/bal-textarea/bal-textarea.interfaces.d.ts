/// <reference path="../../../interfaces.d.ts" />
declare namespace BalProps {
  type BalTextareaWrap = 'hard' | 'soft' | 'off';
  type BalTextareaInputMode = BalInputInputMode;
}
declare namespace BalEvents {
  interface BalTextareaCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalTextareaElement;
  }
  type BalTextareaChangeDetail = string | undefined;
  type BalTextareaChange = BalTextareaCustomEvent<BalTextareaChangeDetail>;
  type BalTextareaInputDetail = string | undefined;
  type BalTextareaInput = BalTextareaCustomEvent<BalTextareaInputDetail>;
  type BalTextareaBlurDetail = FocusEvent;
  type BalTextareaBlur = BalTextareaCustomEvent<BalTextareaBlurDetail>;
  type BalTextareaKeyPressDetail = KeyboardEvent;
  type BalTextareaKeyPress = BalTextareaCustomEvent<BalTextareaKeyPressDetail>;
  type BalTextareaFocusDetail = FocusEvent;
  type BalTextareaFocus = BalTextareaCustomEvent<BalTextareaFocusDetail>;
}
