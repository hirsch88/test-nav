import { AbstractVariantRenderer } from './abstract-variant.renderer';
import { PopupVariantRenderer, PopupComponentInterface } from './variant.interfaces';
export declare class PopoverVariantRenderer extends AbstractVariantRenderer implements PopupVariantRenderer {
  private cleanup?;
  private placement;
  private offset;
  private arrow;
  private backdrop;
  private reference?;
  private triggerEl;
  present(component: PopupComponentInterface): Promise<boolean>;
  update(component: PopupComponentInterface): Promise<boolean>;
  dismiss(component: PopupComponentInterface): Promise<boolean>;
}
