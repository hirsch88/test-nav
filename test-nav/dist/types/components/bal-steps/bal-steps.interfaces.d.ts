/// <reference path="../../interfaces.d.ts" />
declare namespace BalProps { }
declare namespace BalEvents {
  interface BalStepsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalStepsElement;
  }
  type BalStepsChangeDetail = string | undefined;
  type BalStepsChange = BalStepsCustomEvent<BalStepsChangeDetail>;
  interface BalStepItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalStepItemElement;
  }
  type BalStepItemNavigateDetail = MouseEvent;
  type BalStepItemNavigate = BalStepsCustomEvent<BalStepItemNavigateDetail>;
}
