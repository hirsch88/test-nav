/// <reference path="../../interfaces.d.ts" />
declare namespace BalProps {
  type BalTabsContext = 'meta' | 'navigation' | 'navbar';
  type BalTabsIconPosition = 'horizontal' | 'vertical';
  type BalTabsVertical = boolean | 'mobile' | 'tablet';
  type BalTabsFloat = 'left' | 'right';
  type BalTabsColSize = 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters' | 'full';
}
declare namespace BalEvents {
  interface BalTabsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalTabsElement;
  }
  type BalTabsChangeDetail = string | undefined;
  type BalTabsChange = BalTabsCustomEvent<BalTabsChangeDetail>;
  type BalTabsWillAnimateDetail = string | undefined;
  type BalTabsWillAnimate = BalTabsCustomEvent<BalTabsWillAnimateDetail>;
  type BalTabsDidAnimateDetail = string | undefined;
  type BalTabsDidAnimate = BalTabsCustomEvent<BalTabsDidAnimateDetail>;
  interface BalTabItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalTabItemElement;
  }
  type BalTabItemNavigateDetail = MouseEvent;
  type BalTabItemNavigate = BalTabItemCustomEvent<BalTabItemNavigateDetail>;
}
