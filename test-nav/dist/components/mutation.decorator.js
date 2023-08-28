import { h as debounce } from './helpers.js';
import { L as ListenerAbstract, a as SingleSubject } from './listener.js';

class BalMutationListener extends ListenerAbstract {
  constructor(options) {
    super();
    this.tags = [];
    this.mutationObserver = undefined;
    this.mutationObserverInit = {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    };
    this.mutationCallback = (mutationRecord) => {
      const hasChanges = mutationRecord.some(record => this.tags.includes(record.target.nodeName));
      if (hasChanges) {
        return this.notify(undefined);
      }
      const hasRemovedNodeChanges = mutationRecord.some(record => Array.from(record.removedNodes).some((node) => this.tags.includes(node.nodeName)));
      if (hasRemovedNodeChanges) {
        return this.notify(undefined);
      }
      const hasCharacterDataChanges = mutationRecord.some(record => record.type === 'characterData');
      if (hasCharacterDataChanges) {
        return this.notify(undefined);
      }
      if (this.tags.length === 0 && mutationRecord.length > 0) {
        return this.notify(undefined);
      }
    };
    this.tags = (options.tags || []).map(t => t.toUpperCase());
    this.mutationObserverInit = {
      childList: options.childList === false ? false : true,
      subtree: options.subtree === false ? false : true,
      attributes: options.attributes === false ? false : true,
      characterData: options.characterData === false ? false : true,
    };
  }
  connect(el) {
    super.connect(el);
    if (typeof MutationObserver === 'undefined') {
      return;
    }
    this.destroyMutationObserver();
    this.mutationObserver = new MutationObserver(this.mutationCallback);
    this.mutationObserver.observe(el, this.mutationObserverInit);
  }
  disconnect() {
    super.disconnect();
    this.destroyMutationObserver();
  }
  destroyMutationObserver() {
    if (this.mutationObserver !== undefined) {
      this.mutationObserver.disconnect();
      this.mutationObserver = undefined;
    }
  }
}

class BalMutationSubject extends SingleSubject {
  constructor(options) {
    super(observer => {
      if (observer.mutationObserverActive) {
        observer.mutationListener();
      }
    });
    this.options = options;
    this.debouncedNotify = debounce(() => this.notify(), 50);
    this.listener = new BalMutationListener(options);
  }
  attach(observer) {
    var _a, _b, _c;
    super.attach(observer);
    if (this.options.closest) {
      const closestElement = observer.el.closest(this.options.closest);
      if (closestElement) {
        (_a = this.listener) === null || _a === void 0 ? void 0 : _a.connect(closestElement);
      }
    }
    else {
      (_b = this.listener) === null || _b === void 0 ? void 0 : _b.connect(observer.el);
    }
    (_c = this.listener) === null || _c === void 0 ? void 0 : _c.add(() => this.debouncedNotify());
  }
  detach() {
    var _a;
    super.detach();
    (_a = this.listener) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
}

function ListenToMutation(options) {
  return function (target, _propertyKey, _descriptor) {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      this._balMutationSubject = new BalMutationSubject(options);
      this._balMutationSubject.attach(this);
      return connectedCallback && connectedCallback.call(this);
    };
    target.disconnectedCallback = function () {
      this._balMutationSubject.detach();
      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}

export { ListenToMutation as L };
