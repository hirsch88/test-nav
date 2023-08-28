import { FunctionalComponent } from '../../../stencil-public-runtime';
export interface TabControlItem {
  label: string;
  value: number;
}
export interface TabControlProps {
  value: number;
  items: TabControlItem[];
  onControlChange: (item: TabControlItem) => void;
}
export declare const TabControl: FunctionalComponent<TabControlProps>;
