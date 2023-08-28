export declare class Navbar {
  element: HTMLElement;
  light: boolean;
  interface: BalProps.BalNavbarInterface;
  interfaceHandler(): void;
  container: 'fluid' | 'detail-page' | 'compact' | 'blog-page' | 'wide' | '';
  componentWillLoad(): void;
  private updateProps;
  private notifyComponents;
  render(): any;
}
