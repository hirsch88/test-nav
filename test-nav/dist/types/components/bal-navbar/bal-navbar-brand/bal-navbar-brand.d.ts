import { EventEmitter } from '../../../stencil-public-runtime';
export declare class NavbarBrand {
  private bodyScrollHandler;
  el: HTMLElement;
  isMenuActive: boolean;
  href?: string;
  target: BalProps.BalButtonTarget;
  simple: boolean;
  logo?: string;
  animated: boolean;
  interface: BalProps.BalNavbarInterface;
  balNavigate: EventEmitter<BalEvents.BalNavbarBrandNavigationChangeDetail>;
  balWillAnimate: EventEmitter<BalEvents.BalNavbarMenuWillAnimateDetail>;
  balDidAnimate: EventEmitter<BalEvents.BalNavbarMenuDidAnimateDetail>;
  connectedCallback(): void;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  resetIsMenuActive(ev: MediaQueryListEvent): Promise<void>;
  toggle(isMenuActive: boolean): Promise<void>;
  onClick(): Promise<void>;
  render(): any;
}
