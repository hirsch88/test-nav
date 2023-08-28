export declare class BalScrollHandler {
  static disableSmoothScrolling(): void;
  static enableSmoothScrolling(): void;
  private static setScrollBehavior;
  private target;
  private x;
  private y;
  private disabled;
  connect(el?: HTMLElement): void;
  disconnect(): void;
  isDisabled(): boolean;
  enable(): void;
  disable(): void;
}
