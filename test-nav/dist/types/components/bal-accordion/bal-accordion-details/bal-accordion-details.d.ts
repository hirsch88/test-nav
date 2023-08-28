import { ComponentInterface } from '../../../stencil-public-runtime';
import { Loggable, LogInstance } from '../../../utils/log';
import { AccordionState } from '../../../interfaces';
export declare class AccordionDetail implements ComponentInterface, Loggable {
  private componentId;
  el?: HTMLElement;
  log: LogInstance;
  parentAccordionId?: string;
  createLogger(log: LogInstance): void;
  state: AccordionState;
  active: boolean;
  animated: boolean;
  connectedCallback(): void;
  componentWillRender(): void;
  private get parentAccordionElement();
  private updateAccordionId;
  render(): any;
}
