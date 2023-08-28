import { EventEmitter, ComponentInterface } from '../../../stencil-public-runtime';
import { Loggable, LogInstance } from '../../../utils/log';
export declare class ListItemAccordionHead implements ComponentInterface, Loggable {
  el: HTMLElement;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  accordionOpen: boolean;
  accordionOpenHandler(newValue: boolean, oldValue: boolean): void;
  icon: BalProps.BalListItemAccordionHeadIcon;
  balAccordionChange: EventEmitter<BalEvents.BalListAccordionChangeDetail>;
  private onClick;
  render(): any;
}
