import { ComponentInterface, EventEmitter } from '../../../stencil-public-runtime';
import { LevelInfo } from '../utils/level.utils';
export declare class NavigationLevelMeta implements ComponentInterface {
  private inheritAttributes;
  el: HTMLElement;
  label: string;
  value: string;
  link?: string;
  linkLabel?: string;
  isTabLink?: boolean;
  balClick: EventEmitter<BalEvents.BalNavigationLevelMetaClickDetail>;
  componentWillLoad(): void;
  getLevelInfo(): Promise<LevelInfo>;
  render(): any;
}
