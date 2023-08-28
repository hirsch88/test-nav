export declare class FieldLabel {
  element: HTMLElement;
  private parentBalFieldElement;
  htmlFor?: string;
  required: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  weight: BalProps.BalFieldLabelWeight;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
