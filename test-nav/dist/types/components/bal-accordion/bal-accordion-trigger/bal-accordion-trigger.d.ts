import { ComponentInterface } from '../../../stencil-public-runtime';
import { Loggable, LogInstance } from '../../../utils/log';
import { AccordionState } from '../../../interfaces';
export declare class AccordionTrigger implements ComponentInterface, Loggable {
  private componentId;
  el?: HTMLElement;
  parentAccordionId?: string;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  button: boolean;
  openLabel: string;
  openIcon: string;
  closeLabel: string;
  closeIcon: string;
  color: BalProps.BalButtonColor;
  size: BalProps.BalButtonSize;
  active: boolean;
  state: AccordionState;
  connectedCallback(): void;
  componentWillRender(): void;
  private get parentAccordionElement();
  private updateAccordionId;
  private onClick;
  render(): any;
}
