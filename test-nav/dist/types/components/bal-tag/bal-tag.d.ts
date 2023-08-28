import { EventEmitter } from '../../stencil-public-runtime';
export declare class Tag {
  el: HTMLElement;
  private inheritedAttributes;
  private inheritedAttributesClose;
  color: BalProps.BalTagColor;
  size: BalProps.BalTagSize;
  closable: boolean;
  invalid: boolean;
  disabled: boolean;
  position: BalProps.BalTagPlacement;
  light: boolean;
  transparent: boolean;
  balCloseClick: EventEmitter<BalEvents.BalTagCloseClickDetail>;
  componentWillLoad(): void;
  render(): any;
}
