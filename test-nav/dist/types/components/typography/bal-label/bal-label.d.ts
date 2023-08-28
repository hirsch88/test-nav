import { ComponentInterface } from '../../../stencil-public-runtime';
import { BalConfigObserver, BalConfigState, BalLanguage, BalRegion } from '../../../utils/config';
import { Loggable, LogInstance } from '../../../utils/log';
import { BalElementStateInfo } from '../../../utils/element-states';
import { BalAriaFormLinking, BalAriaForm } from '../../../utils/form';
export declare class BalLabel implements ComponentInterface, Loggable, BalConfigObserver, BalElementStateInfo, BalAriaFormLinking {
  el: HTMLElement;
  private inputId;
  language: BalLanguage;
  region: BalRegion;
  ariaForm: BalAriaForm;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  htmlFor?: string;
  required: boolean;
  noWrap: boolean;
  multiline: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  size: BalProps.BalLabelSize;
  weight: BalProps.BalLabelWeight;
  hovered: boolean;
  pressed: boolean;
  configChanged(state: BalConfigState): Promise<void>;
  setAriaForm(ariaForm: BalAriaForm): Promise<void>;
  render(): any;
}
