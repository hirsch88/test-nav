import { ComponentInterface } from '../../../stencil-public-runtime';
import { HeadingSize } from './bal-heading.const';
export declare class Heading implements ComponentInterface {
  private headingEl?;
  el?: HTMLElement;
  autoFontSize?: HeadingSize;
  level: BalProps.BalHeadingLevel;
  levelWatcher(): void;
  visualLevel?: BalProps.BalHeadingVisualLevel;
  visualLevelWatcher(): void;
  autoLevel?: BalProps.BalHeadingVisualLevel;
  autoLevelWatcher(): void;
  noWrap: boolean;
  subtitle: boolean;
  space?: 'none' | 'bottom' | 'top' | 'all';
  color: BalProps.BalHeadingColor;
  inverted: boolean;
  shadow: boolean;
  connectedCallback(): void;
  componentDidRender(): void;
  private updateAutoFontSize;
  private get rows();
  private get fontColor();
  private get fontSize();
  private get tag();
  render(): any;
}
