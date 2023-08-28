/// <reference path="../../interfaces.d.ts" />
declare namespace BalProps {
  type BalAccordionColor = 'primary' | 'info';
}
declare namespace BalEvents {
  interface BalAccordionCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalAccordionElement;
  }
  type BalAccordionChangeDetail = boolean;
  type BalAccordionChange = BalAccordionCustomEvent<BalAccordionChangeDetail>;
  type BalAccordionWillAnimateDetail = boolean;
  type BalAccordionWillAnimate = BalAccordionCustomEvent<BalAccordionWillAnimateDetail>;
  type BalAccordionDidAnimateDetail = boolean;
  type BalAccordionDidAnimate = BalAccordionCustomEvent<BalAccordionDidAnimateDetail>;
}
