import { ListenerAbstract } from '../types/listener';
import { rIC } from '../helpers';
export class BalSwipeListener extends ListenerAbstract {
  async connect(el) {
    super.connect(el);
    await this.loadLib();
    if (this.PointerListenerLib) {
      this.pointerListener = new this.PointerListenerLib(el, {});
      this.pointerListener.on('swipeleft', () => this.notify({ left: true, right: false }));
      this.pointerListener.on('swiperight', () => this.notify({ left: false, right: true }));
    }
  }
  disconnect() {
    var _a;
    super.disconnect();
    (_a = this.pointerListener) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  async loadLib() {
    return new Promise((resolve, reject) => {
      rIC(async () => {
        import('contactjs')
          .then(module => {
          this.PointerListenerLib = module.PointerListener;
          resolve();
        })
          .catch(reject);
      });
    });
  }
}
