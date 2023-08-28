interface ScrollToFirstInvalidFieldOptions {
  formEl: HTMLElement;
  selector?: string;
}
export declare const scrollToFirstInvalidField: (options: ScrollToFirstInvalidFieldOptions) => void;
export interface BalAriaForm {
  controlId?: string;
  labelId?: string;
  messageId?: string;
}
export interface BalAriaFormLinking {
  ariaForm: BalAriaForm;
  setAriaForm(ariaForm: BalAriaForm): Promise<void>;
}
export declare const defaultBalAriaForm: BalAriaForm;
export {};
