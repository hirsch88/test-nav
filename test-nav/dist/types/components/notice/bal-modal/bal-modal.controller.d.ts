import { ModalOptions } from './bal-modal.type';
export * from './bal-modal.type';
export declare class BalModalController {
  tag: string;
  create(options: ModalOptions): Promise<HTMLBalModalElement>;
  dismissAll(data?: any, role?: string): Promise<void>;
  dismiss(data?: any, role?: string, id?: string): Promise<boolean>;
  getTop(): Promise<HTMLBalModalElement | undefined>;
}
export declare const balModalController: BalModalController;
