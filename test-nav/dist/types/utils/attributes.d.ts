export type Attributes = {
  [key: string]: any;
};
export declare const inheritAttributes: (el: HTMLElement, attributes?: string[]) => Attributes;
export declare const inheritTrackingAttributes: (el: HTMLElement, ignoreList?: string[]) => Attributes;
