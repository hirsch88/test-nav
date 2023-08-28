declare class BrowserWindow {
  get width(): number;
  get height(): number;
}
declare class Browser {
  window: BrowserWindow;
  get isSafari(): boolean;
  get hasWindow(): boolean;
  get hasNavigator(): boolean;
  get hasDocument(): boolean;
  get userAgent(): string;
}
export declare const balBrowser: Browser;
export {};
