import { Subject } from './signal';
export type ListenerFn = () => void;
export declare abstract class ListenerAbstract<TListener = ListenerFn, TData = undefined> extends Subject<TListener, TData> {
  el?: HTMLElement | Window | Document;
  connect(el?: HTMLElement | Window | Document): void;
  disconnect(): void;
  add(listener: TListener): void;
  remove(listener: TListener): void;
}
