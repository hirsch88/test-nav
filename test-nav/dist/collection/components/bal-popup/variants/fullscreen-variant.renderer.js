import { AbstractVariantRenderer } from './abstract-variant.renderer';
export class FullscreenVariantRenderer extends AbstractVariantRenderer {
  constructor() {
    super(...arguments);
    this.offset = 0;
  }
  async present(component) {
    if (component.containerEl && component.trigger) {
      this.offset = component.getValue(component.trigger, 'bal-popup-offset', component.offset);
      component.containerEl.style.setProperty('inset', `${this.offset}px auto auto 0px`);
      if (this.offset > 0) {
        component.containerEl.style.setProperty('box-shadow', `inset var(--bal-nav-meta-bar-variant-white-shadow)`);
      }
      this.showBackdropElement(component);
      this.showContainerElement(component);
      this.showArrowElement(component);
      component.containerEl.classList.add('container');
      return true;
    }
    return false;
  }
  async update(_component) {
    return false;
  }
  async dismiss(component) {
    if (component.containerEl) {
      this.hideBackdropElement(component);
      this.hideContainerElement(component);
      this.hideArrowElement(component);
      component.containerEl.style.removeProperty('box-shadow');
      component.containerEl.style.removeProperty('inset');
      component.containerEl.classList.remove('container');
      return true;
    }
    return false;
  }
}
