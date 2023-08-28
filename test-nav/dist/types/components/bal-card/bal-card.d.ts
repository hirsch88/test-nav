export declare class BalCard {
  border: boolean;
  flat: boolean;
  square: boolean;
  inverted: boolean;
  clickable: boolean;
  selected: boolean;
  fullheight: boolean;
  space: BalProps.BalCardSpace;
  color: BalProps.BalCardColor;
  get colorTypeClass(): string;
  render(): any;
}
