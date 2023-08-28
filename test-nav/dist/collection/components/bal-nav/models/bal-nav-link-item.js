import { h } from '@stencil/core';
export class NavLinkItem {
  constructor(item, observer) {
    this.observer = observer;
    this.clickable = false;
    this.active = false;
    this.data = undefined;
    this.label = item.label;
    this.value = item.value || `nav-link-item-${NavLinkItemIDs++}`;
    this.href = item.href;
    this.target = item.target;
    this.active = !!item.active;
    this.clickable = !!item.clickable;
    this.data = item.data;
    this.onClick = (ev) => {
      this.observer.linkItemClickListener(this);
      if (item.onClick) {
        item.onClick(ev);
      }
    };
  }
  get isLink() {
    return this.href !== undefined && this.href !== null && this.href !== '';
  }
  get type() {
    return this.constructor.name;
  }
  toJson() {
    return {
      label: this.label,
      value: this.value,
      href: this.href,
      target: this.target,
      data: this.data,
    };
  }
  render(_context) {
    return (h("bal-nav-link", { role: "listitem", href: this.href, target: this.target, clickable: this.clickable, selected: this.active, onClick: ev => this.onClick(ev) }, this.label));
  }
}
let NavLinkItemIDs = 0;
