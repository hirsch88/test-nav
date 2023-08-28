import { ComponentInterface } from '../../../stencil-public-runtime';
import { LevelInfo } from '../utils/level.utils';
export declare class NavigationLevels implements ComponentInterface {
  el: HTMLElement;
  getLevelInfos(): Promise<LevelInfo[]>;
  render(): any;
}
