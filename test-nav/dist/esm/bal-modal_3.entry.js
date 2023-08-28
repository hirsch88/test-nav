import { r as registerInstance, c as createEvent, w as writeTask, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { p as prepareOverlay, d as dismiss, e as eventMethod } from './overlays-dfd156f1.js';
import { c as componentOnReady, f as deepReady, h as wait } from './helpers-08b28736.js';
import { B as BalScrollHandler } from './scroll-e5864193.js';
import './browser-9199b5e2.js';
import './icons.constant-35253412.js';

const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = typeof component === 'string'
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => componentOnReady(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};

const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => (map[c] = true));
  return map;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};

const balModalCss = ".bal-modal__background,.bal-modal{bottom:0;left:0;position:absolute;right:0;top:0}:root{--bal-modal-background:var(--bal-color-white);--bal-modal-backdrop-background:var(--bal-color-primary-6);--bal-modal-backdrop-opacity:.8;--bal-modal-radius:var(--bal-radius-large)}.bal-modal{-ms-flex-align:center;align-items:center;display:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;position:fixed;z-index:var(--bal-z-index-modal)}.bal-modal--is-active{display:-ms-flexbox;display:flex}.bal-modal__background{background:var(--bal-modal-backdrop-background);opacity:var(--bal-modal-backdrop-opacity)}.bal-modal__header__title{padding-right:2.5rem;line-height:2rem}.bal-modal__header__close{position:absolute !important;display:-ms-flexbox !important;display:flex !important;right:20px !important;top:24px !important;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:2rem;max-width:2rem;min-height:2rem;max-height:2rem}.bal-modal__container{position:fixed;top:0;bottom:0;left:0;right:0;overflow-x:none;overflow-y:auto;-ms-overflow-y:visible;padding:.5rem}@media screen and (min-width: 769px),print{.bal-modal__container{padding:0}}.bal-modal__content{overflow:none;position:relative;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background:var(--bal-modal-background);border-radius:var(--bal-modal-radius);padding:1rem}@media screen and (min-width: 769px),print{.bal-modal__content{margin:3rem auto;width:var(--bal-modal-width, var(--bal-width, 640px))}}.bal-modal__content .bal-modal__header{padding-bottom:1rem}.bal-modal__content .bal-modal__header__close{right:1.2rem !important;top:.7rem !important}@media screen and (min-width: 769px),print{.bal-modal__content{padding:1.5rem}.bal-modal__content .bal-modal__header{padding-bottom:1.5rem}.bal-modal__content .bal-modal__header__close{right:1.6rem !important;top:1.2rem !important}}@media screen and (min-width: 1024px){.bal-modal__content{padding:2.5rem}.bal-modal__content .bal-modal__header{padding-bottom:2.5rem}.bal-modal__content .bal-modal__header__close{right:2.7rem !important;top:2.2rem !important}}@media screen and (min-width: 769px),print{.bal-modal__content--has-spacing-small{padding:1rem}.bal-modal__content--has-spacing-small .bal-modal__header{padding-bottom:1rem}.bal-modal__content--has-spacing-small .bal-modal__header__close{right:1.1rem !important;top:.7rem !important}}@media screen and (min-width: 1024px){.bal-modal__content--has-spacing-small{padding:1rem}.bal-modal__content--has-spacing-small .bal-modal__header{padding-bottom:1rem}.bal-modal__content--has-spacing-small .bal-modal__header__close{right:1.1rem !important;top:.7rem !important}}@media screen and (min-width: 769px),print{.bal-modal__content--has-spacing-medium{padding:1.5rem}.bal-modal__content--has-spacing-medium .bal-modal__header{padding-bottom:1.5rem}.bal-modal__content--has-spacing-medium .bal-modal__header__close{right:1.6rem !important;top:1.2rem !important}}@media screen and (min-width: 1024px){.bal-modal__content--has-spacing-medium{padding:1.5rem}.bal-modal__content--has-spacing-medium .bal-modal__header{padding-bottom:1.5rem}.bal-modal__content--has-spacing-medium .bal-modal__header__close{right:1.6rem !important;top:1.2rem !important}}.bal-modal__body>bal-button-group{padding-top:1rem}";

const Modal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "balModalDidPresent", 7);
    this.willPresent = createEvent(this, "balModalWillPresent", 7);
    this.willDismiss = createEvent(this, "balModalWillDismiss", 7);
    this.didDismiss = createEvent(this, "balModalDidDismiss", 7);
    this.isClickedOutsideOnMouseDown = false;
    this.isClickedOutsideOnMouseUp = false;
    this.bodyScrollHandler = new BalScrollHandler();
    this.presented = false;
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.dataTestId = undefined;
    this.modalWidth = 640;
    this.space = '';
    this.hasBackdrop = true;
    this.isClosable = true;
    this.component = undefined;
    this.componentProps = undefined;
    this.cssClass = undefined;
    this.backdropDismiss = true;
  }
  connectedCallback() {
    this.bodyScrollHandler.connect();
    prepareOverlay(this);
  }
  disconnectedCallback() {
    this.bodyScrollHandler.disconnect();
  }
  async open() {
    await deepReady(this.usersElement);
    this.setModalActiveOnBody();
    writeTask(() => {
      if (this.modalBackgroundElement) {
        this.modalBackgroundElement.classList.add('fadeIn');
      }
      if (this.modalContentElement) {
        this.modalContentElement.classList.add('fadeInDown');
      }
    });
    if (this.presented) {
      return;
    }
    this.willPresent.emit();
    this.presented = true;
    await wait(150);
    writeTask(() => {
      if (this.modalBackgroundElement) {
        this.modalBackgroundElement.classList.remove('fadeIn');
      }
      if (this.modalContentElement) {
        this.modalContentElement.classList.remove('fadeInDown');
      }
    });
    this.didPresent.emit();
  }
  async close() {
    this.willDismiss.emit();
    this.unsetModalActiveOnBody();
    this.presented = false;
    this.didDismiss.emit();
  }
  async present() {
    this.setModalActiveOnBody();
    if (this.presented) {
      return;
    }
    const container = this.el.querySelector(`.bal-modal__content`);
    if (!container) {
      throw new Error('container is undefined');
    }
    const componentProps = Object.assign(Object.assign({}, this.componentProps), { modal: this.el });
    this.usersElement = await attachComponent(this.delegate, container, this.component, [], componentProps);
    await this.open();
  }
  async dismiss(data, role) {
    this.unsetModalActiveOnBody();
    if (this.delegate === undefined) {
      await this.close();
      return true;
    }
    const dismissed = await dismiss(this, data, role, async () => {
      writeTask(() => {
        if (this.modalBackgroundElement) {
          this.modalBackgroundElement.classList.add('fadeOut');
        }
        if (this.modalContentElement) {
          this.modalContentElement.classList.add('fadeOutUp');
        }
      });
      await wait(140);
    });
    if (dismissed) {
      await detachComponent(this.delegate, this.usersElement);
    }
    return dismissed;
  }
  onDidDismiss() {
    return eventMethod(this.el, 'balModalDidDismiss');
  }
  onWillDismiss() {
    return eventMethod(this.el, 'balModalWillDismiss');
  }
  async onClickCloseButton(ev) {
    if (this.isClosable && this.presented && ev && ev.target) {
      const element = ev.target;
      const closestBalButton = element.closest('bal-button');
      if (closestBalButton && closestBalButton.hasAttribute('modal-close')) {
        await this.dismiss(undefined, 'model-close');
      }
      if (this.backdropDismiss && this.isClickedOutsideOnMouseUp && this.isClickedOutsideOnMouseDown) {
        await this.dismiss(undefined, 'model-close');
      }
    }
  }
  async onMouseDown(ev) {
    this.isClickedOutsideOnMouseDown = this.isClickedOutside(ev);
  }
  async onMouseUp(ev) {
    this.isClickedOutsideOnMouseUp = this.isClickedOutside(ev);
  }
  async handleKeyUp(ev) {
    const modals = Array.from(document.querySelectorAll('bal-modal')).filter(el => el.hasAttribute('aria-presented'));
    const numbers = modals
      .map(el => el.overlayIndex)
      .map(num => parseInt(num))
      .filter(num => !Number.isNaN(num));
    const max = Math.max(...numbers);
    if (this.overlayIndex === max) {
      ev.preventDefault();
      ev.stopPropagation();
      if (this.presented && this.isClosable) {
        if (ev.key === 'Escape' || ev.key === 'Esc') {
          if (this.delegate) {
            await this.dismiss(undefined, 'model-escape');
          }
          else {
            await this.close();
          }
        }
      }
    }
  }
  setModalActiveOnBody() {
    this.bodyScrollHandler.disable();
  }
  unsetModalActiveOnBody() {
    this.bodyScrollHandler.enable();
  }
  isClickedOutside(ev) {
    if (this.isClosable && this.presented && ev && ev.target && this.backdropDismiss) {
      const element = ev.target;
      return element.classList.contains('bal-modal__container');
    }
    return false;
  }
  render() {
    return (h(Host, { "aria-modal": "true", "aria-presented": this.presented ? 'true' : null, "data-testid": this.dataTestId, tabindex: "-1", class: Object.assign({ 'bal-modal': true, 'bal-modal--is-closable': this.isClosable, 'bal-modal--is-active': this.presented }, getClassMap(this.cssClass)), style: {
        '--bal-width': `${this.modalWidth}px`,
      } }, h("div", { class: {
        'bal-modal__background': true,
        'is-hidden': !this.hasBackdrop,
      }, ref: div => (this.modalBackgroundElement = div) }), h("div", { class: {
        'bal-modal__container': true,
      }, ref: div => (this.modalContainerElement = div) }, h("div", { class: {
        'bal-modal__content': true,
        [`bal-modal__content--has-spacing-${this.space}`]: true,
      }, ref: div => (this.modalContentElement = div) }, h("slot", null)))));
  }
  get el() { return getElement(this); }
};
Modal.style = {
  css: balModalCss
};

const ModalBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "bal-modal__body" }, h("slot", null)));
  }
};

const ModalHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeHandler = () => {
      if (this.parentModal) {
        this.parentModal.dismiss(undefined, 'model-close');
      }
    };
  }
  get parentModal() {
    return this.el.closest('bal-modal');
  }
  render() {
    var _a;
    return (h(Host, { class: "bal-modal__header" }, h("div", { class: "bal-modal__header__title" }, h("bal-heading", { level: "h2", space: "none" }, h("slot", null))), ((_a = this.parentModal) === null || _a === void 0 ? void 0 : _a.isClosable) ? (h("bal-close", { class: "bal-modal__header__close data-test-modal-close", onClick: this.closeHandler })) : ('')));
  }
  get el() { return getElement(this); }
};

export { Modal as bal_modal, ModalBody as bal_modal_body, ModalHeader as bal_modal_header };
