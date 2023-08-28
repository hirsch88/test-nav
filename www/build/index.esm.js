export { b as attachToConfig, c as defaultConfig, d as detachFromConfig, a as initStyleMode, i as initialize, o as onBalConfigChange, u as updateBalAllowedLanguages, e as updateBalAnimated, f as updateBalIcons, g as updateBalLanguage, h as updateBalRegion, j as useBalConfig } from './index-6394c1a6.js';
export { F as FileUploadRejectionReason } from './bal-file-upload.type-02fb0bc0.js';
export { i as i18nBalClose } from './bal-close.i18n-26da072a.js';
export { i as i18nBalDatepicker } from './bal-datepicker.i18n-590bae0f.js';
export { i as i18nBalTimeInput } from './bal-time-input.i18n-213d896f.js';
export { i as i18nBalInputStepper } from './bal-input-stepper.i18n-1f57ce49.js';
export { i as i18nBalLabel } from './bal-label.i18n-f759a6f6.js';
export { a as BalSnackbarController, B as BalToastController, c as balSnackbarController, b as balToastController, i as initializeBaloiseDesignSystem } from './initialize-f2a22514.js';
export { n as newBalStepOption } from './bal-step.util-f46cd10c.js';
export { n as newBalTabOption } from './bal-tab.util-5d3f5c9c.js';
import { g as getAppRoot, c as componentOnReady } from './helpers-18cc89f4.js';
export { c as componentOnReady, f as deepReady, g as getAppRoot, i as isDescendant, s as shallowReady, h as wait, b as waitAfterFramePaint, e as waitAfterIdleCallback, w as waitForComponent, a as waitForDesignSystem } from './helpers-18cc89f4.js';
export { s as scrollToFirstInvalidField } from './form-479fd066.js';
export { B as BalScrollHandler } from './scroll-e5864193.js';
import { b as balBrowser } from './browser-9199b5e2.js';
export { b as balBrowser } from './browser-9199b5e2.js';
import { b as balDevice } from './device-c28cde6d.js';
export { b as balDevice } from './device-c28cde6d.js';
import { b as balBreakpoints } from './index-8d940b60.js';
export { a as balBreakpointSubject, b as balBreakpoints } from './index-8d940b60.js';
import './index-3c2472c2.js';
import { S as Subject } from './listener-ea90dc02.js';
import { B as BalWindowResizeListener } from './window-resize.listener-bb290fb3.js';
export { B as BalSwipeSubject } from './index-28921b8d.js';
import { g as getOverlays, a as getOverlay } from './overlays-c709668d.js';
import './log-01623e2c.js';
import './icons.constant-35253412.js';
import './index-2c15ff91.js';
import './tokens.esm-8af6b758.js';

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

function ListenToOrientation() {
  return function (target, _propertyKey, _descriptor) {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      balOrientationSubject.attach(this);
      return connectedCallback && connectedCallback.call(this);
    };
    target.disconnectedCallback = function () {
      balOrientationSubject.detach(this);
      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}

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
