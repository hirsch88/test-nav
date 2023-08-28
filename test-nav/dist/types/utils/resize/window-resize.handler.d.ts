export type BalWindowResizeHandlerObserver = () => void;
export type BalWindowResizeHandlerOptions = {
  onlyListenToWidthChanges: boolean;
};
export declare class BalWindowResizeHandler {
  private previousWidth;
  private previousHeight;
  private previousIsLandscape;
  private options;
  constructor(options?: Partial<BalWindowResizeHandlerOptions>);
  hasResized(): Promise<boolean>;
  private get isLandscape();
  private get sameWidth();
  private get sameHeight();
  private resetPreviousValues;
}
