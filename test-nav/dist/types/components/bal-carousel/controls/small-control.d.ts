import { FunctionalComponent } from '../../../stencil-public-runtime';
export interface SmallControlProps {
  isFirst: boolean;
  isLast: boolean;
  inverted: boolean;
  leftControlTitle: string;
  rightControlTitle: string;
  onPreviousClick: () => void;
  onNextClick: () => void;
}
export declare const SmallControl: FunctionalComponent<SmallControlProps>;
