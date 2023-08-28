'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-843a2913.js');
const balFileUpload_type = require('./bal-file-upload.type-6182bc54.js');
const balClose_i18n = require('./bal-close.i18n-89df2b65.js');
const balDatepicker_i18n = require('./bal-datepicker.i18n-88bae1aa.js');
const balTimeInput_i18n = require('./bal-time-input.i18n-352568b7.js');
const balInputStepper_i18n = require('./bal-input-stepper.i18n-54340e7a.js');
const balLabel_i18n = require('./bal-label.i18n-73829628.js');
const initialize$1 = require('./initialize-0c95247a.js');
const balStep_util = require('./bal-step.util-a7f28bae.js');
const balTab_util = require('./bal-tab.util-0b9511b8.js');
const helpers = require('./helpers-83a73189.js');
const form = require('./form-9af6cd7d.js');
const scroll = require('./scroll-1d66154c.js');
const browser = require('./browser-791d6902.js');
const device = require('./device-76e9eca9.js');
const breakpoints_subject = require('./breakpoints.subject-05458ed4.js');
const listener = require('./listener-4161102f.js');
const swipe_subject = require('./swipe.subject-c66911bc.js');
const overlays = require('./overlays-13887291.js');
const initialize = require('./initialize-4d4da7e2.js');
const mode = require('./mode-059bdbd7.js');
require('./icons.constant-800d686b.js');
require('./tokens.esm-505d1e8f.js');
require('./log-911f84ec.js');
require('./index-1009f308.js');

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

class BalOrientationSubject extends listener.Subject {
  constructor() {
    super(observer => observer.orientationListener(this.state));
    this.listener = new breakpoints_subject.BalWindowResizeListener();
    this.state = device.balDevice.orientation.toObject();
    this.listener.connect();
    this.listener.add(() => {
      const newState = device.balDevice.orientation.toObject();
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
    if (typeof customElements !== 'undefined' && browser.balBrowser.hasDocument) {
      return customElements.whenDefined(this.tag).then(() => {
        const element = document.createElement(this.tag);
        Object.assign(element, options);
        helpers.getAppRoot(document).appendChild(element);
        return new Promise(resolve => helpers.componentOnReady(element, resolve));
      });
    }
    return Promise.resolve();
  }
  async dismissAll(data, role) {
    if (browser.balBrowser.hasDocument) {
      const overlays$1 = overlays.getOverlays(document, this.tag);
      await Promise.all(overlays$1.map(o => o.dismiss(data, role)));
    }
  }
  dismiss(data, role, id) {
    if (browser.balBrowser.hasDocument) {
      const overlay = overlays.getOverlay(document, this.tag, id);
      if (!overlay) {
        return Promise.reject('overlay does not exist');
      }
      return overlay.dismiss(data, role);
    }
    return Promise.resolve(false);
  }
  async getTop() {
    if (browser.balBrowser.hasDocument) {
      return overlays.getOverlay(document, this.tag);
    }
    return;
  }
}
const balModalController = new BalModalController();

const hasTouchSupport = () => device.balDevice.hasTouchScreen;
const isBrowser = (browser$1) => {
  if (browser$1 === 'Safari') {
    return browser.balBrowser.isSafari;
  }
  return false;
};
const getPlatforms = (_win) => breakpoints_subject.balBreakpoints.detect();
const isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === 'string') {
    platform = winOrPlatform;
  }
  if (platform) {
    return breakpoints_subject.balBreakpoints.detect().includes(platform);
  }
  return false;
};
const NewBalOptionValue = newBalOptionValue;
const NewBalSingleOptionValue = newBalSingleOptionValue;

exports.attachToConfig = index.attachToConfig;
exports.detachFromConfig = index.detachFromConfig;
exports.onBalConfigChange = index.onBalConfigChange;
exports.updateBalAllowedLanguages = index.updateBalAllowedLanguages;
exports.updateBalAnimated = index.updateBalAnimated;
exports.updateBalIcons = index.updateBalIcons;
exports.updateBalLanguage = index.updateBalLanguage;
exports.updateBalRegion = index.updateBalRegion;
exports.useBalConfig = index.useBalConfig;
Object.defineProperty(exports, 'FileUploadRejectionReason', {
  enumerable: true,
  get: function () {
    return balFileUpload_type.FileUploadRejectionReason;
  }
});
exports.i18nBalClose = balClose_i18n.i18nBalClose;
exports.i18nBalDatepicker = balDatepicker_i18n.i18nBalDatepicker;
exports.i18nBalTimeInput = balTimeInput_i18n.i18nBalTimeInput;
exports.i18nBalInputStepper = balInputStepper_i18n.i18nBalInputStepper;
exports.i18nBalLabel = balLabel_i18n.i18nBalLabel;
exports.BalSnackbarController = initialize$1.BalSnackbarController;
exports.BalToastController = initialize$1.BalToastController;
exports.balSnackbarController = initialize$1.balSnackbarController;
exports.balToastController = initialize$1.balToastController;
exports.initializeBaloiseDesignSystem = initialize$1.initializeBaloiseDesignSystem;
exports.newBalStepOption = balStep_util.newBalStepOption;
exports.newBalTabOption = balTab_util.newBalTabOption;
exports.componentOnReady = helpers.componentOnReady;
exports.deepReady = helpers.deepReady;
exports.getAppRoot = helpers.getAppRoot;
exports.isDescendant = helpers.isDescendant;
exports.shallowReady = helpers.shallowReady;
exports.wait = helpers.wait;
exports.waitAfterFramePaint = helpers.waitAfterFramePaint;
exports.waitAfterIdleCallback = helpers.waitAfterIdleCallback;
exports.waitForComponent = helpers.waitForComponent;
exports.waitForDesignSystem = helpers.waitForDesignSystem;
exports.scrollToFirstInvalidField = form.scrollToFirstInvalidField;
exports.BalScrollHandler = scroll.BalScrollHandler;
exports.balBrowser = browser.balBrowser;
exports.balDevice = device.balDevice;
exports.balBreakpointSubject = breakpoints_subject.balBreakpointSubject;
exports.balBreakpoints = breakpoints_subject.balBreakpoints;
exports.BalSwipeSubject = swipe_subject.BalSwipeSubject;
exports.defaultConfig = initialize.defaultConfig;
exports.initialize = initialize.initialize;
exports.initStyleMode = mode.initStyleMode;
exports.BalModalController = BalModalController;
exports.NewBalOptionValue = NewBalOptionValue;
exports.NewBalSingleOptionValue = NewBalSingleOptionValue;
exports.balModalController = balModalController;
exports.balOrientationSubject = balOrientationSubject;
exports.getPlatforms = getPlatforms;
exports.hasTouchSupport = hasTouchSupport;
exports.i18nBalFieldLabel = i18nBalFieldLabel;
exports.isBrowser = isBrowser;
exports.isPlatform = isPlatform;
exports.newBalCheckboxOption = newBalCheckboxOption;
exports.newBalOptionValue = newBalOptionValue;
exports.newBalRadioOption = newBalRadioOption;
exports.newBalSingleOptionValue = newBalSingleOptionValue;
