import { BalCheckboxOption } from '../bal-checkbox.type';
type HtmlFunction = () => string;
interface Option {
  value: any;
  label: HtmlFunction | string;
  name?: string;
  checked?: boolean;
  labelHidden?: boolean;
  flat?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  hidden?: boolean;
  invalid?: boolean;
  interface?: BalProps.BalCheckboxInterface;
}
export declare const newBalCheckboxOption: (option: Option) => BalCheckboxOption;
export {};
