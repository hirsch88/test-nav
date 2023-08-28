import { ComponentInterface } from '../../../stencil-public-runtime';
export declare class StageImage implements ComponentInterface {
  private imageInheritAttributes;
  el: HTMLElement;
  srcSet: string;
  fallback?: string;
  componentWillLoad(): void;
  render(): any;
}
