import { ComponentInterface } from '../../../stencil-public-runtime';
export declare class DocApp implements ComponentInterface {
  logComponents: string;
  logLifecycle: boolean;
  logEvents: boolean;
  logRender: boolean;
  logCustom: boolean;
  stickyFooter: boolean;
  animated: boolean;
  connectedCallback(): void;
  componentDidRender(): void;
  render(): any;
}
