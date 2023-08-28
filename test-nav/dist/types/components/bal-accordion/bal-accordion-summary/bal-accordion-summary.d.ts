import { ComponentInterface } from '../../../stencil-public-runtime';
import { Loggable, LogInstance } from '../../../utils/log';
import { AccordionState } from '../../../interfaces';
export declare class AccordionSummary implements ComponentInterface, Loggable {
  private componentId;
  el?: HTMLElement;
  parentAccordionId?: string;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  trigger: boolean;
  active: boolean;
  state: AccordionState;
  connectedCallback(): void;
  disconnectedCallback(): void;
  private get parentAccordionElement();
  private updateAccordionId;
  private onClick;
  render(): any;
}
