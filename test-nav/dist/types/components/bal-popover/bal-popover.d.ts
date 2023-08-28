/// <reference types="node" />
import { EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { LogInstance, Loggable } from '../../utils/log';
import { BalBreakpointObserver, BalBreakpoints } from '../../utils/breakpoints';
export interface PopoverPresentOptions {
  force: boolean;
}
export declare class Popover implements ComponentInterface, Loggable, BalBreakpointObserver {
  private popoverId;
  private popperInstance;
  private backdropElement?;
  element: HTMLElement;
  isTouch: boolean;
  isInMainNav: boolean;
  backdropHeight: number;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  autoTrigger: boolean;
  hint: boolean;
  hover: boolean;
  arrow: boolean;
  backdrop: boolean;
  tooltip: boolean;
  offsetX: number;
  offsetY: number;
  padding: number;
  position: BalProps.BalPopoverPlacement;
  active: boolean;
  mobileTop: boolean;
  protected activeChanged(newValue: boolean, oldValue: boolean): Promise<void>;
  balChange: EventEmitter<BalEvents.BalPopoverChangeDetail>;
  balWillAnimate: EventEmitter<BalEvents.BalPopoverWillAnimateDetail>;
  balDidAnimate: EventEmitter<BalEvents.BalPopoverDidAnimateDetail>;
  balPopoverPrepare: EventEmitter<string>;
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentDidRenderTimer?: NodeJS.Timer;
  componentDidRender(): void;
  handlePopoverPrepare(ev: CustomEvent<string>): void;
  clickOnOutside(ev: UIEvent): Promise<void>;
  handleKeyUp(ev: KeyboardEvent): void;
  tabOutside(ev: KeyboardEvent): Promise<void>;
  breakpointListener(breakpoints: BalBreakpoints): void;
  present(options?: PopoverPresentOptions): Promise<void>;
  dismiss(options?: PopoverPresentOptions): Promise<void>;
  toggle(options?: PopoverPresentOptions): Promise<void>;
  private get footMobileNav();
  private get modifierOffset();
  private get modifierPreventOverflow();
  private get triggerElement();
  private get menuElement();
  private get menuInnerElement();
  private getBackdropHeight;
  private updatePopper;
  render(): any;
}
