import { EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { BalTabOption } from './bal-tab.type';
import { BalConfigObserver, BalConfigState } from '../../utils/config';
import { Loggable, LogInstance } from '../../utils/log';
import { BalBreakpointObserver, BalBreakpoints } from '../../utils/breakpoints';
import { BalMutationObserver } from '../../utils/mutation';
import { AccordionState } from '../../interfaces';
import { BalResizeObserver } from '../../utils/resize';
export declare class Tabs implements ComponentInterface, Loggable, BalConfigObserver, BalMutationObserver, BalBreakpointObserver, BalResizeObserver {
  private contentEl;
  private contentElWrapper;
  private tabsId;
  private currentRaf;
  el: HTMLElement;
  isAccordionOpen: boolean;
  accordionState: AccordionState;
  isNavbarOpen: boolean;
  inNavbar: boolean;
  inNavbarLight: boolean;
  isMobile: boolean;
  isTablet: boolean;
  store: BalTabOption[];
  animated: boolean;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  float: BalProps.BalTabsFloat;
  fullwidth: boolean;
  accordion: boolean;
  overflow: boolean;
  options: BalTabOption[];
  protected optionChanged(): Promise<void>;
  context?: BalProps.BalTabsContext;
  iconPosition: BalProps.BalTabsIconPosition;
  expanded: boolean;
  spaceless: boolean;
  clickable: boolean;
  border: boolean;
  inverted: boolean;
  debounce: number;
  protected debounceChanged(): void;
  vertical: BalProps.BalTabsVertical;
  verticalColSize: BalProps.BalTabsColSize;
  selectOnMobile: boolean;
  value?: string;
  protected valueChanged(newValue?: string, oldValue?: string): Promise<void>;
  balChange: EventEmitter<BalEvents.BalTabsChangeDetail>;
  balWillAnimate: EventEmitter<BalEvents.BalTabsWillAnimateDetail>;
  balDidAnimate: EventEmitter<BalEvents.BalTabsDidAnimateDetail>;
  connectedCallback(): void;
  componentDidLoad(): void;
  mutationObserverActive: boolean;
  mutationListener(): void;
  breakpointListener(breakpoints: BalBreakpoints): void;
  resizeListener(): void;
  listenToWillAnimate(ev: UIEvent): void;
  listenToDidAnimate(ev: UIEvent): void;
  isUsedInNavbar(ev: UIEvent): void;
  configChanged(state: BalConfigState): Promise<void>;
  select(tab: BalTabOption): Promise<void>;
  getOptionByValue(value: string): Promise<BalTabOption | undefined>;
  renderLine(): Promise<void>;
  closeAccordion(): Promise<void>;
  private get items();
  private getOptions;
  private updateStore;
  private setActiveItem;
  private setActiveContent;
  private isActive;
  private parseVertical;
  private isVertical;
  private getTargetElement;
  private getLineElement;
  private getBorderElement;
  private getCarouselElement;
  private getLineSize;
  private getOffset;
  private animateLine;
  private toggleAccordionState;
  private expandAccordion;
  private collapseAccordion;
  private shouldAnimate;
  private onOptionChange;
  private onSelectTab;
  render(): any;
}