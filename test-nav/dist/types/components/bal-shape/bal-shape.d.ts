import { ComponentInterface } from '../../stencil-public-runtime';
export declare class Shape implements ComponentInterface {
  el: HTMLElement;
  variation: BalProps.BalShapeVariation;
  color: BalProps.BalShapeColor;
  rotation?: BalProps.BalShapeRotation;
  getHex: () => string;
  render(): any;
}
