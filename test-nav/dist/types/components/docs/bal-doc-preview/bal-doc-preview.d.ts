import { ComponentInterface } from '../../../stencil-public-runtime';
export declare class DocPreview implements ComponentInterface {
  private slotWrapperEl?;
  private previewContentEl?;
  el: HTMLElement;
  componentDidRender(): void;
  private updateContent;
  render(): any;
}
