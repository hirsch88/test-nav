import { ComponentInterface, EventEmitter } from '../../../stencil-public-runtime';
import { LevelInfo } from '../utils/level.utils';
export declare class NavigationLevelBlockItem implements ComponentInterface {
  private inheritAttributes;
  el: HTMLElement;
  label: string;
  value: string;
  link?: string;
  linkLabel?: string;
  target: BalProps.BalButtonTarget;
  balClick: EventEmitter<BalEvents.BalNavigationLevelBlockItemClickDetail>;
  componentWillLoad(): void;
  getLevelInfo(): Promise<LevelInfo>;
  render(): any;
}
