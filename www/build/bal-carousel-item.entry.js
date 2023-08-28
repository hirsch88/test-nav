import { r as registerInstance, f as createEvent, h, g as Host, i as getElement } from './index-2c15ff91.js';
import { B as BEM } from './bem-1b28532d.js';
import { i as inheritAttributes } from './attributes-56afda45.js';

const CarouselItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.balNavigate = createEvent(this, "balNavigate", 7);
    this.balFocus = createEvent(this, "balFocus", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
    this.imageInheritAttributes = {};
    this.onClick = (ev) => {
      if (this.href !== undefined) {
        this.balNavigate.emit(ev);
      }
    };
    this.onFocus = () => {
      this.balFocus.emit();
    };
    this.onBlur = () => {
      this.balBlur.emit();
    };
    this.src = undefined;
    this.label = '';
    this.elementType = 'button';
    this.name = '';
    this.value = '';
    this.href = undefined;
    this.target = '_self';
    this.rel = undefined;
    this.download = undefined;
    this.color = undefined;
  }
  componentWillLoad() {
    this.imageInheritAttributes = inheritAttributes(this.el, ['alt']);
  }
  async getData() {
    return {
      clientWidth: this.el.clientWidth,
      label: this.label,
    };
  }
  render() {
    const block = BEM.block('carousel');
    const itemEl = block.element('item');
    const isProduct = !!this.color && !!this.label;
    if (!isProduct) {
      return (h(Host, { class: Object.assign({}, itemEl.class()) }, this.src !== undefined ? (h("img", Object.assign({ draggable: false, onDragStart: () => false, src: this.src }, this.imageInheritAttributes))) : (''), h("slot", null)));
    }
    const button = itemEl.element('button');
    const image = button.element('image');
    const label = button.element('label');
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
    return (h(Host, { class: Object.assign({}, itemEl.class()) }, h(TagType, Object.assign({}, attrs, { class: Object.assign(Object.assign({}, button.class()), button.modifier(`color-${this.color}`).class()), part: "native", onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.onClick }), this.src !== undefined ? (h("img", Object.assign({ class: Object.assign({}, image.class()), loading: "lazy", draggable: false, onDragStart: () => false, src: this.src }, this.imageInheritAttributes))) : (''), this.label !== undefined ? (h("span", { class: Object.assign(Object.assign({}, label.class()), { 'has-text-weight-bold': true }) }, this.label)) : (''), h("slot", null))));
  }
  get el() { return getElement(this); }
};

export { CarouselItem as bal_carousel_item };
