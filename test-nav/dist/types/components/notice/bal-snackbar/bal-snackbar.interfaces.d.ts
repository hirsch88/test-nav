/// <reference path="../../../interfaces.d.ts" />
declare namespace BalProps {
  type BalSnackbarColor = BalNotificationColor;
}
declare namespace BalEvents {
  interface BalSnackbarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalSnackbarElement;
  }
  type BalSnackbarCloseDetail = string;
  type BalSnackbarClose = BalSnackbarCustomEvent<BalSnackbarCloseDetail>;
  type BalSnackbarActionDetail = string;
  type BalSnackbarAction = BalSnackbarCustomEvent<BalSnackbarActionDetail>;
}
