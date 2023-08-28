import { BalNoticeController } from '../../../utils/overlays/notice.controller';
export class BalSnackbarController extends BalNoticeController {
  constructor() {
    super({
      tag: 'bal-snackbar',
    });
  }
  create(options) {
    return super.create(options);
  }
}
export const balSnackbarController = new BalSnackbarController();
