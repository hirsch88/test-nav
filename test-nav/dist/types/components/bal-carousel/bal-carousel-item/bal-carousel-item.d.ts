import { ComponentInterface, EventEmitter } from '../../../stencil-public-runtime';
import { BalCarouselItemData } from '../bal-carousel.type';
export declare class CarouselItem implements ComponentInterface {
  private imageInheritAttributes;
  el: HTMLElement;
  src?: string;
  label: string;
  elementType: BalProps.BalButtonElementType;
  name?: string;
  value?: string | number;
  href?: string;
  target: BalProps.BalButtonTarget;
  rel?: string;
  download?: string;
  color?: BalProps.BalCarouselItemColor;
  balNavigate: EventEmitter<BalEvents.BalCarouselItemNavigateDetail>;
  balFocus: EventEmitter<BalEvents.BalCarouselItemFocusDetail>;
  balBlur: EventEmitter<BalEvents.BalCarouselItemBlurDetail>;
  componentWillLoad(): void;
  getData(): Promise<BalCarouselItemData>;
  private onClick;
  private onFocus;
  private onBlur;
  render(): any;
}
