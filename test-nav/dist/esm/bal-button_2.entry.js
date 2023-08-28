import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { i as inheritAttributes } from './attributes-56afda45.js';
import { B as BEM } from './bem-1b28532d.js';

const balButtonCss = "bal-button,.bal-button{display:inline-block;position:static}bal-button.is-fullwidth,.bal-button.is-fullwidth{width:100%;-ms-flex:1 1 100%;flex:1 1 100%}bal-button[disabled] bal-icon,.bal-button[disabled] bal-icon{pointer-events:none}.bal-button .button-label.has-no-wrap{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.bal-button-group{display:-ms-flexbox;display:flex}.bal-button-group--position-center{-ms-flex-pack:center;justify-content:center}.bal-button-group--position-left{-ms-flex-pack:start;justify-content:flex-start}.bal-button-group--position-right{-ms-flex-pack:end;justify-content:flex-end}@media screen and (max-width: 768px){.bal-button-group--direction-auto .field.is-grouped,.bal-button-group--direction-auto .bal-button,.bal-button-group--direction-auto .bal-button .button{width:100% !important}}@media screen and (max-width: 768px){.bal-button-group--direction-column .field.is-grouped,.bal-button-group--direction-column .bal-button,.bal-button-group--direction-column .bal-button .button{width:100% !important}}";

const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balNavigate = createEvent(this, "balNavigate", 7);
    this.balFocus = createEvent(this, "balFocus", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
    this.balDidRender = createEvent(this, "balDidRender", 7);
    this.inheritAttributes = {};
    this.onFocus = () => {
      this.balFocus.emit();
    };
    this.onBlur = () => {
      this.balBlur.emit();
    };
    this.onClick = (ev) => {
      if (this.href !== undefined) {
        this.balNavigate.emit(ev);
      }
    };
    this.color = 'primary';
    this.elementType = 'button';
    this.disabled = false;
    this.size = '';
    this.href = undefined;
    this.target = '_self';
    this.rel = undefined;
    this.download = undefined;
    this.shadow = false;
    this.square = false;
    this.isActive = false;
    this.expanded = false;
    this.flat = false;
    this.outlined = false;
    this.inverted = false;
    this.loading = false;
    this.rounded = false;
    this.topRounded = undefined;
    this.bottomRounded = undefined;
    this.icon = '';
    this.iconTurn = false;
    this.iconRight = '';
    this.noWrap = false;
    this.name = '';
    this.value = '';
    this.aria = undefined;
  }
  listenOnClick(ev) {
    if (this.disabled && ev.target && ev.target === this.el) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }
  componentWillLoad() {
    this.inheritAttributes = inheritAttributes(this.el, ['title', 'aria-label', 'aria-controls']);
  }
  componentDidRender() {
    this.balDidRender.emit();
  }
  componentWillRender() {
    this.inheritAttributes = inheritAttributes(this.el, ['title', 'aria-label', 'aria-hidden', 'tabindex']);
  }
  get isIconInverted() {
    return this.inverted;
  }
  get buttonCssClass() {
    return {
      'button': true,
      [`is-${this.color}`]: true,
      'is-flat': this.flat,
      'is-square': this.square,
      'is-small': this.size === 'small',
      'is-inverted': this.inverted,
      'is-active': this.isActive,
      'is-outlined': this.outlined,
      'is-fullwidth': this.expanded,
      'is-disabled': this.disabled,
      'is-loading': this.loading,
      'has-blur-shadow': this.shadow === true,
      'has-radius-rounded': this.rounded === true,
      'has-round-top-corners': this.topRounded === true,
      'has-round-bottom-corners': this.bottomRounded === true,
      'has-no-round-top-corners': this.topRounded === false,
      'has-no-round-bottom-corners': this.bottomRounded === false,
    };
  }
  get leftIconAttrs() {
    if (!this.icon || this.loading) {
      return {
        style: { display: 'none' },
      };
    }
    return {};
  }
  get leftRightAttrs() {
    if (!this.iconRight || this.loading) {
      return {
        style: { display: 'none' },
      };
    }
    return {};
  }
  get loadingAttrs() {
    if (!this.loading) {
      return {
        style: { display: 'none' },
      };
    }
    return {
      style: { position: 'absolute' },
    };
  }
  handleClick(ev) {
    if (this.disabled) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }
  render() {
    var _a, _b, _c;
    const { elementType, download, href, rel, target, name, value } = this;
    const TagType = this.href === undefined ? 'button' : 'a';
    const attrs = TagType === 'button'
      ? { type: elementType, name, value }
      : {
        download,
        href,
        rel,
        target,
      };
    const spinnerColor = () => {
      if (this.disabled) {
        return 'blue';
      }
      switch (this.color) {
        case 'primary':
        case 'success':
        case 'warning':
        case 'danger':
          return this.inverted ? 'blue' : 'white';
        default:
          return this.inverted ? 'white' : 'blue';
      }
    };
    const ariaAttributes = {
      'title': ((_a = this.aria) === null || _a === void 0 ? void 0 : _a.title) || this.inheritAttributes['title'],
      'aria-label': ((_b = this.aria) === null || _b === void 0 ? void 0 : _b.label) || this.inheritAttributes['aria-label'],
      'aria-controls': ((_c = this.aria) === null || _c === void 0 ? void 0 : _c.controls) || this.inheritAttributes['aria-controls'],
    };
    return (h(Host, { onClick: this.handleClick, class: {
        'bal-button': true,
        'control': true,
        'is-fullwidth': this.expanded,
        'is-disabled': this.disabled,
      } }, h(TagType, Object.assign({}, attrs, this.inheritAttributes, { type: this.elementType, class: this.buttonCssClass, part: "native", disabled: this.disabled, onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.onClick, "aria-disabled": this.disabled ? 'true' : null, "data-testid": "bal-button" }, ariaAttributes), h("bal-spinner", Object.assign({ color: spinnerColor(), small: true }, this.loadingAttrs, { deactivated: !this.loading })), h("bal-icon", Object.assign({}, this.leftIconAttrs, { class: "icon-left", name: this.icon, size: this.square ? this.size : 'small', turn: this.iconTurn, inverted: this.isIconInverted })), h("span", { class: {
        'button-label': true,
        'has-no-wrap': this.noWrap,
        'is-small': this.size === 'small',
      }, style: { opacity: this.loading ? '0' : '1' }, "data-testid": "bal-button-label" }, h("slot", null)), h("bal-icon", Object.assign({}, this.leftRightAttrs, { class: "icon-right", name: this.iconRight, size: 'small', turn: this.iconTurn, inverted: this.isIconInverted })))));
  }
  get el() { return getElement(this); }
};
Button.style = {
  css: balButtonCss
};

const ButtonGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.position = '';
    this.direction = 'auto';
    this.reverse = false;
  }
  render() {
    const block = BEM.block('button-group');
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({}, block.class()), block.modifier(`position-${this.position}`).class()), block.modifier(`direction-${this.direction}`).class()) }, h("div", { class: {
        'field': true,
        'is-grouped': true,
        'is-reverse': this.reverse,
        [`has-direction-${this.direction}`]: true,
      } }, h("slot", null))));
  }
};

export { Button as bal_button, ButtonGroup as bal_button_group };
