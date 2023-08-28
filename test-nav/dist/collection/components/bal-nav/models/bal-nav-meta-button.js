import { h } from '@stencil/core';
import { NavLinkItem } from './bal-nav-link-item';
import { balBrowser } from '../../../utils/browser';
export class NavMetaButton extends NavLinkItem {
  constructor(item, observer) {
    super(item, observer);
    this.touchPlacement = 'top';
    this.id = `nav-meta-button-${NavMetaButtonIDs++}`;
    this.touchPlacement = item.touchPlacement || 'top';
    this.value = item.value || this.id;
    this.icon = item.icon;
    this.popoverId = item.popupId;
    this.ariaLabel = item.ariaLabel;
    this.htmlTitle = item.htmlTitle;
  }
  renderAtMetaBar() {
    return (h("bal-button", { id: this.value, class: "bal-popup-permanent-trigger bal-nav__popup--desktop", color: "light", size: "small", icon: this.icon, square: !this.label || this.label.length < 3, "aria-label": this.ariaLabel, title: this.htmlTitle, inverted: true, "bal-popup": this.popoverId, "bal-popup-variant": "popover", "bal-popup-arrow": "true", "bal-popup-backdrop": "true", "bal-popup-backdrop-dismiss": "true", "bal-popup-closable": "true", "bal-popup-placement": "bottom-end", "bal-popup-reference": "bal-nav__meta-buttons" }, this.label));
  }
  renderAtTouchTopMetaBar() {
    if (this.touchPlacement === 'top') {
      return (h("bal-button", { id: this.value, class: "bal-nav__popup--touch-top", color: "light", icon: this.icon, square: !!this.icon || !this.label || this.label.length < 3, inverted: false, "aria-label": this.ariaLabel, title: this.htmlTitle, "bal-popup": this.popoverId, "bal-popup-variant": "fullscreen", "bal-popup-closable": "true", "bal-popup-offset": "64" }, this.icon ? '' : this.label));
    }
  }
  renderAtTouchBottomMetaBar() {
    if (this.touchPlacement === 'bottom') {
      return (h("bal-button", { id: this.value, class: "bal-nav__popup--touch-bottom", icon: this.icon, square: !this.label || this.label.length < 3, color: "info", inverted: false, "aria-label": this.ariaLabel, title: this.htmlTitle, "bal-popup": this.popoverId, "bal-popup-variant": "drawer", "bal-popup-closable": "true", "bal-popup-backdrop": "true", "bal-popup-backdrop-dismiss": "true", "bal-popup-offset": "64" }, this.label));
    }
  }
  resetTouchBottomMetaBar() {
    if (balBrowser.hasDocument && this.touchPlacement === 'bottom') {
      const button = document.getElementById(this.value);
      if (button && button.balPopupVariant === 'drawer') {
        button.color = 'info';
      }
    }
  }
  resetDesktopMetaBar() {
    if (balBrowser.hasDocument) {
      const button = document.getElementById(this.value);
      if (button && button.balPopupVariant === 'popover') {
        button.color = 'info';
      }
    }
  }
}
let NavMetaButtonIDs = 0;
