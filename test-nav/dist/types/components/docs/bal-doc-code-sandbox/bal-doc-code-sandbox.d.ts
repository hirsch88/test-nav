import { ComponentInterface } from '../../../stencil-public-runtime';
import { Frameworks } from './code-sandbox.util';
export declare class DocCodeSandbox implements ComponentInterface {
  el: HTMLElement;
  fullscreen: boolean;
  framework: Frameworks;
  frameworkWatcher(): void;
  modules: string;
  template: string;
  component: string;
  name2: string;
  template2: string;
  component2: string;
  visible: boolean;
  primary: boolean;
  logo: boolean;
  label: string;
  parameters: string;
  componentWillLoad(): void;
  private buildParameters;
  render(): any;
}
