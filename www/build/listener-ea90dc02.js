import { b as balBrowser } from './browser-9199b5e2.js';

class Subject {
  constructor(notifyCallback) {
    this.notifyCallback = notifyCallback;
    this.observers = [];
  }
  attach(observer) {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has been attached already.');
    }
    this.observers.push(observer);
  }
  detach(observer) {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }
    this.observers.splice(observerIndex, 1);
  }
  notify(data) {
    for (const observer of this.observers) {
      if (typeof observer === 'function') {
        observer(data);
      }
      else {
        if (this.notifyCallback) {
          this.notifyCallback(observer, data);
        }
      }
    }
  }
}
class SingleSubject {
  constructor(notifyCallback) {
    this.notifyCallback = notifyCallback;
  }
  attach(observer) {
    this.observer = observer;
  }
  detach() {
    this.observer = undefined;
  }
  notify(data) {
    if (this.observer) {
      if (typeof this.observer === 'function') {
        this.observer(data);
      }
      else {
        if (this.notifyCallback) {
          this.notifyCallback(this.observer, data);
        }
      }
    }
  }
}

class ListenerAbstract extends Subject {
  constructor() {
    super(...arguments);
    this.el = undefined;
  }
  connect(el) {
    if (el) {
      this.el = el;
    }
    else {
      if (balBrowser.hasWindow) {
        this.el = window;
      }
    }
  }
  disconnect() {
    this.el = undefined;
  }
  add(listener) {
    super.attach(listener);
  }
  remove(listener) {
    super.detach(listener);
  }
}

export { ListenerAbstract as L, Subject as S, SingleSubject as a };
