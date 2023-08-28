import { newBalOptionValue, newBalSingleOptionValue } from '../components/form/bal-select/utils/bal-option.util';
import { balBreakpoints } from './breakpoints';
import { balBrowser } from './browser';
import { balDevice } from './device';
export const hasTouchSupport = () => balDevice.hasTouchScreen;
export const isBrowser = (browser) => {
  if (browser === 'Safari') {
    return balBrowser.isSafari;
  }
  return false;
};
export const getPlatforms = (_win) => balBreakpoints.detect();
export const isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === 'string') {
    platform = winOrPlatform;
  }
  if (platform) {
    return balBreakpoints.detect().includes(platform);
  }
  return false;
};
export const NewBalOptionValue = newBalOptionValue;
export const NewBalSingleOptionValue = newBalSingleOptionValue;
