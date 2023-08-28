import { ListenerAbstract } from '../types/listener';
import { MutationObserverOptions } from './mutation.interfaces';
export declare class BalMutationListener extends ListenerAbstract {
  private tags;
  private mutationObserver;
  private mutationObserverInit;
  constructor(options: Partial<MutationObserverOptions>);
  connect(el: HTMLElement): void;
  disconnect(): void;
  private mutationCallback;
  private destroyMutationObserver;
}
