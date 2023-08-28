/// <reference path="../../interfaces.d.ts" />
declare namespace BalProps {
  type BalTagColor = 'blue' | 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'green' | 'yellow' | 'red' | 'purple' | '';
  type BalTagSize = 'small' | 'medium' | 'large' | '';
  type BalTagFontWeight = 'regular' | 'bold';
  type BalTagPlacement = 'left' | 'center';
}
declare namespace BalEvents {
  interface BalTagCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalTagElement;
  }
  type BalTagCloseClickDetail = MouseEvent;
  type BalTagCloseClick = BalTagCustomEvent<BalTagCloseClickDetail>;
}
