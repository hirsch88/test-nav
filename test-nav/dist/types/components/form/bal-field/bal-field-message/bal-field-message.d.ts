import { BalAriaForm, BalAriaFormLinking } from '../../../../utils/form';
export declare class FieldMessage implements BalAriaFormLinking {
  ariaForm: BalAriaForm;
  color: BalProps.BalFieldMessageColor;
  invalid: boolean;
  valid: boolean;
  disabled: boolean;
  readonly: boolean;
  setAriaForm(ariaForm: BalAriaForm): Promise<void>;
  render(): any;
}
