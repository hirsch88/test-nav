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
import { Host, h, } from '@stencil/core';
import { areArraysEqual } from '@baloise/web-app-utils';
import { debounceEvent, deepReady, hasParent, isChildOfEventTarget, isDescendant, raf, transitionEndAsync, } from '../../utils/helpers';
import { ListenToConfig } from '../../utils/config';
import { BEM } from '../../utils/bem';
import { Logger } from '../../utils/log';
import { newBalTabOption } from './bal-tab.util';
import { stopEventBubbling } from '../../utils/form-input';
import { TabSelect } from './components/tab-select';
import { TabNav } from './components/tab-nav';
import { getComputedPadding } from '../../utils/style';
import { ListenToBreakpoints, balBreakpoints } from '../../utils/breakpoints';
import { ListenToMutation } from '../../utils/mutation';
import { ListenToResize } from '../../utils/resize';
export class Tabs {
  constructor() {
    this.tabsId = `bal-tabs-${TabsIds++}`;
    this.mutationObserverActive = true;
    this.getOptions = () => {
      if (this.options.length > 0) {
        return [...this.options.map(newBalTabOption)];
      }
      else {
        return Promise.all(this.items.map(value => value.getOptions()));
      }
    };
    this.updateStore = (newStore) => {
      if (!areArraysEqual(this.store, newStore)) {
        this.store = newStore;
      }
    };
    this.setActiveItem = () => {
      const activeTabs = this.store.filter(t => t.active);
      if (activeTabs.length > 0) {
        const firstActiveTab = activeTabs[0];
        this.value = firstActiveTab.value;
      }
      else {
        if (!this.accordion && this.value === undefined && this.store.length > 0) {
          const firstStep = this.store[0];
          this.value = firstStep.value;
        }
      }
    };
    this.setActiveContent = () => {
      if (this.options.length === 0) {
        this.items.forEach(item => item.setActive(this.isActive(item)));
      }
    };
    this.getLineSize = (element, padding) => {
      if (element) {
        const isVertical = this.isVertical();
        if (isVertical) {
          return element.clientHeight;
        }
        else {
          const clientWidth = element.clientWidth;
          if (this.expanded) {
            return clientWidth;
          }
          const paddingX = padding.left + padding.right;
          return clientWidth - paddingX;
        }
      }
      return 0;
    };
    this.getOffset = (element, padding) => {
      const isVertical = this.isVertical();
      if (isVertical) {
        if (element.offsetTop) {
          return element.offsetTop;
        }
      }
      else {
        if (element.offsetLeft) {
          if (this.expanded) {
            return element.offsetLeft;
          }
          return element.offsetLeft + padding.left;
        }
        const carouselItem = element.closest('bal-carousel-item');
        if (carouselItem) {
          if (this.expanded) {
            return carouselItem.offsetLeft;
          }
          return carouselItem.offsetLeft + padding.left;
        }
      }
      return 0;
    };
    this.animateLine = async () => {
      if (!this.shouldAnimate()) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      raf(async () => {
        await deepReady(this.el, true);
        this.currentRaf = raf(async () => {
          const target = this.getTargetElement(this.value);
          if (!target) {
            return;
          }
          if (target.getAttribute('target') === '_blank') {
            return;
          }
          const padding = getComputedPadding(target);
          const size = this.getLineSize(target, padding);
          const offset = this.getOffset(target, padding);
          const lineElement = this.getLineElement();
          if (lineElement) {
            const isVertical = this.isVertical();
            this.balWillAnimate.emit(this.value);
            const waitForTransition = transitionEndAsync(lineElement, 300);
            if (isVertical) {
              lineElement.style.setProperty('transform', `translateY(${offset}px)`);
              lineElement.style.setProperty('min-height', `${size}px`);
              lineElement.style.setProperty('height', `${size}px`);
              lineElement.style.removeProperty('min-width');
              lineElement.style.removeProperty('width');
            }
            else {
              lineElement.style.setProperty('transform', `translateX(${offset}px)`);
              lineElement.style.setProperty('min-width', `${size}px`);
              lineElement.style.setProperty('width', `${size}px`);
              lineElement.style.removeProperty('min-height');
              lineElement.style.removeProperty('height');
              const borderElement = this.getBorderElement();
              const carouselElement = this.getCarouselElement();
              if (borderElement && carouselElement) {
                const containerMaxWidth = carouselElement.clientWidth;
                borderElement.style.setProperty('width', `${containerMaxWidth}px`);
              }
              await waitForTransition;
              this.balDidAnimate.emit(this.value);
            }
          }
        });
      });
    };
    this.toggleAccordionState = (initialUpdate = false) => {
      if (this.accordion) {
        if (this.isAccordionOpen) {
          this.collapseAccordion(initialUpdate);
        }
        else {
          this.expandAccordion(initialUpdate);
        }
      }
    };
    this.expandAccordion = (initialUpdate = false) => {
      this.isAccordionOpen = true;
      const { contentEl, contentElWrapper } = this;
      if (initialUpdate || contentEl === undefined || contentElWrapper === undefined) {
        this.accordionState = 4;
        return;
      }
      if (this.accordionState === 4) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        raf(() => {
          this.accordionState = 8;
          this.currentRaf = raf(async () => {
            const contentHeight = contentElWrapper.offsetHeight;
            const waitForTransition = transitionEndAsync(contentEl, 300);
            contentEl.style.setProperty('max-height', `${contentHeight}px`);
            this.balWillAnimate.emit(this.value);
            await waitForTransition;
            this.accordionState = 4;
            contentEl.style.removeProperty('max-height');
            this.balDidAnimate.emit(this.value);
          });
        });
      }
      else {
        this.accordionState = 4;
        this.balWillAnimate.emit(this.value);
        this.balDidAnimate.emit(this.value);
      }
    };
    this.collapseAccordion = (initialUpdate = false) => {
      this.isAccordionOpen = false;
      const { contentEl } = this;
      if (initialUpdate || contentEl === undefined) {
        this.accordionState = 1;
        return;
      }
      if (this.accordionState === 1) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        this.currentRaf = raf(async () => {
          const contentHeight = contentEl.offsetHeight;
          contentEl.style.setProperty('max-height', `${contentHeight}px`);
          raf(async () => {
            const waitForTransition = transitionEndAsync(contentEl, 300);
            this.accordionState = 2;
            this.balWillAnimate.emit(this.value);
            await waitForTransition;
            this.accordionState = 1;
            contentEl.style.removeProperty('max-height');
            this.balDidAnimate.emit(this.value);
          });
        });
      }
      else {
        this.accordionState = 1;
        this.balWillAnimate.emit(this.value);
        this.balDidAnimate.emit(this.value);
      }
    };
    this.shouldAnimate = () => {
      if (typeof window === 'undefined') {
        return false;
      }
      return this.animated;
    };
    this.onOptionChange = async () => {
      try {
        const options = await this.getOptions();
        this.updateStore(options);
        this.setActiveItem();
        this.setActiveContent();
        this.animateLine();
      }
      catch (e) {
        console.warn('[WARN] - Could not read tab options');
      }
    };
    this.onSelectTab = async (ev, step) => {
      if (step.prevent || step.disabled || !this.clickable) {
        stopEventBubbling(ev);
      }
      if (!step.disabled && this.clickable) {
        if (this.accordion) {
          if (step.value === this.value) {
            this.toggleAccordionState();
          }
          else {
            this.expandAccordion();
          }
        }
        if (step.navigate) {
          step.navigate.emit(ev);
        }
        if (step.value !== this.value) {
          this.balChange.emit(step.value);
          await this.select(step);
        }
      }
    };
    this.isAccordionOpen = false;
    this.accordionState = 1;
    this.isNavbarOpen = false;
    this.inNavbar = false;
    this.inNavbarLight = false;
    this.isMobile = balBreakpoints.isMobile;
    this.isTablet = balBreakpoints.isTablet;
    this.store = [];
    this.animated = true;
    this.float = 'left';
    this.fullwidth = false;
    this.accordion = false;
    this.overflow = true;
    this.options = [];
    this.context = undefined;
    this.iconPosition = 'horizontal';
    this.expanded = false;
    this.spaceless = false;
    this.clickable = true;
    this.border = false;
    this.inverted = false;
    this.debounce = 0;
    this.vertical = false;
    this.verticalColSize = 'one-third';
    this.selectOnMobile = false;
    this.value = undefined;
  }
  createLogger(log) {
    this.log = log;
  }
  async optionChanged() {
    this.onOptionChange();
    this.mutationObserverActive = this.options === undefined;
  }
  debounceChanged() {
    this.balChange = debounceEvent(this.balChange, this.debounce);
  }
  async valueChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.onOptionChange();
    }
  }
  connectedCallback() {
    this.inNavbar = hasParent('bal-navbar', this.el);
    if (this.inNavbar) {
      const parentNavbar = this.el.closest('bal-navbar');
      if (parentNavbar) {
        this.inNavbarLight = parentNavbar.light;
      }
    }
    this.debounceChanged();
    this.mutationObserverActive = this.options === undefined || this.options.length < 1;
    if (this.accordion) {
      const inNavMenuBar = hasParent('bal-nav-menu-bar', this.el);
      if (inNavMenuBar) {
        this.isAccordionOpen = false;
      }
      else {
        const isAccordionOpen = this.value !== undefined && this.value.length > 0;
        if (isAccordionOpen) {
          this.expandAccordion(true);
        }
        else {
          this.collapseAccordion(true);
        }
      }
    }
  }
  componentDidLoad() {
    this.onOptionChange();
  }
  mutationListener() {
    this.onOptionChange();
  }
  breakpointListener(breakpoints) {
    this.isMobile = breakpoints.mobile;
    this.isTablet = breakpoints.tablet;
    this.animateLine();
  }
  resizeListener() {
    this.animateLine();
  }
  listenToWillAnimate(ev) {
    isChildOfEventTarget(ev, this.el, () => this.animateLine());
  }
  listenToDidAnimate(ev) {
    isChildOfEventTarget(ev, this.el, () => this.animateLine());
    this.isUsedInNavbar(ev);
  }
  isUsedInNavbar(ev) {
    const target = ev.target;
    const parentNavbar = target.closest('bal-navbar');
    const isNavbarOpen = ev.target;
    if (parentNavbar && isDescendant(parentNavbar, this.el)) {
      this.isNavbarOpen = isNavbarOpen;
    }
  }
  async configChanged(state) {
    this.animated = state.animated;
  }
  async select(tab) {
    this.value = tab.value;
  }
  async getOptionByValue(value) {
    const options = this.store;
    return options.find(option => option.value === value);
  }
  async renderLine() {
    this.animateLine();
  }
  async closeAccordion() {
    console.log('in collapseAccordionGlobal');
    if (this.isAccordionOpen) {
      this.collapseAccordion();
    }
  }
  get items() {
    return Array.from(this.el.querySelectorAll(`#${this.tabsId} > bal-tab-item`));
  }
  isActive(step) {
    return step.value === this.value;
  }
  parseVertical() {
    if (this.vertical === 'true' || this.vertical === '') {
      return true;
    }
    if (this.vertical === 'false' || this.vertical === undefined) {
      return false;
    }
    if (this.vertical === 'mobile') {
      return this.isMobile;
    }
    if (this.vertical === 'tablet') {
      return this.isTablet || this.isMobile;
    }
    return this.vertical;
  }
  isVertical() {
    const isVertical = this.parseVertical();
    const isMobile = this.isMobile;
    const isTablet = this.isTablet;
    const isTouch = isMobile || isTablet;
    return isVertical || (isTouch && this.inNavbar);
  }
  getTargetElement(value) {
    const selector = `[data-tabs="${this.tabsId}"]`;
    const elements = Array.from(this.el.querySelectorAll(selector));
    return elements.filter(element => element.getAttribute('data-value') == value)[0];
  }
  getLineElement() {
    return this.el.querySelector(`#${this.tabsId}-line`);
  }
  getBorderElement() {
    return this.el.querySelector(`#${this.tabsId}-border`);
  }
  getCarouselElement() {
    return this.el.querySelector(`#${this.tabsId}-carousel`);
  }
  render() {
    const block = BEM.block('tabs');
    const isMobile = this.isMobile;
    const isTablet = this.isTablet;
    const isTouch = isMobile || isTablet;
    const isInverted = (this.inNavbar && !isTouch && !this.inNavbarLight) || (!this.inNavbar && this.inverted);
    const isVertical = this.isVertical();
    const hasCarousel = !isVertical && this.overflow && !this.expanded;
    const isSelect = isMobile && this.selectOnMobile;
    const tabs = this.store.map(tab => (Object.assign(Object.assign({}, tab), { active: tab.value === this.value })));
    const expanded = this.accordionState === 4 || this.accordionState === 8;
    const contentPart = expanded ? 'content expanded' : 'content';
    return (h(Host, { class: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier('navbar').class(this.inNavbar)), block.modifier('vertical').class(isVertical)), block.modifier('fullwidth').class(this.expanded || this.fullwidth)), block.modifier('accordion').class(this.accordion)), block.modifier('animated').class(this.animated)), block.modifier('expanding').class(this.accordionState === 8)), block.modifier('expanded').class(this.accordionState === 4)), block.modifier('collapsing').class(this.accordionState === 2)), block.modifier('collapsed').class(this.accordionState === 1)), "data-value": this.store
        .filter(t => this.isActive(t))
        .map(t => t.value)
        .join(','), "data-label": this.store
        .filter(t => this.isActive(t))
        .map(t => t.label)
        .join(',') }, isSelect ? (h(TabSelect, { value: this.value, items: tabs, onSelectTab: this.onSelectTab })) : (h(TabNav, { items: tabs, tabsId: this.tabsId, onSelectTab: this.onSelectTab, clickable: this.clickable, accordion: this.accordion, isAccordionOpen: this.isAccordionOpen, lineActive: this.value !== undefined, inverted: isInverted, animated: this.animated, context: this.context, border: this.border, spaceless: this.spaceless, expanded: this.expanded, isMobile: isMobile, isTouch: isTouch, isVertical: isVertical, inNavbar: this.inNavbar, hasCarousel: hasCarousel, iconPosition: this.iconPosition, verticalColSize: this.verticalColSize })), h("div", { role: "region", part: contentPart, ref: contentEl => (this.contentEl = contentEl), class: Object.assign({}, block.element('tabs').element('content').class()) }, h("div", { id: this.tabsId, class: Object.assign({}, block.element('tabs').element('content').element('wrapper').class()), ref: contentElWrapper => (this.contentElWrapper = contentElWrapper) }, h("slot", null)))));
  }
  static get is() { return "bal-tabs"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-tabs.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-tabs.css"]
    };
  }
  static get properties() {
    return {
      "float": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalTabsFloat",
          "resolved": "\"left\" | \"right\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "deprecated",
              "text": "Defines the layout of the tabs. Right only works from the breakpoint\nhigh-definition and beyond."
            }],
          "text": ""
        },
        "attribute": "float",
        "reflect": false,
        "defaultValue": "'left'"
      },
      "fullwidth": {
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
          "text": "If `true` the tabs is a block element and uses 100% of the width"
        },
        "attribute": "fullwidth",
        "reflect": false,
        "defaultValue": "false"
      },
      "accordion": {
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
          "text": "If `true` the tab items can be open and closed"
        },
        "attribute": "accordion",
        "reflect": false,
        "defaultValue": "false"
      },
      "overflow": {
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
          "text": "If `true` the tabs have a carousel if they need more space than provided."
        },
        "attribute": "overflow",
        "reflect": false,
        "defaultValue": "true"
      },
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "BalTabOption[]",
          "resolved": "BalTabOption[]",
          "references": {
            "BalTabOption": {
              "location": "import",
              "path": "./bal-tab.type"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Steps can be passed as a property or through HTML markup."
        },
        "defaultValue": "[]"
      },
      "context": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalTabsContext",
          "resolved": "\"meta\" | \"navbar\" | \"navigation\" | undefined",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the layout of the tabs."
        },
        "attribute": "context",
        "reflect": false
      },
      "iconPosition": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalTabsIconPosition",
          "resolved": "\"horizontal\" | \"vertical\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines the layout of the tabs."
        },
        "attribute": "icon-position",
        "reflect": false,
        "defaultValue": "'horizontal'"
      },
      "expanded": {
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
          "text": "If `true` the field expands over the whole width."
        },
        "attribute": "expanded",
        "reflect": false,
        "defaultValue": "false"
      },
      "spaceless": {
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
          "text": "If `true` the tabs container does not have a padding left or right."
        },
        "attribute": "spaceless",
        "reflect": false,
        "defaultValue": "false"
      },
      "clickable": {
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
          "text": "If `true` the tabs or steps can be clicked."
        },
        "attribute": "clickable",
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
          "text": "If `true` a light border is shown for the tabs."
        },
        "attribute": "border",
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
          "text": "If `true` the tabs can be uses on dark background"
        },
        "attribute": "inverted",
        "reflect": false,
        "defaultValue": "false"
      },
      "debounce": {
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
          "text": "Set the amount of time, in milliseconds, to wait to trigger the `balChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`."
        },
        "attribute": "debounce",
        "reflect": false,
        "defaultValue": "0"
      },
      "vertical": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalTabsVertical",
          "resolved": "\"mobile\" | \"tablet\" | boolean",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true` tabs are align vertically."
        },
        "attribute": "vertical",
        "reflect": false,
        "defaultValue": "false"
      },
      "verticalColSize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalTabsColSize",
          "resolved": "\"full\" | \"half\" | \"one-quarter\" | \"one-third\" | \"three-quarters\" | \"two-thirds\"",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The col size of the tabs on vertical mode."
        },
        "attribute": "vertical-col-size",
        "reflect": false,
        "defaultValue": "'one-third'"
      },
      "selectOnMobile": {
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
          "text": "If `true` the tabs are shown as a select component on mobile"
        },
        "attribute": "select-on-mobile",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "undefined"
      }
    };
  }
  static get states() {
    return {
      "isAccordionOpen": {},
      "accordionState": {},
      "isNavbarOpen": {},
      "inNavbar": {},
      "inNavbarLight": {},
      "isMobile": {},
      "isTablet": {},
      "store": {},
      "animated": {}
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
          "text": "Emitted when the changes has finished."
        },
        "complexType": {
          "original": "BalEvents.BalTabsChangeDetail",
          "resolved": "string | undefined",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balWillAnimate",
        "name": "balWillAnimate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted before the animation starts"
        },
        "complexType": {
          "original": "BalEvents.BalTabsWillAnimateDetail",
          "resolved": "string | undefined",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balDidAnimate",
        "name": "balDidAnimate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the animation has finished"
        },
        "complexType": {
          "original": "BalEvents.BalTabsDidAnimateDetail",
          "resolved": "string | undefined",
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
              "path": "../../utils/config"
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
      "select": {
        "complexType": {
          "signature": "(tab: BalTabOption) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalTabOption": {
              "location": "import",
              "path": "./bal-tab.type"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Go to tab with the given value",
          "tags": []
        }
      },
      "getOptionByValue": {
        "complexType": {
          "signature": "(value: string) => Promise<BalTabOption | undefined>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalTabOption": {
              "location": "import",
              "path": "./bal-tab.type"
            }
          },
          "return": "Promise<BalTabOption | undefined>"
        },
        "docs": {
          "text": "Find the options properties by its value",
          "tags": []
        }
      },
      "renderLine": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": "Rerenders the line to mark the active tab."
            }]
        }
      },
      "closeAccordion": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": "Closes the accordion"
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "options",
        "methodName": "optionChanged"
      }, {
        "propName": "debounce",
        "methodName": "debounceChanged"
      }, {
        "propName": "value",
        "methodName": "valueChanged"
      }];
  }
  static get listeners() {
    return [{
        "name": "balWillAnimate",
        "method": "listenToWillAnimate",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "balDidAnimate",
        "method": "listenToDidAnimate",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Logger('bal-tabs')
], Tabs.prototype, "createLogger", null);
__decorate([
  ListenToMutation({ tags: ['bal-tabs', 'bal-tab-item'] })
], Tabs.prototype, "mutationListener", null);
__decorate([
  ListenToBreakpoints()
], Tabs.prototype, "breakpointListener", null);
__decorate([
  ListenToResize()
], Tabs.prototype, "resizeListener", null);
__decorate([
  ListenToConfig()
], Tabs.prototype, "configChanged", null);
let TabsIds = 0;
