/// <reference path="../../interfaces.d.ts" />
declare namespace BalProps {
  type BalListItemAccordionHeadIcon = 'plus' | 'nav-go-down';
  type BalListItemTarget = BalButtonTarget;
  type BalListSize = 'small' | 'large' | '';
  type BalListBackground = 'light' | 'color' | 'dark';
  type BalListContentAlignment = 'start' | 'center' | 'end' | 'space-between';
  type BalListContentSpacing = 'none' | 'normal';
}
declare namespace BalEvents {
  interface BalListItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalListItemElement;
  }
  type BalListItemNavigateDetail = MouseEvent;
  type BalListItemNavigate = BalListItemCustomEvent<BalListItemNavigateDetail>;
  type BalListItemGroupStateChangedDetail = MouseEvent;
  type BalListItemGroupStateChanged = BalListItemCustomEvent<BalListItemGroupStateChangedDetail>;
  type BalListItemWillAnimateDetail = boolean;
  type BalListItemWillAnimate = BalListItemCustomEvent<BalListItemWillAnimateDetail>;
  type BalListItemDidAnimateDetail = boolean;
  type BalListItemDidAnimate = BalListItemCustomEvent<BalListItemDidAnimateDetail>;
  interface BalListItemAccordionHeadCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalListItemAccordionHeadElement;
  }
  type BalListAccordionChangeDetail = boolean;
  type BalListAccordionChange = BalListItemAccordionHeadCustomEvent<BalListAccordionChangeDetail>;
}
