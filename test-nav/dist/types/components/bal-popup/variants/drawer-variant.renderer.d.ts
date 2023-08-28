import { AbstractVariantRenderer } from './abstract-variant.renderer';
import { PopupVariantRenderer, PopupComponentInterface } from './variant.interfaces';
export declare class DrawerVariantRenderer extends AbstractVariantRenderer implements PopupVariantRenderer {
  private backdrop;
  private offset;
  present(component: PopupComponentInterface): Promise<boolean>;
  update(_component: PopupComponentInterface): Promise<boolean>;
  dismiss(component: PopupComponentInterface): Promise<boolean>;
}
