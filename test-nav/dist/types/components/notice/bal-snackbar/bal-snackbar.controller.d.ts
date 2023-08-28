import { Components } from '../../../components';
import { BalNoticeController, BalNoticeOptions } from '../../../utils/overlays/notice.controller';
export interface BalSnackbarOptions extends BalNoticeOptions {
  icon: string;
  subject: string;
  action?: string;
  actionHandler?: () => void;
}
export declare class BalSnackbarController extends BalNoticeController {
  constructor();
  create(options: BalSnackbarOptions): Components.BalSnackbar;
}
export declare const balSnackbarController: BalSnackbarController;
