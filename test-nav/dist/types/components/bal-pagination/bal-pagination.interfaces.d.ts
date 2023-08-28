/// <reference path="../../interfaces.d.ts" />
declare namespace BalProps {
  type BalPaginationInterface = '' | 'small';
}
declare namespace BalEvents {
  interface BalPaginationCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalPaginationElement;
  }
  type BalPaginationChangeDetail = number;
  type BalPaginationChange = BalPaginationCustomEvent<BalPaginationChangeDetail>;
}
