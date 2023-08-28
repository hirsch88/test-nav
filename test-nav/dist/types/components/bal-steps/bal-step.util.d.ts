import { BalStepOption } from './bal-step.type';
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
export declare const newBalStepOption: (option: Option) => BalStepOption;
export {};
