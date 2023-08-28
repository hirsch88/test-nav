import { Components } from '../../../components';
import { BalNoticeController, BalNoticeOptions } from '../../../utils/overlays/notice.controller';
export type BalToastOptions = BalNoticeOptions;
export declare class BalToastController extends BalNoticeController {
  constructor();
  create(options: BalToastOptions): Components.BalToast;
}
export declare const balToastController: BalToastController;
