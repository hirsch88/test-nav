import { FunctionalComponent } from '../../../stencil-public-runtime';
import { BalTabOption } from '../bal-tab.type';
export interface TabLabelProps {
  item: BalTabOption;
  inverted: boolean;
  isMobile: boolean;
  isVertical: boolean;
  hasBubble: boolean;
  context?: BalProps.BalTabsContext;
}
export declare const TabLabel: FunctionalComponent<TabLabelProps>;
