import { balBrowser } from '../browser';
export class BalNoticeController {
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
