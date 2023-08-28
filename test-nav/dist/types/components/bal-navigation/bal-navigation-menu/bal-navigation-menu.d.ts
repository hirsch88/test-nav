import { LevelInfo } from '../utils/level.utils';
import { Attributes } from '../../../utils/attributes';
export declare class NavigationMenu {
  linkHref?: string;
  linkName?: string;
  target: BalProps.BalButtonTarget;
  elements: LevelInfo[];
  tracking: Attributes;
  render(): any;
}
