import { ComponentInterface, EventEmitter } from '../../../stencil-public-runtime';
import { LevelInfo } from '../utils/level.utils';
export declare class NavigationLevelBlock implements ComponentInterface {
  private inheritAttributes;
  el: HTMLElement;
  label: string;
  value: string;
  color: BalProps.BalNavigationLevelBlockColor;
  link?: string;
  linkLabel?: string;
  target: BalProps.BalButtonTarget;
  balClick: EventEmitter<BalEvents.BalNavigationLevelBlockClickDetail>;
  componentWillLoad(): void;
  getLevelInfo(): Promise<LevelInfo>;
  render(): any;
}
