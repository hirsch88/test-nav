import { h, proxyCustomElement, HTMLElement, createEvent, Host } from '@stencil/core/internal/client';
import { l as raf } from './helpers.js';
import { B as BEM } from './bem.js';
import { s as stopEventBubbling } from './form-input.js';
import { b as balBreakpoints } from './breakpoints.subject.js';
import { L as ListenToBreakpoints } from './breakpoints.decorator.js';
import { B as BalSwipeSubject } from './swipe.subject.js';
import { L as ListenToMutation } from './mutation.decorator.js';
import { L as ListenToResize } from './resize.decorator.js';
import { d as defaultConfig } from './initialize2.js';
import { L as ListenToConfig } from './config.decorator.js';
import { d as defineCustomElement$7 } from './bal-button2.js';
import { d as defineCustomElement$6 } from './bal-card2.js';
import { d as defineCustomElement$5 } from './bal-card-content2.js';
import { d as defineCustomElement$4 } from './bal-icon2.js';
import { d as defineCustomElement$3 } from './bal-pagination2.js';
import { d as defineCustomElement$2 } from './bal-spinner2.js';
import { d as defineCustomElement$1 } from './bal-text2.js';

function ListenToSwipe() {
  return function (target, _propertyKey, _descriptor) {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      this._balSwipeSubject = new BalSwipeSubject();
      this._balSwipeSubject.attach(this);
      return connectedCallback && connectedCallback.call(this);
    };
    target.disconnectedCallback = function () {
      this._balSwipeSubject.detach();
      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}

const TabControl = ({ value, items, onControlChange }) => {
  const block = BEM.block('carousel');
  const controls = block.element('controls');
  return (h("div", { class: Object.assign(Object.assign({}, controls.class()), controls.modifier('tabs').class()) },
    h("bal-card", null,
      h("bal-card-content", null, items.map(item => (h("bal-button", { expanded: true, color: value === item.value ? 'primary' : 'light', onClick: () => onControlChange(item) }, item.label)))))));
};

const DotControl = ({ value, items, onControlChange }) => {
  const block = BEM.block('carousel');
  const controls = block.element('controls');
  const onChange = (ev) => {
    let selectedValue = ev.detail - 1;
    if (selectedValue < 0) {
      selectedValue = 0;
    }
    if (selectedValue >= items.length) {
      selectedValue = items.length - 1;
    }
    onControlChange(items[selectedValue]);
  };
  return (h("div", { class: Object.assign(Object.assign({}, controls.class()), controls.modifier('tabs').class()) },
    h("bal-pagination", { interface: "small", value: value + 1, totalPages: items.length, onBalChange: onChange })));
};

const LargeControl = ({ isFirst, isLast, inverted, areControlsHidden, onNextClick, onPreviousClick, leftControlTitle, rightControlTitle, }) => {
  const block = BEM.block('carousel');
  const controls = block.element('controls');
  const button = controls.element('button');
  return (h("div", { "data-mutation": "false", class: Object.assign(Object.assign({}, controls.class()), controls.modifier('large').class()) },
    h("bal-button", { class: Object.assign(Object.assign(Object.assign({}, button.class()), button.modifier('left').class()), button.modifier('hidden').class(isFirst && areControlsHidden)), square: true, icon: "nav-go-left", rounded: true, inverted: inverted, onClick: () => onPreviousClick(), disabled: isFirst, "aria-hidden": isFirst && areControlsHidden ? 'true' : null, "data-testid": "bal-carousel-control-left", title: leftControlTitle }),
    h("bal-button", { class: Object.assign(Object.assign(Object.assign({}, button.class()), button.modifier('right').class()), button.modifier('hidden').class(isLast && areControlsHidden)), square: true, icon: "nav-go-right", rounded: true, inverted: inverted, onClick: () => onNextClick(), disabled: isLast, "aria-hidden": isLast && areControlsHidden ? 'true' : null, "data-testid": "bal-carousel-control-right", title: rightControlTitle })));
};

const SmallControl = ({ isFirst, isLast, inverted, leftControlTitle, rightControlTitle, onNextClick, onPreviousClick, }) => {
  const block = BEM.block('carousel');
  const controls = block.element('controls');
  const button = controls.element('button');
  return (h("div", { class: Object.assign(Object.assign({}, controls.class()), controls.modifier('small').class()) },
    h("bal-button", { class: Object.assign(Object.assign(Object.assign({}, button.class()), button.modifier('left').class()), button.modifier('hidden').class(isFirst)), square: true, size: "small", icon: "nav-go-left", rounded: true, inverted: inverted, onClick: () => onPreviousClick(), disabled: isFirst, "aria-hidden": isFirst ? 'true' : null, tabindex: "-1", "data-testid": "bal-carousel-control-left", title: leftControlTitle }),
    h("bal-button", { class: Object.assign(Object.assign(Object.assign({}, button.class()), button.modifier('right').class()), button.modifier('hidden').class(isLast)), square: true, size: "small", icon: "nav-go-right", rounded: true, inverted: inverted, onClick: () => onNextClick(), disabled: isLast, "aria-hidden": isLast ? 'true' : null, tabindex: "-1", "data-testid": "bal-carousel-control-right", title: rightControlTitle })));
};

const convert = (value) => parseInt(value.slice(0, -2), 10);
const getComputedPadding = (element, defaultPadding = 16) => {
  if (typeof window === 'undefined' || element === undefined) {
    return { top: defaultPadding, right: defaultPadding, bottom: defaultPadding, left: defaultPadding };
  }
  const computedStyle = window.getComputedStyle(element);
  const top = convert(computedStyle.getPropertyValue('padding-top'));
  const right = convert(computedStyle.getPropertyValue('padding-right'));
  const bottom = convert(computedStyle.getPropertyValue('padding-bottom'));
  const left = convert(computedStyle.getPropertyValue('padding-left'));
  return { top, right, bottom, left };
};
const getComputedWidth = (element) => {
  if (typeof window === 'undefined') {
    return element.clientWidth;
  }
  const computedStyle = window.getComputedStyle(element);
  return convert(computedStyle.getPropertyValue('width'));
};

const i18nControlLabel = {
  de: {
    left: 'vorherige',
    right: 'nächste',
  },
  en: {
    left: 'previous',
    right: 'next',
  },
  fr: {
    left: 'précédent',
    right: 'suivant',
  },
  it: {
    left: 'precedente',
    right: 'successivo',
  },
  nl: {
    left: 'vorige',
    right: 'volgende',
  },
  es: {
    left: 'anterior',
    right: 'siguiente',
  },
  pl: {
    left: 'poprzedni',
    right: 'następny',
  },
  pt: {
    left: 'anterior',
    right: 'próximo',
  },
  sv: {
    left: 'föregående',
    right: 'nästa',
  },
  fi: {
    left: 'edellinen',
    right: 'seuraava',
  },
};

const balCarouselCss = ":root{--bal-carousel-inner-border-background:var(--bal-color-border-grey);--bal-carousel-inner-border-background-inverted:var(--bal-color-border-primary-light);--bal-carousel-inner-shadow-left-background-before:var(--bal-color-white);--bal-carousel-inner-shadow-right-background-after:var(--bal-color-white);--bal-carousel-inner-shadow-left-background-inverted-before:var(--bal-color-primary);--bal-carousel-inner-shadow-right-background-inverted-after:var(--bal-color-primary);--bal-carousel-product-item-button-background:var(--bal-color-white);--bal-carousel-product-item-button-background-green:var(--bal-color-green-1);--bal-carousel-product-item-button-background-green-hover:var(--bal-color-green-1);--bal-carousel-product-item-button-background-green-active:var(--bal-color-green-2);--bal-carousel-product-item-button-background-red:var(--bal-color-red-1);--bal-carousel-product-item-button-background-red-hover:var(--bal-color-red-1);--bal-carousel-product-item-button-background-red-active:var(--bal-color-red-2);--bal-carousel-product-item-button-background-yellow:var(--bal-color-yellow-1);--bal-carousel-product-item-button-background-yellow-hover:var(--bal-color-yellow-1);--bal-carousel-product-item-button-background-yellow-active:var(--bal-color-yellow-2);--bal-carousel-product-item-button-background-purple:var(--bal-color-purple-1);--bal-carousel-product-item-button-background-purple-hover:var(--bal-color-purple-1);--bal-carousel-product-item-button-background-purple-active:var(--bal-color-purple-2);--bal-carousel-inner-border-radius:var(--bal-radius-rounded);--bal-carousel-image-border-radius:var(--bal-radius-normal);--bal-carousel-product-item-button-border-radius:var(--bal-radius-large);--bal-carousel-product-item-button-label-text-color:var(--bal-color-text-primary);--bal-carousel-sticky-top:0}.bal-carousel{display:block;position:relative}.bal-carousel__inner{display:block;position:relative;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;-ms-touch-action:pan-y;touch-action:pan-y}.bal-carousel--full-height{height:100%}.bal-carousel__inner--full-height{height:100%}.bal-carousel__inner__container{position:relative;width:100%;height:100%;display:-ms-flexbox;display:flex;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-transition-duration:0ms;transition-duration:0ms;-webkit-transform:translate3d(0px, 0px, 0px);transform:translate3d(0px, 0px, 0px)}.bal-carousel__inner__container--border{padding-bottom:var(--bal-border-width-normal)}.bal-carousel__inner__container__border{position:absolute;background:var(--bal-carousel-inner-border-background);border-radius:var(--bal-carousel-inner-border-radius);height:var(--bal-border-width-normal);width:100%;bottom:0;-webkit-transform:translate3d(0px, 0px, 0px);transform:translate3d(0px, 0px, 0px)}.bal-carousel__inner__container__border--inverted{background:var(--bal-carousel-inner-border-background-inverted)}.bal-carousel__item{text-align:center;font-size:var(--bal-size-large);min-height:2rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.bal-carousel__inner--shadow-left::before,.bal-carousel__inner--shadow-right::after{position:absolute;width:3rem;height:100%;top:0}.bal-carousel__inner--shadow-left::before{content:\"\";left:0;background:-webkit-gradient(linear, left top, right top, color-stop(50%, var(--bal-carousel-inner-shadow-left-background-before)), to(rgba(255, 255, 255, 0)));background:linear-gradient(90deg, var(--bal-carousel-inner-shadow-left-background-before) 50%, rgba(255, 255, 255, 0) 100%)}.bal-carousel__inner--shadow-right::after{content:\"\";right:0;background:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(50%, var(--bal-carousel-inner-shadow-right-background-after)));background:linear-gradient(90deg, rgba(255, 255, 255, 0), var(--bal-carousel-inner-shadow-right-background-after) 50%)}.bal-carousel__inner--shadow-left.bal-carousel__inner--inverted::before{background:-webkit-gradient(linear, left top, right top, color-stop(50%, var(--bal-carousel-inner-shadow-left-background-inverted-before)), to(rgba(255, 255, 255, 0)));background:linear-gradient(90deg, var(--bal-carousel-inner-shadow-left-background-inverted-before) 50%, rgba(255, 255, 255, 0) 100%)}.bal-carousel__inner--shadow-right.bal-carousel__inner--inverted::after{background:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(50%, var(--bal-carousel-inner-shadow-right-background-inverted-after)));background:linear-gradient(90deg, rgba(255, 255, 255, 0), var(--bal-carousel-inner-shadow-right-background-inverted-after) 50%)}.bal-carousel__inner--items-per-view-auto .bal-carousel__item{width:auto}.bal-carousel__inner--items-per-view-1 .bal-carousel__item{width:100%}.bal-carousel__inner--items-per-view-2 .bal-carousel__item{width:50%}.bal-carousel__inner--items-per-view-3 .bal-carousel__item{width:33.3333%}.bal-carousel__inner--items-per-view-4 .bal-carousel__item{width:25%}.bal-carousel--card .bal-carousel__inner--shadow-left::before,.bal-carousel--card .bal-carousel__inner--shadow-right::after{width:1rem}@media screen and (min-width: 769px),print{.bal-carousel--card .bal-carousel__inner--shadow-left::before,.bal-carousel--card .bal-carousel__inner--shadow-right::after{width:2.5rem}}@media screen and (min-width: 1024px){.bal-carousel--card .bal-carousel__inner--shadow-left::before,.bal-carousel--card .bal-carousel__inner--shadow-right::after{width:3rem}}.bal-carousel--card{margin-left:-1rem;margin-right:-1rem}@media screen and (min-width: 769px),print{.bal-carousel--card{margin-left:-2.5rem;margin-right:-2.5rem}}.bal-carousel--card .bal-carousel__controls{padding-left:1rem;padding-right:1rem}@media screen and (min-width: 769px),print{.bal-carousel--card .bal-carousel__controls{padding-left:2.5rem;padding-right:2.5rem}}.bal-carousel--card .bal-carousel__item{width:calc(100% - 2rem);padding-top:1rem;padding-bottom:1rem;padding-left:1rem;padding-right:1rem}@media screen and (min-width: 769px),print{.bal-carousel--card .bal-carousel__item{width:calc(100% - 5rem);padding-top:2.5rem;padding-bottom:2.5rem;padding-left:2.5rem;padding-right:2.5rem}}.bal-carousel--controls-sticky .bal-carousel__controls--tabs{position:-webkit-sticky;position:sticky;top:var(--bal-carousel-sticky-top)}.bal-carousel__controls--tabs .bal-card{padding:0}.bal-carousel__controls--tabs .bal-card-content{padding:.5rem !important;gap:.5rem;display:-ms-flexbox;display:flex}.bal-carousel__controls--tabs .bal-card-content .bal-button{-ms-flex:1;flex:1}.bal-carousel--image .bal-carousel__inner{border-radius:var(--bal-carousel-image-border-radius)}.bal-carousel--image .bal-carousel__inner--is-1by1{padding-top:100%}.bal-carousel--image .bal-carousel__inner--is-16by9{padding-top:56.25%}.bal-carousel--image .bal-carousel__inner--is-3by2{padding-top:66.66%}.bal-carousel--image .bal-carousel__inner--is-4by3{padding-top:75%}.bal-carousel--image .bal-carousel__inner__container{position:absolute;top:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;height:100%}.bal-carousel--image .bal-carousel__item{position:relative;-ms-flex:0 0 100%;flex:0 0 100%}.bal-carousel--image .bal-carousel__item>img{height:100%;width:100%;-o-object-fit:cover;object-fit:cover;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none;user-zoom:fixed}.bal-carousel--product .bal-carousel__inner__container{gap:1rem;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.bal-carousel--product .bal-carousel__item{display:-ms-flexbox;display:flex;width:160px;height:176px;text-align:center;padding-top:8px;padding-bottom:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-zoom:fixed;user-drag:none}.bal-carousel--product .bal-carousel__item img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-zoom:fixed;user-drag:none}.bal-carousel--product .bal-carousel__item__button{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;gap:1rem;border-radius:var(--bal-carousel-product-item-button-border-radius);padding:var(--bal-size-x-small);border:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;background:var(--bal-carousel-product-item-button-background)}@media (hover: hover)and (pointer: fine){.bal-carousel--product .bal-carousel__item__button:focus-visible:not(:active){-webkit-box-shadow:var(--bal-focus-shadow) !important;box-shadow:var(--bal-focus-shadow) !important}}@media screen and (max-width: 1023px){.bal-carousel--product .bal-carousel__item__button--color-green{background:var(--bal-carousel-product-item-button-background-green)}}@media screen and (min-width: 1024px){.bal-carousel--product .bal-carousel__item__button--color-green:hover{background:var(--bal-carousel-product-item-button-background-green-hover)}.bal-carousel--product .bal-carousel__item__button--color-green:active{background:var(--bal-carousel-product-item-button-background-green-active)}}@media screen and (max-width: 1023px){.bal-carousel--product .bal-carousel__item__button--color-red{background:var(--bal-carousel-product-item-button-background-red)}}@media screen and (min-width: 1024px){.bal-carousel--product .bal-carousel__item__button--color-red:hover{background:var(--bal-carousel-product-item-button-background-red-hover)}.bal-carousel--product .bal-carousel__item__button--color-red:active{background:var(--bal-carousel-product-item-button-background-red-active)}}@media screen and (max-width: 1023px){.bal-carousel--product .bal-carousel__item__button--color-yellow{background:var(--bal-carousel-product-item-button-background-yellow)}}@media screen and (min-width: 1024px){.bal-carousel--product .bal-carousel__item__button--color-yellow:hover{background:var(---bal-carousel-product-item-button-background-yellow-hover)}.bal-carousel--product .bal-carousel__item__button--color-yellow:active{background:var(--bal-carousel-product-item-button-background-yellow-active)}}@media screen and (max-width: 1023px){.bal-carousel--product .bal-carousel__item__button--color-purple{background:var(--bal-carousel-product-item-button-background-purple)}}@media screen and (min-width: 1024px){.bal-carousel--product .bal-carousel__item__button--color-purple:hover{background:var(--bal-carousel-product-item-button-background-purple-hover)}.bal-carousel--product .bal-carousel__item__button--color-purple:active{background:var(--bal-carousel-product-item-button-background-purple-active)}}.bal-carousel--product .bal-carousel__item__button__image{width:80px;height:80px;pointer-events:none}.bal-carousel--product .bal-carousel__item__button__label{font-weight:var(--bal-weight-bold);color:var(--bal-carousel-product-item-button-label-text-color);font-size:var(--bal-size-normal);-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;height:56px;overflow:hidden;line-height:1.15rem;word-break:break-word}@media screen and (max-width: 768px){.bal-carousel__controls--large{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:100%;gap:2rem;margin-top:1rem}}@media screen and (min-width: 769px),print{.bal-carousel__controls--large .bal-carousel__controls__button{position:absolute;top:calc(50% - 24px)}.bal-carousel__controls--large .bal-carousel__controls__button--left{left:0}.bal-carousel__controls--large .bal-carousel__controls__button--right{right:0}}.bal-carousel__controls__button--hidden{display:none !important;visibility:none !important}.bal-carousel__controls--small .bal-carousel__controls__button{position:absolute;top:calc(50% - 16px)}.bal-carousel__controls--small .bal-carousel__controls__button--left{left:0}.bal-carousel__controls--small .bal-carousel__controls__button--right{right:0}.bal-carousel__controls--small .bal-carousel__controls__button--hidden{display:none !important;visibility:hidden !important}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Carousel = proxyCustomElement(class Carousel extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.balChange = createEvent(this, "balChange", 7);
    this.previousTransformValue = 0;
    this.carouselId = `bal-carousel-${CarouselIds++}`;
    this.mutationObserverActive = true;
    this.onPreviousButtonClick = () => this.previous();
    this.onNextButtonClick = () => this.next();
    this.onControlChange = (selectedValue) => {
      if (selectedValue !== this.value) {
        const isForward = selectedValue > this.value;
        if (isForward) {
          this.next(selectedValue - this.value);
        }
        else {
          this.previous(this.value - selectedValue);
        }
      }
    };
    this.isLastSlideVisible = true;
    this.areControlsHidden = !balBreakpoints.isMobile;
    this.language = defaultConfig.language;
    this.value = 0;
    this.steps = 1;
    this.itemsPerView = 1;
    this.controls = 'none';
    this.controlsOverflow = false;
    this.inverted = false;
    this.fullHeight = false;
    this.aspectRatio = '16by9';
    this.interface = '';
    this.controlsSticky = false;
    this.scrollY = true;
    this.border = false;
  }
  async blockVerticalScrolling(ev) {
    var _a;
    if (!this.scrollY && ((_a = this.el) === null || _a === void 0 ? void 0 : _a.contains(ev.target))) {
      stopEventBubbling(ev);
    }
  }
  mutationListener() {
    this.itemsChanged();
  }
  swipeListener({ left, right }) {
    if (left) {
      this.next();
    }
    else if (right) {
      this.previous();
    }
  }
  breakpointListener(breakpoints) {
    this.areControlsHidden = !breakpoints.mobile;
    this.itemsChanged();
  }
  resizeListener() {
    this.itemsChanged();
  }
  async configChanged(state) {
    this.language = state.language;
  }
  async previous(steps = this.steps) {
    let previousValue = this.value - steps;
    if (previousValue < 0) {
      previousValue = 0;
    }
    const activeSlide = await this.buildSlide(previousValue);
    if (activeSlide) {
      const didAnimate = await this.animate(activeSlide.transformActive, true);
      if (this.value > 0) {
        this.value = previousValue;
        if (!didAnimate) {
          this.previous();
        }
        else {
          this.balChange.emit(this.value);
        }
      }
    }
  }
  async next(steps = this.steps) {
    const items = this.getAllItemElements();
    const length = items.length;
    let nextValue = this.value + steps;
    if (nextValue >= length) {
      nextValue = length - 1;
    }
    const activeSlide = await this.buildSlide(nextValue);
    if (activeSlide) {
      const didAnimate = await this.animate(activeSlide.transformActive, true);
      if (didAnimate) {
        this.value = nextValue;
        this.balChange.emit(this.value);
      }
    }
  }
  async animate(amount = 0, animated = true) {
    return new Promise(resolve => {
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      this.currentRaf = raf(async () => {
        if (this.containerEl && this.innerEl) {
          const lastSlide = await this.buildSlide();
          if (lastSlide) {
            const containerWidth = this.innerEl.clientWidth || 0;
            const itemsWith = lastSlide.transformNext || 0;
            const noNeedForSlide = itemsWith <= containerWidth;
            let maxAmount = itemsWith - containerWidth;
            let isLastSlideVisible = maxAmount <= amount;
            if (this.itemsPerView === 3) {
              maxAmount = itemsWith - containerWidth - 1;
              isLastSlideVisible = maxAmount <= amount;
            }
            const isFirst = amount === 0 || maxAmount <= 2;
            if (isFirst) {
              this.value = 0;
              this.balChange.emit(this.value);
            }
            const hasSmallControls = this.controls === 'small';
            const hasLargeControls = this.controls === 'large';
            let transformValue = noNeedForSlide ? 0 : isLastSlideVisible ? maxAmount : amount;
            if (!isFirst && !noNeedForSlide && (hasSmallControls || hasLargeControls)) {
              transformValue = transformValue - (isLastSlideVisible ? 0 : hasLargeControls ? 56 : 48);
            }
            this.containerEl.style.transitionDuration = animated ? '0.6s' : '0';
            this.containerEl.style.transform = `translate3d(-${transformValue}px, 0px, 0px)`;
            const didAnimate = transformValue !== this.previousTransformValue;
            this.previousTransformValue = transformValue;
            this.isLastSlideVisible = isLastSlideVisible;
            if (this.borderEl) {
              this.borderEl.style.transitionDuration = animated ? '0.6s' : '0';
              this.borderEl.style.transform = `translate3d(${transformValue}px, 0px, 0px)`;
            }
            if (!didAnimate) {
              return resolve(false);
            }
            return resolve(true);
          }
        }
      });
    });
  }
  async buildSlide(slideIndex) {
    const items = this.getAllItemElements();
    const index = slideIndex === undefined ? items.length - 1 : slideIndex;
    if (items.length > index && index >= 0) {
      const data = await this.getAllItemData();
      const gapSize = this.interface === 'product' ? 16 : 0;
      return {
        el: items[index],
        data: data[index],
        transformNext: items
          .filter((_, n) => n < index + 1)
          .reduce((acc, item) => acc + getComputedWidth(item) + gapSize, 0),
        transformActive: items
          .filter((_, n) => n < index)
          .reduce((acc, item) => acc + getComputedWidth(item) + gapSize, 0),
        isFirst: index === 0,
        isLast: index === items.length - 1,
        total: items.length,
        index,
      };
    }
    return undefined;
  }
  async itemsChanged() {
    const activeSlide = await this.buildSlide(this.value);
    if (activeSlide) {
      this.animate(activeSlide.transformActive, false);
    }
  }
  async getAllItemData() {
    const queue = this.getAllItemElements().map(el => el.getData());
    return await Promise.all(queue);
  }
  getAllItemElements() {
    return Array.from(this.el.querySelectorAll('bal-carousel-item'));
  }
  getAllControlItems() {
    const items = this.getAllItemElements();
    return items.map((item, index) => ({ value: index, label: item.label }));
  }
  hasShadow() {
    return this.itemsPerView === 'auto' || this.itemsPerView > 1 || this.interface === 'card';
  }
  hasShadowLeft() {
    return this.hasShadow() && (this.value !== 0 || this.interface === 'card');
  }
  hasShadowRight() {
    return this.hasShadow() && (!this.isLastSlideVisible || this.interface === 'card');
  }
  isFirst() {
    return this.value === 0;
  }
  isLast() {
    return this.isLastSlideVisible;
  }
  render() {
    const block = BEM.block('carousel');
    const inner = block.element('inner');
    const container = inner.element('container');
    const leftControlTitle = i18nControlLabel[this.language].left;
    const rightControlTitle = i18nControlLabel[this.language].right;
    const controlItems = this.getAllControlItems();
    return (h(Host, { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(this.interface).class(this.interface !== '')), block.modifier(`full-height`).class(this.fullHeight)), block.modifier('controls-sticky').class(this.controlsSticky)), block.modifier(`controls-${this.controls}`).class()) }, this.controls === 'tabs' ? (h(TabControl, { value: this.value, items: controlItems, onControlChange: item => this.onControlChange(item.value) })) : (''), h("div", { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, inner.class()), inner.modifier(`items-per-view-${this.itemsPerView}`).class()), inner.modifier(`is-${this.aspectRatio}`).class()), inner.modifier(`inverted`).class(this.inverted)), inner.modifier(`full-height`).class(this.fullHeight)), inner.modifier(`shadow-left`).class(this.hasShadowLeft())), inner.modifier(`shadow-right`).class(this.hasShadowRight())), ref: el => (this.innerEl = el) }, h("div", { class: Object.assign(Object.assign(Object.assign({}, container.class()), container.modifier(`border`).class(this.border)), container.modifier(`is-${this.aspectRatio}`).class()), ref: el => (this.containerEl = el) }, h("slot", null), this.border ? (h("div", { id: `${this.carouselId}-border`, class: Object.assign(Object.assign({}, container.element('border').class()), container.element('border').modifier('inverted').class(this.inverted)), ref: el => (this.borderEl = el) })) : (''))), this.controls === 'dots' ? (h(DotControl, { value: this.value, items: controlItems, onControlChange: item => this.onControlChange(item.value) })) : (''), this.controls === 'large' ? (h(LargeControl, { isFirst: this.isFirst(), isLast: this.isLast(), inverted: this.inverted, areControlsHidden: this.areControlsHidden, leftControlTitle: leftControlTitle, rightControlTitle: rightControlTitle, onNextClick: () => this.onNextButtonClick(), onPreviousClick: () => this.onPreviousButtonClick() })) : (''), this.controls === 'small' ? (h(SmallControl, { isFirst: this.isFirst(), isLast: this.isLast(), inverted: this.inverted, leftControlTitle: leftControlTitle, rightControlTitle: rightControlTitle, onNextClick: () => this.onNextButtonClick(), onPreviousClick: () => this.onPreviousButtonClick() })) : ('')));
  }
  get el() { return this; }
  static get style() { return balCarouselCss; }
}, [4, "bal-carousel", {
    "value": [1026],
    "steps": [2],
    "itemsPerView": [8, "items-per-view"],
    "controls": [1],
    "controlsOverflow": [4, "controls-overflow"],
    "inverted": [4],
    "fullHeight": [4, "full-height"],
    "aspectRatio": [1, "aspect-ratio"],
    "interface": [1],
    "controlsSticky": [4, "controls-sticky"],
    "scrollY": [4, "scroll-y"],
    "border": [4],
    "isLastSlideVisible": [32],
    "areControlsHidden": [32],
    "language": [32],
    "configChanged": [64],
    "previous": [64],
    "next": [64]
  }, [[8, "touchmove", "blockVerticalScrolling"]]]);
__decorate([
  ListenToMutation({ tags: ['bal-carousel-item'], characterData: false })
], Carousel.prototype, "mutationListener", null);
__decorate([
  ListenToSwipe()
], Carousel.prototype, "swipeListener", null);
__decorate([
  ListenToBreakpoints()
], Carousel.prototype, "breakpointListener", null);
__decorate([
  ListenToResize()
], Carousel.prototype, "resizeListener", null);
__decorate([
  ListenToConfig()
], Carousel.prototype, "configChanged", null);
let CarouselIds = 0;
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-carousel", "bal-button", "bal-card", "bal-card-content", "bal-icon", "bal-pagination", "bal-spinner", "bal-text"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-carousel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Carousel);
      }
      break;
    case "bal-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "bal-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "bal-card-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-pagination":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "bal-text":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { Carousel as C, defineCustomElement as d, getComputedPadding as g };
