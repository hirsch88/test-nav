import { BalOptionValue } from './bal-option.type';
export declare const newBalOptionValue: <T>(value: string, label: string, disabled?: boolean, data?: T | undefined) => BalOptionValue<T>;
export declare const newBalSingleOptionValue: <T>(valueAndLabel: string, disabled?: boolean, data?: T | undefined) => BalOptionValue<T>;
