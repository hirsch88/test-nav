import { ComponentInterface, EventEmitter } from '../../../stencil-public-runtime';
import { LevelInfo } from '../utils/level.utils';
export declare class NavigationLevelMain implements ComponentInterface {
  private inheritAttributes;
  el: HTMLElement;
  label: string;
  value: string;
  link?: string;
  linkLabel?: string;
  isTabLink: boolean;
  target: BalProps.BalButtonTarget;
  balClick: EventEmitter<BalEvents.BalNavigationLevelMainClickDetail>;
  componentWillLoad(): void;
  getLevelInfo(): Promise<LevelInfo>;
  render(): any;
}
