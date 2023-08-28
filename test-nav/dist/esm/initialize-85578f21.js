import { b as balBrowser } from './browser-9199b5e2.js';
import { i as initialize } from './initialize-92ae5fef.js';
import { i as initStyleMode } from './mode-6b82a428.js';
import { b as balBreakpoints } from './breakpoints.subject-52f20b1f.js';

class BalNoticeController {
  constructor(options) {
    this.options = options;
    this.container = null;
    this.queue = [];
    this.preQueue = [];
    this.queueLimit = 5;
  }
  create(options) {
    if (balBrowser.hasDocument) {
      this.setupContainer();
      const clone = this.findClone(options);
      if (clone === undefined) {
        const el = document.createElement(this.options.tag);
        Object.assign(el, options);
        el.addEventListener('balClose', ev => {
          this.removeFromQueue(ev.detail);
        });
        this.preQueue.push(el);
        this.updateQueue();
        return el;
      }
      return clone;
    }
  }
  setQueue(queueLimit) {
    this.queueLimit = queueLimit;
  }
  async dismissAll() {
    var _a;
    const elements = (_a = this.container) === null || _a === void 0 ? void 0 : _a.querySelectorAll(this.options.tag);
    if (elements) {
      const closingQueue = [];
      for (let index = 0; index < elements.length; index++) {
        const el = elements[index];
        if (el.close) {
          closingQueue.push(el.close());
        }
      }
      await Promise.all(closingQueue);
    }
  }
  async clearAll() {
    console.warn('[DEPRECATED] - use dismissAll() instead');
    return this.dismissAll();
  }
  findClone(options) {
    for (let index = 0; index < this.queue.length; index++) {
      const el = this.queue[index];
      if (el.message === options.message && el.color === options.color) {
        return el;
      }
    }
    return undefined;
  }
  setupContainer() {
    if (balBrowser.hasDocument) {
      const containerId = `${this.options.tag}-container`;
      this.container = document.getElementById(containerId);
      if (this.container)
        return;
      if (!this.container) {
        this.container = document.createElement('bal-notices');
        this.container.setAttribute('interface', this.options.tag.replace('bal-', ''));
        this.container.id = containerId;
      }
      document.body.appendChild(this.container);
    }
  }
  updateQueue() {
    var _a;
    if (this.queue.length < this.queueLimit) {
      const el = this.preQueue.shift();
      if (el && this.container) {
        this.queue.push(el);
        this.container.insertAdjacentElement('beforeend', el);
      }
    }
    if (this.queue.length === 0) {
      (_a = this.container) === null || _a === void 0 ? void 0 : _a.remove();
    }
  }
  removeFromQueue(toastId) {
    this.queue = this.queue.filter(el => el.id !== toastId);
    setTimeout(() => this.updateQueue(), 0);
  }
}

class BalToastController extends BalNoticeController {
  constructor() {
    super({
      tag: 'bal-toast',
    });
  }
  create(options) {
    return super.create(options);
  }
}
const balToastController = new BalToastController();

class BalSnackbarController extends BalNoticeController {
  constructor() {
    super({
      tag: 'bal-snackbar',
    });
  }
  create(options) {
    return super.create(options);
  }
}
const balSnackbarController = new BalSnackbarController();

const VERSION = 'BAL_DEV_VERSION';

const initializeBaloiseDesignSystem = (initConfig = {}) => {
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

export { BalToastController as B, BalSnackbarController as a, balToastController as b, balSnackbarController as c, initializeBaloiseDesignSystem as i };
