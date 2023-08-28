/// <reference path="../../../interfaces.d.ts" />
declare namespace BalProps {
  type BalFieldLabelWeight = 'bold' | 'regular';
  type BalFieldMessageColor = '' | 'success' | 'warning' | 'danger';
}
declare namespace BalEvents {
  interface BalFieldCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalFieldElement;
  }
  type BalFieldAriaLabelledByDetail = HTMLElement;
  type BalFieldAriaLabelledBy = BalFieldCustomEvent<BalFieldAriaLabelledByDetail>;
}
