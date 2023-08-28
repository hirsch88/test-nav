/// <reference path="../../../interfaces.d.ts" />
declare namespace BalProps {
  type BalInputAutocorrect = 'on' | 'off';
  type BalInputInputMode = 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  type BalInputMask = 'contract-number' | 'claim-number' | 'offer-number' | 'be-enterprise-number' | 'be-iban';
  type BalInputInputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';
  type BalInputAutocomplete = 'on' | 'off' | 'name' | 'honorific-prefix' | 'given-name' | 'additional-name' | 'family-name' | 'honorific-suffix' | 'nickname' | 'email' | 'username' | 'new-password' | 'current-password' | 'one-time-code' | 'organization-title' | 'organization' | 'street-address' | 'address-line1' | 'address-line2' | 'address-line3' | 'address-level4' | 'address-level3' | 'address-level2' | 'address-level1' | 'country' | 'country-name' | 'postal-code' | 'cc-name' | 'cc-given-name' | 'cc-additional-name' | 'cc-family-name' | 'cc-family-name' | 'cc-number' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-csc' | 'cc-type' | 'transaction-currency' | 'transaction-amount' | 'language' | 'bday' | 'bday-day' | 'bday-month' | 'bday-year' | 'sex' | 'tel' | 'tel-country-code' | 'tel-national' | 'tel-area-code' | 'tel-local' | 'tel-extension' | 'impp' | 'url' | 'photo';
}
declare namespace BalEvents {
  interface BalInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalInputElement;
  }
  type BalInputInputDetail = string | undefined;
  type BalInputInput = BalInputCustomEvent<BalInputInputDetail>;
  type BalInputChangeDetail = string | undefined;
  type BalInputChange = BalInputCustomEvent<BalInputChangeDetail>;
  type BalInputBlurDetail = FocusEvent;
  type BalInputBlur = BalInputCustomEvent<BalInputBlurDetail>;
  type BalInputKeyPressDetail = KeyboardEvent;
  type BalInputKeyPress = BalInputCustomEvent<BalInputKeyPressDetail>;
  type BalInputFocusDetail = FocusEvent;
  type BalInputFocus = BalInputCustomEvent<BalInputFocusDetail>;
}
