import { FooterLink, SocialMediaLink } from '@baloise/web-app-utils';
import { BalConfigObserver, BalConfigState, BalLanguage, BalRegion } from '../../utils/config';
import { Loggable, LogInstance } from '../../utils/log';
export declare class Footer implements BalConfigObserver, Loggable {
  links: FooterLink[];
  socialMediaLinks: SocialMediaLink[];
  language: BalLanguage;
  region: BalRegion;
  allowedLanguages: BalLanguage[];
  log: LogInstance;
  createLogger(log: LogInstance): void;
  hideLinks: boolean;
  showSocialMedia: boolean;
  hideLanguageSelection: boolean;
  connectedCallback(): void;
  configChanged(state: BalConfigState): Promise<void>;
  private changeLanguage;
  private updateFooterLinks;
  private updateSocialMediaLinks;
  render(): any;
}
