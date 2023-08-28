/// <reference path="../../interfaces.d.ts" />
declare namespace BalProps {
  type BalCarouselItemColor = 'white' | 'green' | 'yellow' | 'red' | 'purple';
}
declare namespace BalEvents {
  interface BalCarouselCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalCarouselElement;
  }
  type BalCarouselChangeDetail = number | undefined;
  type BalCarouselChange = BalCarouselCustomEvent<BalCarouselChangeDetail>;
  interface BalCarouselItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalCarouselItemElement;
  }
  type BalCarouselItemBlurDetail = void;
  type BalCarouselItemBlur = BalCarouselItemCustomEvent<BalCarouselItemBlurDetail>;
  type BalCarouselItemFocusDetail = void;
  type BalCarouselItemFocus = BalCarouselItemCustomEvent<BalCarouselItemFocusDetail>;
  type BalCarouselItemNavigateDetail = MouseEvent;
  type BalCarouselItemNavigate = BalCarouselItemCustomEvent<BalCarouselItemNavigateDetail>;
}
