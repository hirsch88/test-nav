import { Attributes } from '../../../utils/attributes';
export declare const observeLevels: (target: Node, level: string, notify: () => void) => MutationObserver | undefined;
export interface LevelInfo {
  type: 'meta' | 'main' | 'block' | 'block-item';
  value: string;
  label: string;
  isTabLink?: boolean;
  link?: string;
  target?: BalProps.BalButtonTarget;
  linkLabel?: string;
  color?: BalProps.BalNavigationLevelBlockColor;
  subLevels?: LevelInfo[];
  trackingData?: Attributes;
  onClick: (ev: MouseEvent) => void;
}
export declare const readSubLevels: (element: HTMLElement, target: string) => Promise<LevelInfo[]>;
