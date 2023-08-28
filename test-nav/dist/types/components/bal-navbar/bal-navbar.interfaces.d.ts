/// <reference path="../../interfaces.d.ts" />
declare namespace BalProps {
  type BalNavbarInterface = 'app' | 'simple';
}
declare namespace BalEvents {
  interface BalNavbarBrandCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalNavbarBrandElement;
  }
  type BalNavbarBrandNavigationChangeDetail = MouseEvent;
  type BalNavbarBrandNavigationChange = BalNavbarBrandCustomEvent<BalNavbarBrandNavigationChangeDetail>;
  type BalNavbarMenuWillAnimateDetail = boolean;
  type BalNavbarMenuWillAnimate = BalNavbarBrandCustomEvent<BalNavbarMenuWillAnimateDetail>;
  type BalNavbarMenuDidAnimateDetail = boolean;
  type BalNavbarMenuDidAnimate = BalNavbarBrandCustomEvent<BalNavbarMenuDidAnimateDetail>;
}
