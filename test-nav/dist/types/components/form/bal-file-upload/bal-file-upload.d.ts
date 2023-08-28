import { EventEmitter } from '../../../stencil-public-runtime';
import { FormInput } from '../../../utils/form-input';
import { LogInstance } from '../../../utils/log';
import { BalAriaForm, BalAriaFormLinking } from '../../../utils/form';
export declare class FileUpload implements FormInput<File[]>, BalAriaFormLinking {
  el: HTMLElement;
  private fileUploadId;
  nativeInput: HTMLInputElement | undefined;
  private labelEl;
  files: File[];
  focused: boolean;
  ariaForm: BalAriaForm;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  name: string;
  value: File[];
  private initialValue;
  onValueChange(): void;
  label: string;
  multiple: boolean;
  disabled: boolean;
  readonly: boolean;
  loading: boolean;
  required: boolean;
  accept?: string;
  maxFiles?: number;
  maxFileSize?: number;
  maxBundleSize?: number;
  hasFileList: boolean;
  invalid: boolean;
  subTitle?: (file: File) => string;
  balChange: EventEmitter<BalEvents.BalFileUploadChangeDetail>;
  balFilesAdded: EventEmitter<BalEvents.BalFileUploadFilesAddedDetail>;
  balFilesRemoved: EventEmitter<BalEvents.BalFileUploadFilesRemovedDetail>;
  balRejectedFile: EventEmitter<BalEvents.BalFileUploadRejectedFileDetail>;
  balInputClick: EventEmitter<BalEvents.BalFileUploadInputClickDetail>;
  balBlur: EventEmitter<BalEvents.BalFileUploadBlurDetail>;
  balFocus: EventEmitter<BalEvents.BalFileUploadFocusDetail>;
  componentWillLoad(): void;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private resetHandlerTimer?;
  resetHandler(ev: UIEvent): void;
  clear(): Promise<void>;
  setFocus(): Promise<void>;
  setBlur(): Promise<void>;
  getInputElement(): Promise<HTMLInputElement | undefined>;
  setAriaForm(ariaForm: BalAriaForm): Promise<void>;
  private addEventListenerDragAndDrop;
  private removeEventListenerDragAndDrop;
  private handleFiles;
  private updateFileInput;
  private onDragenter;
  private onDragover;
  private onDrop;
  private onInputChange;
  private onRemoveFile;
  private onHostClick;
  private onInputFocus;
  private onInputBlur;
  private onInputClick;
  render(): any;
}
