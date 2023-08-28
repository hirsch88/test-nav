import { debounce } from '../helpers';
import { SingleSubject } from '../types/signal';
import { BalMutationListener } from './mutation.listener';
export class BalMutationSubject extends SingleSubject {
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
