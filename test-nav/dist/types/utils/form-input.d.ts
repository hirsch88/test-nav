/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { EventEmitter } from '../stencil-public-runtime';
export interface FormInput<Value> {
  el: HTMLElement;
  disabled: boolean;
  readonly: boolean;
  focused: boolean;
  value?: Value;
  inputValue?: Value;
  nativeInput?: HTMLInputElement | HTMLTextAreaElement;
  balClick?: EventEmitter<MouseEvent>;
  balFocus?: EventEmitter<FocusEvent>;
  balBlur?: EventEmitter<FocusEvent>;
  balChange: EventEmitter<Value>;
}
export declare const stopEventBubbling: (ev: Event) => void;
export declare const getInputTarget: (ev: Event) => HTMLInputElement | null;
export declare const getNativeInputValue: <Value>(component: FormInput<Value>) => string;
export declare const getUpcomingValue: <Value>(component: FormInput<Value>, ev: KeyboardEvent) => string;
export declare const inputSetBlur: <Value>(component: FormInput<Value>) => void;
export declare const inputListenOnClick: <Value>(component: FormInput<Value>, ev: UIEvent) => void;
export declare const inputSetFocus: <Value>(component: FormInput<Value>) => void;
export declare const inputHandleHostClick: <Value>(component: FormInput<Value>, ev: MouseEvent) => void;
export declare const inputHandleClick: <Value>(component: FormInput<Value>, ev: MouseEvent) => void;
export declare const inputHandleFocus: <Value>(component: FormInput<Value>, ev: FocusEvent) => void;
export declare const inputHandleReset: <Value>(component: FormInput<Value>, defaultValue: Value | undefined, timer: NodeJS.Timer | undefined) => void;
export declare const inputHandleBlur: <Value>(component: FormInput<Value>, ev: FocusEvent) => void;
export declare const inputHandleChange: <Value>(component: FormInput<Value>) => void;
