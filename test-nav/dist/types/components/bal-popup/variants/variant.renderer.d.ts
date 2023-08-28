import { PopupVariantRenderer, PopupComponentInterface } from './variant.interfaces';
export declare class VariantRenderer implements PopupVariantRenderer {
  private renderer;
  constructor(renderer: PopupVariantRenderer);
  present(component: PopupComponentInterface): Promise<boolean>;
  update(component: PopupComponentInterface): Promise<boolean>;
  dismiss(component: PopupComponentInterface): Promise<boolean>;
}
