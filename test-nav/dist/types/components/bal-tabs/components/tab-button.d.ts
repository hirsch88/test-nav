import { FunctionalComponent } from '../../../stencil-public-runtime';
import { BalTabOption } from '../bal-tab.type';
export interface TabButtonProps {
  item: BalTabOption;
  tabsId: string;
  isFirst: boolean;
  isLast: boolean;
  isMobile: boolean;
  isVertical: boolean;
  accordion: boolean;
  isAccordionOpen: boolean;
  inverted: boolean;
  expanded: boolean;
  spaceless: boolean;
  clickable: boolean;
  iconPosition: BalProps.BalTabsIconPosition;
  context?: BalProps.BalTabsContext;
  onSelectTab: (ev: MouseEvent, item: BalTabOption) => void;
}
export declare const TabButton: FunctionalComponent<TabButtonProps>;
