import { FunctionalComponent } from '../../../stencil-public-runtime';
import { BalStepOption } from '../bal-step.type';
export interface StepButtonProps {
  item: BalStepOption;
  isMobile: boolean;
  clickable: boolean;
  onSelectTab: (ev: MouseEvent, item: BalStepOption) => void;
}
export declare const StepButton: FunctionalComponent<StepButtonProps>;
