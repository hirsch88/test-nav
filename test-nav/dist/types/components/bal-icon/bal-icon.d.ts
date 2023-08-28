import { BalConfigObserver, BalConfigState, BalIcons } from '../../utils/config';
import { BalElementStateInfo } from '../../utils/element-states';
export declare class Icon implements BalConfigObserver, BalElementStateInfo {
  icons: BalIcons;
  name: string;
  svg: string;
  size: BalProps.BalIconSize;
  color: BalProps.BalIconColor;
  inline: boolean;
  inverted: boolean;
  turn: boolean;
  shadow: boolean;
  disabled?: boolean;
  invalid?: boolean;
  hovered: boolean;
  pressed: boolean;
  configChanged(state: BalConfigState): Promise<void>;
  private svgContent;
  private parseColor;
  render(): any;
}
