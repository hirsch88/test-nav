import { BalTabOption } from './bal-tab.type';
interface Option {
  value: string;
  label: string;
  href?: string;
  target?: BalProps.BalButtonTarget;
  active?: boolean;
  disabled?: boolean;
  done?: boolean;
  hidden?: boolean;
  failed?: boolean;
  prevent?: boolean;
}
export declare const newBalTabOption: (option: Option) => BalTabOption;
export {};
