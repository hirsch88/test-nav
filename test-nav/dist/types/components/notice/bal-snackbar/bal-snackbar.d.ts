import { EventEmitter } from '../../../stencil-public-runtime';
export declare class Snackbar {
  element: HTMLElement;
  private timer;
  private snackbarId;
  animationClass: string;
  color: BalProps.BalSnackbarColor;
  duration: number;
  subject: string;
  message: string;
  icon: string;
  action: string;
  closeHandler: () => void;
  actionHandler: () => void;
  href?: string;
  target: BalProps.BalButtonTarget;
  balClose: EventEmitter<BalEvents.BalSnackbarCloseDetail>;
  balAction: EventEmitter<BalEvents.BalSnackbarActionDetail>;
  componentWillLoad(): Promise<void>;
  closeIn(duration: number): Promise<void>;
  close(): Promise<void>;
  onActionHandler: () => void;
  get colorType(): string;
  get buttonType(): BalProps.BalButtonColor;
  render(): any;
}
