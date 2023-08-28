export type CssClassMap = {
  [className: string]: boolean;
};
export declare const getClassMap: (classes: string | string[] | undefined) => CssClassMap;
export declare const getClassList: (classes: string | (string | null | undefined)[] | undefined) => string[];
