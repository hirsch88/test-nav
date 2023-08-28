/// <reference path="../../../interfaces.d.ts" />
declare namespace BalProps {
  type BalCheckboxGroupInterface = 'checkbox' | 'select-button' | 'switch';
  type BalCheckboxGroupColumns = 1 | 2 | 3 | 4;
  type BalCheckboxButtonColor = '' | 'purple' | 'green' | 'yellow' | 'red';
  type BalCheckboxInterface = BalCheckboxGroupInterface;
}
declare namespace BalEvents {
  interface BalCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalCheckboxElement;
  }
  type BalCheckboxChangeDetail = boolean;
  type BalCheckboxChange = BalCheckboxCustomEvent<BalCheckboxChangeDetail>;
  type BalCheckboxFocusDetail = FocusEvent;
  type BalCheckboxFocus = BalCheckboxCustomEvent<BalCheckboxFocusDetail>;
  type BalCheckboxBlurDetail = FocusEvent;
  type BalCheckboxBlur = BalCheckboxCustomEvent<BalCheckboxBlurDetail>;
  interface BalCheckboxGroupCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalCheckboxGroupElement;
  }
  type BalCheckboxGroupChangeDetail = any[];
  type BalCheckboxGroupChange = BalCheckboxGroupCustomEvent<BalCheckboxGroupChangeDetail>;
  type BalCheckboxGroupBlurDetail = FocusEvent;
  type BalCheckboxGroupBlur = BalCheckboxGroupCustomEvent<BalCheckboxGroupBlurDetail>;
  type BalCheckboxGroupFocusDetail = FocusEvent;
  type BalCheckboxGroupFocus = BalCheckboxGroupCustomEvent<BalCheckboxGroupFocusDetail>;
  interface BalCheckboxButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalCheckboxButtonElement;
  }
  type BalCheckboxButtonBlurDetail = FocusEvent;
  type BalCheckboxButtonBlur = BalCheckboxButtonCustomEvent<BalCheckboxButtonBlurDetail>;
  type BalCheckboxButtonFocusDetail = FocusEvent;
  type BalCheckboxButtonFocus = BalCheckboxButtonCustomEvent<BalCheckboxButtonFocusDetail>;
  type BalCheckboxButtonAriaLabelledByDetail = HTMLElement;
  type BalCheckboxButtonAriaLabelledBy = BalCheckboxButtonCustomEvent<BalCheckboxButtonAriaLabelledByDetail>;
}
