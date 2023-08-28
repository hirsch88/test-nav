import { ComponentInterface } from '../../../stencil-public-runtime';
import { BalElementStateInfo } from '../../../utils/element-states';
export declare class Text implements ComponentInterface, BalElementStateInfo {
  size: BalProps.BalTextSize;
  heading: boolean;
  noWrap: boolean;
  bold: boolean;
  inline: boolean;
  color: BalProps.BalTextColor;
  space: BalProps.BalTextSpace;
  inverted: boolean;
  shadow: boolean;
  disabled?: boolean;
  invalid?: boolean;
  hovered: boolean;
  pressed: boolean;
  private parseColor;
  render(): any;
}
