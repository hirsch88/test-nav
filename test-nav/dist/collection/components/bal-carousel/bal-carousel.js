var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h, Host, } from '@stencil/core';
import { raf } from '../../utils/helpers';
import { BEM } from '../../utils/bem';
import { TabControl } from './controls/tab-control';
import { DotControl } from './controls/dot-control';
import { LargeControl } from './controls/large-control';
import { SmallControl } from './controls/small-control';
import { stopEventBubbling } from '../../utils/form-input';
import { balBreakpoints } from '../../utils/breakpoints';
import { ListenToBreakpoints } from '../../utils/breakpoints/breakpoints.decorator';
import { ListenToSwipe } from '../../utils/swipe';
import { ListenToMutation } from '../../utils/mutation';
import { ListenToResize } from '../../utils/resize';
import { getComputedWidth } from '../../utils/style';
import { ListenToConfig, defaultConfig } from '../../utils/config';
import { i18nControlLabel } from './bal-carousel.i18n';
export class Carousel {
  constructor() {
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
  static get is() { return "bal-carousel"; }
  static get originalStyleUrls() {
    return {
      "$": ["bal-carousel.sass"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["bal-carousel.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines the active slide index."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "0"
      },
      "steps": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "When how many slides are moved when going forward or backward."
        },
        "attribute": "steps",
        "reflect": false,
        "defaultValue": "1"
      },
      "itemsPerView": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "'auto' | 1 | 2 | 3 | 4",
          "resolved": "\"auto\" | 1 | 2 | 3 | 4",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines how many slides are visible in the container for the user.\n`auto` will use the size of the actual item content"
        },
        "attribute": "items-per-view",
        "reflect": false,
        "defaultValue": "1"
      },
      "controls": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'small' | 'large' | 'dots' | 'tabs' | 'none'",
          "resolved": "\"dots\" | \"large\" | \"none\" | \"small\" | \"tabs\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines the layout of the navigation controls."
        },
        "attribute": "controls",
        "reflect": false,
        "defaultValue": "'none'"
      },
      "controlsOverflow": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` items move under the controls, instead of having a gap"
        },
        "attribute": "controls-overflow",
        "reflect": false,
        "defaultValue": "false"
      },
      "inverted": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the carousel can be used on dark background"
        },
        "attribute": "inverted",
        "reflect": false,
        "defaultValue": "false"
      },
      "fullHeight": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the carousel uses the full height"
        },
        "attribute": "full-height",
        "reflect": false,
        "defaultValue": "false"
      },
      "aspectRatio": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'1by1' | '3by2' | '4by3' | '16by9'",
          "resolved": "\"16by9\" | \"1by1\" | \"3by2\" | \"4by3\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the image aspect ratio.\nShould be combined with the interface `product`"
        },
        "attribute": "aspect-ratio",
        "reflect": false,
        "defaultValue": "'16by9'"
      },
      "interface": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'card' | 'image' | 'product' | ''",
          "resolved": "\"\" | \"card\" | \"image\" | \"product\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines special looks."
        },
        "attribute": "interface",
        "reflect": false,
        "defaultValue": "''"
      },
      "controlsSticky": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` the controls will be sticky to the top."
        },
        "attribute": "controls-sticky",
        "reflect": false,
        "defaultValue": "false"
      },
      "scrollY": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` vertical scrolling on mobile is enabled."
        },
        "attribute": "scroll-y",
        "reflect": false,
        "defaultValue": "true"
      },
      "border": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` a light border is shown at the bottom."
        },
        "attribute": "border",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isLastSlideVisible": {},
      "areControlsHidden": {},
      "language": {}
    };
  }
  static get events() {
    return [{
        "method": "balChange",
        "name": "balChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when a option got selected."
        },
        "complexType": {
          "original": "BalEvents.BalCarouselChangeDetail",
          "resolved": "number | undefined",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "configChanged": {
        "complexType": {
          "signature": "(state: BalConfigState) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalConfigState": {
              "location": "import",
              "path": "../../interfaces"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": "define config for the component"
            }]
        }
      },
      "previous": {
        "complexType": {
          "signature": "(steps?: number) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "PUBLIC METHODS\n------------------------------------------------------",
          "tags": []
        }
      },
      "next": {
        "complexType": {
          "signature": "(steps?: number) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "touchmove",
        "method": "blockVerticalScrolling",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
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
