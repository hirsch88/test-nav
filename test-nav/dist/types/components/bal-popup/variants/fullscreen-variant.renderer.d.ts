import { AbstractVariantRenderer } from './abstract-variant.renderer';
import { PopupVariantRenderer, PopupComponentInterface } from './variant.interfaces';
export declare class FullscreenVariantRenderer extends AbstractVariantRenderer implements PopupVariantRenderer {
  offset: number;
  present(component: PopupComponentInterface): Promise<boolean>;
  update(_component: PopupComponentInterface): Promise<boolean>;
  dismiss(component: PopupComponentInterface): Promise<boolean>;
}
