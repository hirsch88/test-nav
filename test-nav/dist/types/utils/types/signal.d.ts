export declare abstract class Subject<TObserver, TData = undefined> {
  private notifyCallback?;
  observers: TObserver[];
  constructor(notifyCallback?: ((observer: TObserver, data?: TData) => void) | undefined);
  attach(observer: TObserver): void;
  detach(observer: TObserver): void;
  notify(data?: TData): void;
}
export declare abstract class SingleSubject<TObserver, TData = undefined> {
  private notifyCallback?;
  observer?: TObserver;
  constructor(notifyCallback?: ((observer: TObserver, data?: TData) => void) | undefined);
  attach(observer: TObserver): void;
  detach(): void;
  notify(data?: TData): void;
}
