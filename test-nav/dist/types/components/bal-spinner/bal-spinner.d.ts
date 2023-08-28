import { ComponentInterface } from '../../stencil-public-runtime';
import { Loggable, LogInstance } from '../../utils/log';
export declare class Spinner implements ComponentInterface, Loggable {
  private animationItem;
  private animationFunction?;
  private currentRaf;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  el: HTMLElement;
  inverted: boolean;
  deactivated: boolean;
  deactivatedWatcher(newValue: boolean, oldValue: boolean): void;
  color: 'blue' | 'white';
  small: boolean;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private animate;
  private destroy;
  private shouldAnimate;
  private load;
  private getColor;
  render(): any;
}
