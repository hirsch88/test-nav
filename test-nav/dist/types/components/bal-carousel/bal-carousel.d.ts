import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { BalBreakpointObserver, BalBreakpoints } from '../../utils/breakpoints';
import { BalSwipeInfo, BalSwipeObserver } from '../../utils/swipe';
import { BalMutationObserver } from '../../utils/mutation';
import { BalResizeObserver } from '../../utils/resize';
import { BalConfigState } from '../../interfaces';
import { BalLanguage } from '../../utils/config';
export declare class Carousel implements ComponentInterface, BalBreakpointObserver, BalSwipeObserver, BalMutationObserver, BalResizeObserver {
  private containerEl?;
  private innerEl?;
  private borderEl?;
  private previousTransformValue;
  private currentRaf;
  private carouselId;
  isLastSlideVisible: boolean;
  areControlsHidden: boolean;
  language: BalLanguage;
  el: HTMLElement;
  value: number;
  steps: number;
  itemsPerView: 'auto' | 1 | 2 | 3 | 4;
  controls: 'small' | 'large' | 'dots' | 'tabs' | 'none';
  controlsOverflow: boolean;
  inverted: boolean;
  fullHeight: boolean;
  aspectRatio?: '1by1' | '3by2' | '4by3' | '16by9';
  interface: 'card' | 'image' | 'product' | '';
  controlsSticky: boolean;
  scrollY: boolean;
  border: boolean;
  balChange: EventEmitter<BalEvents.BalCarouselChangeDetail>;
  blockVerticalScrolling(ev: any): Promise<void>;
  mutationObserverActive: boolean;
  mutationListener(): void;
  swipeListener({ left, right }: BalSwipeInfo): void;
  breakpointListener(breakpoints: BalBreakpoints): void;
  resizeListener(): void;
  configChanged(state: BalConfigState): Promise<void>;
  previous(steps?: number): Promise<void>;
  next(steps?: number): Promise<void>;
  private animate;
  private buildSlide;
  private itemsChanged;
  private getAllItemData;
  private getAllItemElements;
  private getAllControlItems;
  private hasShadow;
  private hasShadowLeft;
  private hasShadowRight;
  private isFirst;
  private isLast;
  private onPreviousButtonClick;
  private onNextButtonClick;
  private onControlChange;
  render(): any;
}
