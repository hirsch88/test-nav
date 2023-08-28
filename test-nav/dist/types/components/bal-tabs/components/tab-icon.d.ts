import { FunctionalComponent } from '../../../stencil-public-runtime';
import { BalTabOption } from '../bal-tab.type';
export interface TabIconProps {
  item: BalTabOption;
  accordion: boolean;
  isAccordionOpen?: boolean;
  isMobile: boolean;
  inverted: boolean;
  hasBubble: boolean;
}
export declare const TabIcon: FunctionalComponent<TabIconProps>;
