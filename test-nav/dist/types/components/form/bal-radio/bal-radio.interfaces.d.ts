/// <reference path="../../../interfaces.d.ts" />
declare namespace BalProps {
  type BalRadioGroupInterface = 'radio' | 'select-button';
  type BalRadioGroupColumns = 1 | 2 | 3 | 4;
  type BalRadioButtonColor = '' | 'purple' | 'green' | 'yellow' | 'red';
  type BalRadioInterface = BalRadioGroupInterface;
}
declare namespace BalEvents {
  interface BalRadioCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalRadioElement;
  }
  type BalRadioChangeDetail = boolean;
  type BalRadioChange = BalRadioCustomEvent<BalRadioChangeDetail>;
  type BalRadioBlurDetail = FocusEvent;
  type BalRadioBlur = BalRadioCustomEvent<BalRadioBlurDetail>;
  type BalRadioFocusDetail = FocusEvent;
  type BalRadioFocus = BalRadioCustomEvent<BalRadioFocusDetail>;
  interface BalRadioGroupCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalRadioGroupElement;
  }
  type BalRadioGroupChangeDetail = number | string | boolean;
  type BalRadioGroupChange = BalRadioGroupCustomEvent<BalRadioGroupChangeDetail>;
  type BalRadioGroupBlurDetail = FocusEvent;
  type BalRadioGroupBlur = BalRadioGroupCustomEvent<BalRadioGroupBlurDetail>;
  type BalRadioGroupFocusDetail = FocusEvent;
  type BalRadioGroupFocus = BalRadioGroupCustomEvent<BalRadioGroupFocusDetail>;
  interface BalRadioButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalRadioButtonElement;
  }
  type BalRadioButtonBlurDetail = FocusEvent;
  type BalRadioButtonBlur = BalRadioButtonCustomEvent<BalRadioButtonBlurDetail>;
  type BalRadioButtonFocusDetail = FocusEvent;
  type BalRadioButtonFocus = BalRadioButtonCustomEvent<BalRadioButtonFocusDetail>;
  type BalRadioButtonAriaLabelledByDetail = HTMLElement;
  type BalRadioButtonAriaLabelledBy = BalRadioButtonCustomEvent<BalRadioButtonAriaLabelledByDetail>;
}
