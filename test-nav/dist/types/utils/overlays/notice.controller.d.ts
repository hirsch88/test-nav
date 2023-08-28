import { HTMLStencilElement } from '../../stencil-public-runtime';
export interface BalNoticeOptions {
  message: string;
  duration?: number;
  color?: BalProps.BalNotificationColor | '';
  closeHandler?: () => void;
}
export interface NoticeOptions {
  tag: string;
}
export interface HTMLNoticeElement extends HTMLStencilElement {
  message: string;
  color: string;
  close: () => Promise<void>;
}
export declare abstract class BalNoticeController {
  private options;
  private container;
  private queue;
  private preQueue;
  private queueLimit;
  constructor(options: NoticeOptions);
  create(options: BalNoticeOptions): any;
  setQueue(queueLimit: number): void;
  dismissAll(): Promise<void>;
  clearAll(): Promise<void>;
  private findClone;
  private setupContainer;
  private updateQueue;
  private removeFromQueue;
}
