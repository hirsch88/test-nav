/// <reference path="../../interfaces.d.ts" />
declare namespace BalProps {
  type BalNavigationLevelBlockColor = 'white' | 'grey' | 'yellow' | 'red' | 'purple' | 'green';
}
declare namespace BalEvents {
  interface BalNavigationLevelBlockCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalNavigationLevelBlockElement;
  }
  type BalNavigationLevelBlockClickDetail = MouseEvent;
  type BalNavigationLevelBlockClick = BalNavigationLevelBlockCustomEvent<BalNavigationLevelBlockClickDetail>;
  interface BalNavigationLevelBlockItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalNavigationLevelBlockItemElement;
  }
  type BalNavigationLevelBlockItemClickDetail = MouseEvent;
  type BalNavigationLevelBlockItemClick = BalNavigationLevelBlockItemCustomEvent<BalNavigationLevelBlockItemClickDetail>;
  interface BalNavigationLevelMainCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalNavigationLevelMainElement;
  }
  type BalNavigationLevelMainClickDetail = MouseEvent;
  type BalNavigationLevelMainClick = BalNavigationLevelMainCustomEvent<BalNavigationLevelMainClickDetail>;
  interface BalNavigationLevelMetaCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalNavigationLevelMetaElement;
  }
  type BalNavigationLevelMetaClickDetail = MouseEvent;
  type BalNavigationLevelMetaClick = BalNavigationLevelMetaCustomEvent<BalNavigationLevelMetaClickDetail>;
}
