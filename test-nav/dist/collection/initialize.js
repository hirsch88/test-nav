import { balToastController } from './components/notice/bal-toast/bal-toast.controller';
import { balSnackbarController } from './components/notice/bal-snackbar/bal-snackbar.controller';
import { initialize, initStyleMode } from './utils/config';
import { VERSION } from './utils/constants/version.constant';
import { balBrowser } from './utils/browser';
import { balBreakpoints } from './utils/breakpoints';
export const initializeBaloiseDesignSystem = (initConfig = {}) => {
  if (balBrowser.hasWindow) {
    const win = window;
    win.BaloiseDesignSystem = win.BaloiseDesignSystem || {};
    initialize(initConfig, win);
    balBreakpoints.detect();
    win.BaloiseDesignSystem.toastController = balToastController;
    win.BaloiseDesignSystem.snackbarController = balSnackbarController;
    win.BaloiseDesignSystem.initialize = () => initialize(win.BaloiseDesignSystem.config, win);
    win.BaloiseDesignSystem.version = VERSION;
    const onReady = () => {
      if (balBrowser.hasDocument) {
        const body = document.querySelector('.bal-body');
        if (body && body.classList) {
          body.classList.add('is-ready');
        }
      }
    };
    if (win.addEventListener) {
      let isAppReady = false;
      let styleMode = 'css';
      const app = document.querySelector('.bal-app');
      if (app) {
        isAppReady = (app === null || app === void 0 ? void 0 : app.getAttribute('ready')) === '';
        if ((app === null || app === void 0 ? void 0 : app.getAttribute('mode')) !== null) {
          styleMode = app === null || app === void 0 ? void 0 : app.getAttribute('mode');
        }
      }
      initStyleMode(styleMode);
      if (isAppReady) {
        onReady();
      }
      else {
        win.addEventListener('balAppLoad', () => onReady());
      }
    }
  }
};
