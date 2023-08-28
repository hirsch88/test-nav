import { SingleSubject } from '../types/signal';
import { BalMutationObserver, MutationObserverOptions } from './mutation.interfaces';
export declare class BalMutationSubject extends SingleSubject<BalMutationObserver> {
  private options;
  private listener?;
  private debouncedNotify;
  constructor(options: Partial<MutationObserverOptions>);
  attach(observer: BalMutationObserver): void;
  detach(): void;
}
