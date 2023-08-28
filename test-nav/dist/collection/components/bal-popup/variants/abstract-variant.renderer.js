export class AbstractVariantRenderer {
  showContainerElement(component) {
    if (component.containerEl) {
      this.showElement(component.containerEl);
    }
  }
  hideContainerElement(component) {
    if (component.containerEl) {
      this.hideElement(component.containerEl);
    }
  }
  showArrowElement(component, hasArrow = component.arrow) {
    if (hasArrow && component.arrowEl) {
      this.showElement(component.arrowEl);
    }
  }
  hideArrowElement(component) {
    if (component.arrowEl) {
      Object.assign(component.arrowEl.style, {
        left: '',
        top: '',
        display: 'none',
        visibility: 'hidden',
      });
    }
  }
  showBackdropElement(component, hasBackdrop = component.backdrop) {
    if (hasBackdrop && component.backdropEl) {
      this.showElement(component.backdropEl);
    }
  }
  hideBackdropElement(component) {
    if (component.backdropEl) {
      this.hideElement(component.backdropEl);
    }
  }
  showElement(element) {
    if (element) {
      element.style.setProperty('display', 'block');
      element.style.setProperty('visibility', 'visible');
    }
  }
  hideElement(element) {
    if (element) {
      element.style.removeProperty('display');
      element.style.removeProperty('visibility');
    }
  }
}
