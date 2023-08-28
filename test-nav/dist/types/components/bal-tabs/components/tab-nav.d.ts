import { FunctionalComponent } from '../../../stencil-public-runtime';
import { BalTabOption } from '../bal-tab.type';
export interface TabNavProps {
  items: BalTabOption[];
  tabsId: string;
  hasCarousel: boolean;
  isVertical: boolean;
  inNavbar: boolean;
  isMobile: boolean;
  isTouch: boolean;
  lineActive: boolean;
  border: boolean;
  accordion: boolean;
  isAccordionOpen: boolean;
  inverted: boolean;
  clickable: boolean;
  animated: boolean;
  spaceless: boolean;
  expanded: boolean;
  verticalColSize: BalProps.BalTabsColSize;
  iconPosition: BalProps.BalTabsIconPosition;
  context?: BalProps.BalTabsContext;
  onSelectTab: (ev: MouseEvent, tab: BalTabOption) => void;
}
export declare const TabNav: FunctionalComponent<TabNavProps>;
