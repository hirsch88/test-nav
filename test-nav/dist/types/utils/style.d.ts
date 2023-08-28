export interface Padding {
  top: number;
  right: number;
  bottom: number;
  left: number;
}
export declare const getComputedPadding: (element: HTMLElement, defaultPadding?: number) => Padding;
export declare const getComputedWidth: (element: HTMLElement) => number;
