import { computePosition, shift, offset, arrow, flip, autoUpdate } from '@floating-ui/dom';
import { balBrowser } from '../../../utils/browser';
import { AbstractVariantRenderer } from './abstract-variant.renderer';
export class PopoverVariantRenderer extends AbstractVariantRenderer {
  constructor() {
    super(...arguments);
    this.placement = 'bottom';
    this.offset = 0;
    this.arrow = false;
    this.backdrop = false;
    this.reference = undefined;
    this.triggerEl = null;
  }
  async present(component) {
    if (!component.trigger && balBrowser.hasDocument) {
      const firstTrigger = Array.from(document.querySelectorAll(`[bal-popup="${component.el.id}"]`))[0];
      component.trigger = firstTrigger;
    }
    if (component.trigger && component.containerEl && component.arrowEl) {
      this.placement = component.getValue(component.trigger, 'bal-popup-placement', component.placement);
      this.arrow = component.getBooleanValue(component.trigger, 'bal-popup-arrow', component.arrow);
      this.backdrop = component.getBooleanValue(component.trigger, 'bal-popup-backdrop', component.backdrop);
      this.reference = component.getValue(component.trigger, 'bal-popup-reference', component.reference);
      this.offset = component.getNumberValue(component.trigger, 'bal-popup-offset', component.offset);
      this.triggerEl = component.trigger;
      if (this.reference && balBrowser.hasDocument) {
        const referenceEl = document.getElementById(this.reference);
        this.triggerEl = referenceEl ? referenceEl : component.trigger;
      }
      if (this.triggerEl) {
        this.showContainerElement(component);
        this.showBackdropElement(component, this.backdrop);
        this.showArrowElement(component, this.arrow);
        this.triggerEl.classList.add('bal-popup-variant-popover-trigger');
        this.cleanup = autoUpdate(this.triggerEl, component.containerEl, () => {
          this.update(component);
        });
        return true;
      }
    }
    return false;
  }
  async update(component) {
    var _a, _b;
    if (this.triggerEl && component.trigger && component.containerEl && component.arrowEl) {
      const isNavMetaDesktopPopup = this.placement === 'bottom-end' && this.triggerEl !== component.trigger;
      let arrowX = 0;
      if (isNavMetaDesktopPopup) {
        const referenceRect = (_a = this.triggerEl) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        const triggerRect = (_b = component.trigger) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
        const diff = triggerRect.x - referenceRect.x;
        const width = 440 - referenceRect.width;
        arrowX = width + diff + triggerRect.width / 2 - 4;
      }
      computePosition(this.triggerEl, component.containerEl, {
        placement: this.placement,
        middleware: [
          shift(),
          flip(),
          offset(this.arrow ? 16 : this.offset),
          arrow({
            element: component.arrowEl,
            padding: 4,
          }),
        ],
      }).then(({ x, y, middlewareData, placement }) => {
        if (component.containerEl) {
          Object.assign(component.containerEl.style, {
            left: `${x}px`,
            top: `${y}px`,
          });
          const side = placement.split('-')[0];
          const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
          }[side];
          if (middlewareData.arrow && component.arrowEl) {
            const arrowPosition = middlewareData.arrow;
            if (isNavMetaDesktopPopup) {
              Object.assign(component.arrowEl.style, {
                left: `${arrowX}px`,
                top: y != null && arrowPosition.y != null ? `${arrowPosition.y}px` : '',
                right: '',
                bottom: '',
                [staticSide]: `${-4}px`,
              });
            }
            else {
              Object.assign(component.arrowEl.style, {
                left: x != null && arrowPosition.x != null ? `${arrowPosition.x}px` : '',
                top: y != null && arrowPosition.y != null ? `${arrowPosition.y}px` : '',
                right: '',
                bottom: '',
                [staticSide]: `${-4}px`,
              });
            }
          }
        }
      });
      return true;
    }
    return false;
  }
  async dismiss(component) {
    if (component.containerEl && component.arrowEl && this.triggerEl) {
      if (this.cleanup) {
        this.cleanup();
      }
      this.triggerEl.classList.remove('bal-popup-variant-popover-trigger');
      this.hideBackdropElement(component);
      this.hideContainerElement(component);
      this.hideArrowElement(component);
      return true;
    }
    return false;
  }
}
