import { AbstractVariantRenderer } from './abstract-variant.renderer';
export class DrawerVariantRenderer extends AbstractVariantRenderer {
  constructor() {
    super(...arguments);
    this.backdrop = false;
    this.offset = 0;
  }
  async present(component) {
    if (component.containerEl && component.trigger && component.backdropEl) {
      this.backdrop = component.getBooleanValue(component.trigger, 'bal-popup-backdrop', component.backdrop);
      this.offset = component.getValue(component.trigger, 'bal-popup-offset', component.offset);
      component.containerEl.style.setProperty('inset', `auto 0px 0px 0px`);
      component.containerEl.style.setProperty('bottom', `${this.offset}px`);
      component.backdropEl.style.setProperty('bottom', `${this.offset}px`);
      component.containerEl.classList.add('container');
      this.showBackdropElement(component, this.backdrop);
      this.showContainerElement(component);
      return true;
    }
    return false;
  }
  async update(_component) {
    return false;
  }
  async dismiss(component) {
    if (component.containerEl && component.backdropEl) {
      component.balWillAnimate.emit();
      this.hideBackdropElement(component);
      this.hideContainerElement(component);
      component.containerEl.style.removeProperty('inset');
      component.containerEl.classList.remove('container');
      component.containerEl.style.removeProperty('bottom');
      component.backdropEl.style.removeProperty('bottom');
      return true;
    }
    return false;
  }
}
