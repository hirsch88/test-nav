/// <reference path="../../interfaces.d.ts" />
declare namespace BalProps {
  type BalButtonGroupPosition = 'right' | 'center' | '';
  type BalButtonGroupDirection = 'auto' | 'row' | 'column';
  type BalButtonColor = 'primary' | 'secondary' | 'tertiary' | 'tertiary-purple' | 'tertiary-red' | 'tertiary-yellow' | 'tertiary-green' | 'link' | 'light' | 'success' | 'warning' | 'danger' | 'text' | 'info' | 'primary-light' | 'info-light';
  type BalButtonElementType = 'button' | 'reset' | 'submit';
  type BalButtonSize = 'small' | '';
  type BalButtonTarget = '_blank' | ' _parent' | '_self' | '_top';
  type BalButtonAria = {
    controls?: string;
    title?: string;
    label?: string;
  };
}
declare namespace BalEvents {
  interface BalButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalButtonElement;
  }
  type BalButtonBlurDetail = void;
  type BalButtonBlur = BalButtonCustomEvent<BalButtonBlurDetail>;
  type BalButtonFocusDetail = void;
  type BalButtonFocus = BalButtonCustomEvent<BalButtonFocusDetail>;
  type BalButtonNavigateDetail = MouseEvent;
  type BalButtonNavigate = BalButtonCustomEvent<BalButtonNavigateDetail>;
  type BalButtonDidRenderDetail = void;
  type BalButtonDidRender = BalButtonCustomEvent<BalButtonDidRenderDetail>;
}
