import { FunctionalComponent } from '../../../stencil-public-runtime';
export interface LargeControlProps {
  isFirst: boolean;
  isLast: boolean;
  inverted: boolean;
  areControlsHidden: boolean;
  leftControlTitle: string;
  rightControlTitle: string;
  onPreviousClick: () => void;
  onNextClick: () => void;
}
export declare const LargeControl: FunctionalComponent<LargeControlProps>;
