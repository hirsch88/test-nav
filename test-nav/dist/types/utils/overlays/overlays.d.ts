import { HTMLStencilElement } from '../../stencil-public-runtime';
type OverlayInterface = any;
export declare const OVERLAY_BACK_BUTTON_PRIORITY = 100;
export declare const MENU_BACK_BUTTON_PRIORITY = 99;
export declare const BACKDROP = "backdrop";
export interface BackButtonEventDetail {
  register(priority: number, handler: (processNextHandler: () => void) => Promise<any> | void): void;
}
export type BackButtonEvent = CustomEvent<BackButtonEventDetail>;
export interface HTMLBalOverlayElement extends HTMLStencilElement {
  overlayIndex: number;
  dismiss(data?: any, role?: string): Promise<boolean>;
}
export declare const prepareOverlay: (overlay: OverlayInterface) => void;
export declare const getOverlays: (doc: Document, selector?: string) => HTMLBalOverlayElement[];
export declare const getOverlay: (doc: Document, overlayTag?: string, id?: string) => HTMLBalOverlayElement | undefined;
export declare const connectListeners: (doc: Document) => void;
export declare const dismiss: (overlay: OverlayInterface, data: any | undefined, role: string | undefined, animation: () => Promise<void>) => Promise<boolean>;
export declare const eventMethod: <T>(element: HTMLElement, eventName: string) => Promise<T>;
export declare const onceEvent: (element: HTMLElement, eventName: string, callback: (ev: Event) => void) => void;
export {};
