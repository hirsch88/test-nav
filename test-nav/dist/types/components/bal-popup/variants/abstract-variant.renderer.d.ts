import { PopupVariantRenderer, PopupComponentInterface } from './variant.interfaces';
export declare abstract class AbstractVariantRenderer implements PopupVariantRenderer {
  abstract present(component: PopupComponentInterface): Promise<boolean>;
  abstract update(component: PopupComponentInterface): Promise<boolean>;
  abstract dismiss(component: PopupComponentInterface): Promise<boolean>;
  showContainerElement(component: PopupComponentInterface): void;
  hideContainerElement(component: PopupComponentInterface): void;
  showArrowElement(component: PopupComponentInterface, hasArrow?: boolean): void;
  hideArrowElement(component: PopupComponentInterface): void;
  showBackdropElement(component: PopupComponentInterface, hasBackdrop?: boolean): void;
  hideBackdropElement(component: PopupComponentInterface): void;
  showElement(element?: HTMLElement): void;
  hideElement(element?: HTMLElement): void;
}
