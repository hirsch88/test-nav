import { EventEmitter } from '../../stencil-public-runtime';
import { BalMode } from '../../utils/config';
import { Loggable, LogInstance } from '../../utils/log';
export declare class App implements Loggable {
  private focusVisible?;
  private debouncedNotify;
  el?: HTMLElement;
  log: LogInstance;
  createLogger(log: LogInstance): void;
  mode: BalMode;
  animated: boolean;
  ready: boolean;
  balAppLoad: EventEmitter<BalEvents.BalAppLoadDetail>;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  setFocus(elements: HTMLElement[]): Promise<void>;
  notifyResize: () => Promise<void>;
  render(): any;
}
