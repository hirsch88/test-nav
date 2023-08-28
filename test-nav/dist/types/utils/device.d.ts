export declare class Orientation {
  get isPortrait(): boolean;
  get isLandscape(): boolean;
  toObject(): {
    landscape: boolean;
    portrait: boolean;
  };
}
declare class Device {
  orientation: Orientation;
  get isMobile(): boolean;
  get hasTouchScreen(): boolean;
}
export declare const balDevice: Device;
export {};
