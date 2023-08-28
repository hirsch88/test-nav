import { ListenerAbstract } from '../types/listener';
export class BalMutationListener extends ListenerAbstract {
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
