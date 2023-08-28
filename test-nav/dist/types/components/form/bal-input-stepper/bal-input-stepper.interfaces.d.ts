/// <reference path="../../../interfaces.d.ts" />
declare namespace BalEvents {
  interface BalInputStepperCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalInputStepperElement;
  }
  type BalInputStepperChangeDetail = number | undefined;
  type BalInputStepperChange = BalInputStepperCustomEvent<BalInputStepperChangeDetail>;
  type BalInputStepperInputDetail = number | undefined;
  type BalInputStepperInput = BalInputStepperCustomEvent<BalInputStepperInputDetail>;
  type BalInputStepperIncreaseDetail = number | undefined;
  type BalInputStepperIncrease = BalInputStepperCustomEvent<BalInputStepperIncreaseDetail>;
  type BalInputStepperDecreaseDetail = number | undefined;
  type BalInputStepperDecrease = BalInputStepperCustomEvent<BalInputStepperDecreaseDetail>;
}
