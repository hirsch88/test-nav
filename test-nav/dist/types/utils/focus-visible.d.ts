export declare const FOCUS_KEYS: string[];
export declare const focusableQueryString = "[tabindex]:not([tabindex^=\"-\"]), input:not([type=hidden]):not([tabindex^=\"-\"]), textarea:not([tabindex^=\"-\"]), button:not([tabindex^=\"-\"]), select:not([tabindex^=\"-\"]), .bal-focusable:not([tabindex^=\"-\"])";
export declare const startFocusVisible: (rootEl?: HTMLElement) => {
  destroy: () => void;
  setFocus: (elements: Element[]) => void;
};
