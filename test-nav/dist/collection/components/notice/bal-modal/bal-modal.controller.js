import { getOverlays } from '../../../utils/overlays/overlays';
import { componentOnReady, getAppRoot } from '../../../utils/helpers';
import { getOverlay } from '../../../utils/overlays/overlays';
import { balBrowser } from '../../../utils/browser';
export * from './bal-modal.type';
export class BalModalController {
  constructor() {
    this.tag = 'bal-modal';
  }
  create(options) {
    if (typeof customElements !== 'undefined' && balBrowser.hasDocument) {
      return customElements.whenDefined(this.tag).then(() => {
        const element = document.createElement(this.tag);
        Object.assign(element, options);
        getAppRoot(document).appendChild(element);
        return new Promise(resolve => componentOnReady(element, resolve));
      });
    }
    return Promise.resolve();
  }
  async dismissAll(data, role) {
    if (balBrowser.hasDocument) {
      const overlays = getOverlays(document, this.tag);
      await Promise.all(overlays.map(o => o.dismiss(data, role)));
    }
  }
  dismiss(data, role, id) {
    if (balBrowser.hasDocument) {
      const overlay = getOverlay(document, this.tag, id);
      if (!overlay) {
        return Promise.reject('overlay does not exist');
      }
      return overlay.dismiss(data, role);
    }
    return Promise.resolve(false);
  }
  async getTop() {
    if (balBrowser.hasDocument) {
      return getOverlay(document, this.tag);
    }
    return;
  }
}
export const balModalController = new BalModalController();
