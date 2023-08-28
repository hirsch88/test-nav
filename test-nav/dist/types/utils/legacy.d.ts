import { BalBreakpoints, BalBreakpoint } from './breakpoints';
export declare const hasTouchSupport: () => boolean;
export declare const isBrowser: (browser: 'Safari' | 'others') => boolean;
export type Platforms = BalBreakpoint;
export type PlatformSrcSet = Partial<BalBreakpoints>;
export declare const getPlatforms: (_win?: any) => ("mobile" | "tablet" | "touch" | "desktop" | "highDefinition" | "widescreen" | "fullhd")[];
interface IsPlatformSignature {
  (plt: Platforms): boolean;
  (win: Window, plt: Platforms): boolean;
}
export declare const isPlatform: IsPlatformSignature;
export declare const NewBalOptionValue: <T>(value: string, label: string, disabled?: boolean, data?: T | undefined) => import("..").BalOptionValue<T>;
export declare const NewBalSingleOptionValue: <T>(valueAndLabel: string, disabled?: boolean, data?: T | undefined) => import("..").BalOptionValue<T>;
export {};
