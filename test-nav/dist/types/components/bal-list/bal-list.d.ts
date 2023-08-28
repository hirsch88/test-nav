export declare class List {
  el: HTMLElement;
  disabled: boolean;
  background: BalProps.BalListBackground;
  border: boolean;
  accordionOneLevel: boolean;
  accordionOneLevelHandler(newValue: boolean, oldValue: boolean): void;
  size: BalProps.BalListSize;
  componentWillLoad(): void;
  render(): any;
}
