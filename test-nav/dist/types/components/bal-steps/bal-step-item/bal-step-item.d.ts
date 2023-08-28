import { EventEmitter } from '../../../stencil-public-runtime';
import { Attributes } from '../../../utils/attributes';
import { BalStepOption } from '../bal-step.type';
export declare class StepItem {
  private inheritAttributes;
  el: HTMLElement;
  isActive: boolean;
  active: boolean;
  value: string;
  label: string;
  href: string;
  target: BalProps.BalButtonTarget;
  disabled: boolean;
  done: boolean;
  hidden: boolean;
  failed: boolean;
  prevent: boolean;
  balNavigate: EventEmitter<BalEvents.BalStepItemNavigateDetail>;
  componentWillLoad(): void;
  getOptions(): Promise<BalStepOption>;
  setActive(active: boolean): Promise<void>;
  get options(): {
    value: string;
    label: string;
    href: string;
    target: BalProps.BalButtonTarget;
    active: boolean;
    disabled: boolean;
    done: boolean;
    hidden: boolean;
    failed: boolean;
    passed: boolean;
    prevent: boolean;
    navigate: EventEmitter<MouseEvent>;
    trackingData: Attributes;
  };
  render(): any;
}
