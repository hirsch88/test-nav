import { ComponentInterface } from '../../../stencil-public-runtime';
export declare class Form implements ComponentInterface {
  el: HTMLElement;
  native: boolean;
  novalidate: boolean;
  scrollToFirstInvalidField(): Promise<void>;
  render(): any;
}
