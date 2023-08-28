export type ComponentRef = Function | HTMLElement | string | null;
export interface FrameworkDelegate {
  attachViewToDom(container: any, component: any, propsOrDataObj?: any, cssClasses?: string[]): Promise<HTMLElement>;
  removeViewFromDom(container: any, component: any): Promise<void>;
}
export declare const attachComponent: (delegate: FrameworkDelegate | undefined, container: Element, component: ComponentRef, cssClasses?: string[], componentProps?: {
  [key: string]: any;
} | undefined) => Promise<HTMLElement>;
export declare const detachComponent: (delegate: FrameworkDelegate | undefined, element: HTMLElement | undefined) => Promise<void>;
