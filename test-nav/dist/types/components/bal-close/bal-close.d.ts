import { ComponentInterface } from '../../stencil-public-runtime';
import { BalConfigObserver, BalConfigState } from '../../interfaces';
import { BalLanguage, BalRegion } from '../../utils/config';
export declare class Close implements ComponentInterface, BalConfigObserver {
  private inheritedAttributes;
  el: HTMLElement;
  language: BalLanguage;
  region: BalRegion;
  size: BalProps.BalCloseSize;
  inverted: boolean;
  componentWillRender(): void;
  configChanged(state: BalConfigState): Promise<void>;
  render(): any;
}
