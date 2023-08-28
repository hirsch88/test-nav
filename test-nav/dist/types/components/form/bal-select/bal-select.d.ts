import { EventEmitter, ComponentInterface } from '../../../stencil-public-runtime';
import { BalOptionValue } from './utils/bal-option.type';
import { Loggable, LogInstance } from '../../../utils/log';
import { BalAriaForm, BalAriaFormLinking } from '../../../utils/form';
export interface BalOptionController extends BalOptionValue {
  id: string;
  textContent: string;
  innerHTML: string;
}
export declare class Select implements ComponentInterface, Loggable, BalAriaFormLinking {
  private inputElement;
  private nativeSelectEl;
  private popoverElement;
  private selectionEl;
  private didInit;
  private inputId;
  private clearScrollToValue;
  private clearSelectValue;
  private mutationO?;
  private initialValue?;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  private el;
  hasFocus: boolean;
  inputValue: string;
  focusIndex: number;
  isPopoverOpen: boolean;
  options: Map<string, BalOptionController>;
  labelToScrollTo: string;
  labelToSelectTo: string;
  ariaForm: BalAriaForm;
  name: string;
  invalid: boolean;
  filter: BalProps.BalSelectFilter;
  balTabindex: number;
  freeSolo: boolean;
  multiple: boolean;
  maxLength?: number;
  noDataLabel?: string;
  autocomplete: BalProps.BalInputAutocomplete;
  typeahead: boolean;
  selectionOptional: boolean;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  inverted: boolean;
  placeholder?: string;
  scrollable: number;
  loading: boolean;
  remote: boolean;
  value?: string | string[];
  rawValue: string[] | undefined;
  valueWatcher(): void;
  updateRawValue(newValue: string[], isHuman?: boolean): void;
  private emitChangeEvent;
  balChange: EventEmitter<BalEvents.BalSelectChangeDetail>;
  balInputClick: EventEmitter<BalEvents.BalSelectInputClickDetail>;
  balInput: EventEmitter<BalEvents.BalSelectInputDetail>;
  balBlur: EventEmitter<BalEvents.BalSelectBlurDetail>;
  balFocus: EventEmitter<BalEvents.BalSelectFocusDetail>;
  balCancel: EventEmitter<BalEvents.BalSelectCancelDetail>;
  balKeyPress: EventEmitter<BalEvents.BalSelectKeyPressDetail>;
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  listenOnClick(ev: UIEvent): void;
  private resetHandlerTimer?;
  resetHandler(ev: UIEvent): void;
  handleKeyDown(ev: KeyboardEvent): Promise<void>;
  setFocus(): Promise<void>;
  getValue(): Promise<string[] | undefined>;
  clear(): Promise<void>;
  open(): Promise<void>;
  close(): Promise<void>;
  cancel(): Promise<void>;
  select(value: string): Promise<void>;
  setAriaForm(ariaForm: BalAriaForm): Promise<void>;
  private waitForOptionsAndThenUpdateRawValuesTimer?;
  private waitForOptionsAndThenUpdateRawValues;
  private updateOptions;
  private setFocusTimer?;
  private get optionArray();
  private hasOptions;
  private get inputPlaceholder();
  private getChildOpts;
  private getPopoverContent;
  private updateFocusTimer?;
  private updateFocus;
  private scrollToFocusedOption;
  private scrollTo;
  private selectedFocusedOption;
  private navigateWithArrowKey;
  private focusOptionByLabel;
  private selectOptionByLabel;
  private selectLabel;
  private scrollToLabel;
  private syncRawValue;
  private blurSelect;
  private optionSelected;
  private updateValue;
  private removeValue;
  private validateAfterBlur;
  private syncNativeInput;
  private updateInputValueTimer?;
  private updateInputValue;
  private handleClick;
  private handlePopoverChange;
  private handleInputBlur;
  private handleInputFocus;
  private isChipClicked;
  private handleInputClick;
  private handleKeyPress;
  private handleInputChange;
  private handleInput;
  private handleOptionMouseEnter;
  private isInsideOfFooter;
  render(): any;
}
