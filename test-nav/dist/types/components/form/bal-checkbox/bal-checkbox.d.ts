import { EventEmitter, ComponentInterface } from '../../../stencil-public-runtime';
import { FormInput } from '../../../utils/form-input';
import { BalCheckboxOption } from './bal-checkbox.type';
import { Loggable, LogInstance } from '../../../utils/log';
import { BalAriaForm, BalAriaFormLinking } from '../../../utils/form';
export declare class Checkbox implements ComponentInterface, FormInput<any>, Loggable, BalAriaFormLinking {
  private inputId;
  private inheritedAttributes;
  private keyboardMode;
  nativeInput?: HTMLInputElement;
  el: HTMLBalCheckboxElement;
  hasLabel: boolean;
  focused: boolean;
  buttonTabindex?: number;
  ariaForm: BalAriaForm;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  name: string;
  label: string;
  invisible: boolean;
  labelHidden: boolean;
  flat: boolean;
  interface: BalProps.BalCheckboxInterface;
  value: string | number;
  checked: boolean;
  private initialValue;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  hidden: boolean;
  invalid: boolean;
  hovered: boolean;
  pressed: boolean;
  balFocus: EventEmitter<BalEvents.BalCheckboxFocusDetail>;
  balBlur: EventEmitter<BalEvents.BalCheckboxBlurDetail>;
  balChange: EventEmitter<BalEvents.BalCheckboxChangeDetail>;
  connectedCallback(): void;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  listenOnClick(ev: UIEvent): void;
  resetHandler(ev: UIEvent): void;
  setFocus(): Promise<void>;
  setBlur(): Promise<void>;
  getInputElement(): Promise<HTMLInputElement | undefined>;
  getOption(): Promise<BalCheckboxOption>;
  setButtonTabindex(value: number): Promise<void>;
  updateState(): Promise<void>;
  setAriaForm(ariaForm: BalAriaForm): Promise<void>;
  get option(): {
    name: string;
    value: string | number;
    checked: boolean;
    label: string;
    labelHidden: boolean;
    flat: boolean;
    interface: BalProps.BalCheckboxGroupInterface;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    hidden: boolean;
    invisible: boolean;
    invalid: boolean;
  };
  get group(): HTMLBalCheckboxGroupElement | null;
  get checkboxButton(): HTMLBalCheckboxButtonElement | null;
  private toggleChecked;
  private onKeypress;
  private onClick;
  private onFocus;
  private onBlur;
  private onPointerDown;
  private onKeydown;
  render(): any;
}