import { FunctionalComponent } from '../../../stencil-public-runtime';
export interface DotControlItem {
  value: number;
}
export interface DotControlProps {
  value: number;
  items: DotControlItem[];
  onControlChange: (item: DotControlItem) => void;
}
export declare const DotControl: FunctionalComponent<DotControlProps>;
