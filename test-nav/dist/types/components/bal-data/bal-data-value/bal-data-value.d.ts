import { EventEmitter } from '../../../stencil-public-runtime';
export declare class DataValue {
  el: HTMLElement;
  editable: boolean;
  disabled: boolean;
  multiline: boolean;
  balClick: EventEmitter<BalEvents.BalDataValueClickDetail>;
  balFocus: EventEmitter<BalEvents.BalDataValueFocusDetail>;
  balBlur: EventEmitter<BalEvents.BalDataValueBlurDetail>;
  onClickHandler(ev: MouseEvent): void;
  render(): any;
}
