import { FunctionalComponent } from '../../../stencil-public-runtime';
import { BalTabOption } from '../bal-tab.type';
export interface TabSelectProps {
  items: BalTabOption[];
  value: string | undefined;
  onSelectTab: (ev: MouseEvent, tab: BalTabOption) => void;
}
export declare const TabSelect: FunctionalComponent<TabSelectProps>;
