import { ComponentInterface } from '../../stencil-public-runtime';
export declare class Stage implements ComponentInterface {
  containerSize: BalProps.BalStageContainer;
  size: BalProps.BalStageSize;
  color: BalProps.BalStageColor;
  shape: boolean;
  shapeVariation?: BalProps.BalShapeVariation;
  shapeRotation?: BalProps.BalShapeRotation;
  getContainerWidth: () => "680px" | "832px" | "920px" | "100vw" | "1400px";
  private get containerClass();
  render(): any;
}
