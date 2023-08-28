export { setAssetPath, setNonce, setPlatformOptions } from '@stencil/core/internal/client';
export { a as attachToConfig, d as detachFromConfig, o as onBalConfigChange, u as updateBalAllowedLanguages, b as updateBalAnimated, c as updateBalIcons, e as updateBalLanguage, f as updateBalRegion, g as useBalConfig } from './index2.js';
export { F as FileUploadRejectionReason } from './bal-file-upload.type.js';
export { i as i18nBalClose } from './bal-close.i18n.js';
export { i as i18nBalDatepicker } from './bal-datepicker.i18n.js';
export { i as i18nBalTimeInput } from './bal-time-input.i18n.js';
export { i as i18nBalInputStepper } from './bal-input-stepper.i18n.js';
export { i as i18nBalLabel } from './bal-label.i18n.js';
export { a as BalSnackbarController, B as BalToastController, c as balSnackbarController, b as balToastController, i as initializeBaloiseDesignSystem } from './initialize.js';
export { n as newBalStepOption } from './bal-step.util.js';
export { n as newBalTabOption } from './bal-tab.util.js';
import { g as getAppRoot, c as componentOnReady } from './helpers.js';
export { c as componentOnReady, e as deepReady, g as getAppRoot, i as isDescendant, s as shallowReady, f as wait, b as waitAfterFramePaint, d as waitAfterIdleCallback, w as waitForComponent, a as waitForDesignSystem } from './helpers.js';
export { s as scrollToFirstInvalidField } from './form.js';
export { B as BalScrollHandler } from './scroll.js';
import { b as balBrowser } from './browser.js';
export { b as balBrowser } from './browser.js';
import { b as balDevice } from './device.js';
export { b as balDevice } from './device.js';
import { B as BalWindowResizeListener, b as balBreakpoints } from './breakpoints.subject.js';
export { a as balBreakpointSubject, b as balBreakpoints } from './breakpoints.subject.js';
import { S as Subject } from './listener.js';
export { B as BalSwipeSubject } from './swipe.subject.js';
import { g as getOverlays, a as getOverlay } from './overlays.js';
export { d as defaultConfig, i as initialize } from './initialize2.js';
export { i as initStyleMode } from './mode.js';

const i18nBalFieldLabel = {
  de: {
    optional: ' (optional)',
  },
  en: {
    optional: ' (optional)',
  },
  fr: {
    optional: ' (optionnel)',
  },
  it: {
    optional: ' (opzionale)',
  },
  nl: {
    optional: ' (optioneel)',
  },
  es: {
    optional: ' (opcional)',
  },
  pl: {
    optional: ' (opcjonalnie)',
  },
  pt: {
    optional: ' (opcional)',
  },
  sv: {
    optional: ' (frivillig)',
  },
  fi: {
    optional: ' (valinnainen)',
  },
};

const newBalCheckboxOption = (option) => {
  return Object.assign(Object.assign({ interface: 'checkbox', labelHidden: false, flat: false, disabled: false, readonly: false, required: false, hidden: false, invalid: false, checked: false }, option), { label: '', html: option.label });
};

const newBalRadioOption = (option) => {
  return Object.assign(Object.assign({ interface: 'radio', labelHidden: false, flat: false, disabled: false, readonly: false, required: false, hidden: false, invisible: false, invalid: false }, option), { label: '', html: option.label });
};

const newBalOptionValue = (value, label, disabled = false, data) => {
  return {
    value,
    label,
    disabled,
    data,
  };
};
const newBalSingleOptionValue = (valueAndLabel, disabled = false, data) => {
  return newBalOptionValue(valueAndLabel, valueAndLabel, disabled, data);
};

class BalOrientationSubject extends Subject {
  constructor() {
    super(observer => observer.orientationListener(this.state));
    this.listener = new BalWindowResizeListener();
    this.state = balDevice.orientation.toObject();
    this.listener.connect();
    this.listener.add(() => {
      const newState = balDevice.orientation.toObject();
      if (!this.isEqual(newState)) {
        this.state = newState;
        this.notify(undefined);
      }
    });
  }
  attach(observer) {
    super.attach(observer);
    observer.orientationListener(this.state);
  }
  isEqual(newState) {
    return newState.landscape === this.state.landscape && newState.portrait === this.state.portrait;
  }
}
const balOrientationSubject = new BalOrientationSubject();

class BalModalController {
  constructor() {
    this.tag = 'bal-modal';
  }
  create(options) {
    if (typeof customElements !== 'undefined' && balBrowser.hasDocument) {
      return customElements.whenDefined(this.tag).then(() => {
        const element = document.createElement(this.tag);
        Object.assign(element, options);
        getAppRoot(document).appendChild(element);
        return new Promise(resolve => componentOnReady(element, resolve));
      });
    }
    return Promise.resolve();
  }
  async dismissAll(data, role) {
    if (balBrowser.hasDocument) {
      const overlays = getOverlays(document, this.tag);
      await Promise.all(overlays.map(o => o.dismiss(data, role)));
    }
  }
  dismiss(data, role, id) {
    if (balBrowser.hasDocument) {
      const overlay = getOverlay(document, this.tag, id);
      if (!overlay) {
        return Promise.reject('overlay does not exist');
      }
      return overlay.dismiss(data, role);
    }
    return Promise.resolve(false);
  }
  async getTop() {
    if (balBrowser.hasDocument) {
      return getOverlay(document, this.tag);
    }
    return;
  }
}
const balModalController = new BalModalController();

const hasTouchSupport = () => balDevice.hasTouchScreen;
const isBrowser = (browser) => {
  if (browser === 'Safari') {
    return balBrowser.isSafari;
  }
  return false;
};
const getPlatforms = (_win) => balBreakpoints.detect();
const isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === 'string') {
    platform = winOrPlatform;
  }
  if (platform) {
    return balBreakpoints.detect().includes(platform);
  }
  return false;
};
const NewBalOptionValue = newBalOptionValue;
const NewBalSingleOptionValue = newBalSingleOptionValue;

export { BalModalController, NewBalOptionValue, NewBalSingleOptionValue, balModalController, balOrientationSubject, getPlatforms, hasTouchSupport, i18nBalFieldLabel, isBrowser, isPlatform, newBalCheckboxOption, newBalOptionValue, newBalRadioOption, newBalSingleOptionValue };
