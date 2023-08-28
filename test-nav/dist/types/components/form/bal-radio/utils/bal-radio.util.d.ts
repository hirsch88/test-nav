import { BalRadioOption } from '../bal-radio.type';
type HtmlFunction = () => string;
interface Option {
  value: any;
  label: HtmlFunction | string;
  name?: string;
  labelHidden?: boolean;
  flat?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  hidden?: boolean;
  invalid?: boolean;
  interface?: BalProps.BalRadioInterface;
}
export declare const newBalRadioOption: (option: Option) => BalRadioOption;
export {};
