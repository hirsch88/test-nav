import { BalNoticeController } from '../../../utils/overlays/notice.controller';
export class BalToastController extends BalNoticeController {
  constructor() {
    super({
      tag: 'bal-toast',
    });
  }
  create(options) {
    return super.create(options);
  }
}
export const balToastController = new BalToastController();
