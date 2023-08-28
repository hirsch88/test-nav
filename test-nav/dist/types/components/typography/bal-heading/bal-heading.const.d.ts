export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p';
export declare const HEADING_TAGS: {
  [key: string]: HeadingTag;
};
export type HeadingSize = 'xxxxx-large' | 'xxxx-large' | 'xxx-large' | 'xx-large' | 'x-large' | 'large' | 'medium' | 'normal';
export declare const HEADING_ORDER: HeadingSize[];
export declare const HEADING_SIZES: {
  [key: string]: HeadingSize;
};
export type HeadingColor = 'primary' | 'success' | 'warning' | 'danger' | 'white';
export declare const HEADING_COLORS: {
  [key: string]: HeadingColor;
};
