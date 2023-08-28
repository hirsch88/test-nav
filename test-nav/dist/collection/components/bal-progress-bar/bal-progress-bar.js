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
import { h, Host } from '@stencil/core';
import { BEM } from '../../utils/bem';
import { ListenToBreakpoints } from '../../utils/breakpoints';
export class ProgressBar {
  constructor() {
    this.animated = true;
    this.value = 0;
    this.background = 'white';
  }
  componentDidRender() {
    this.updateProgress();
  }
  breakpointListener(_breakpoints) {
    this.updateProgress();
  }
  async configChanged(state) {
    this.animated = state.animated;
  }
  updateProgress() {
    if (this.lineEl) {
      const maxWidth = this.el.clientWidth;
      const value = Math.max(0, Math.min(100, this.value));
      const lineWidth = (maxWidth / 100) * value;
      this.lineEl.style.width = `${lineWidth}px`;
      if (value === 100) {
        this.lineEl.classList.add('bal-progress-bar__line--full');
      }
      else {
        this.lineEl.classList.remove('bal-progress-bar__line--full');
      }
    }
  }
  render() {
    const block = BEM.block('progress-bar');
    const bemLineEl = block.element('line');
    return (h(Host, { class: Object.assign(Object.assign({}, block.class()), block.modifier(`background-${this.background}`).class()) }, h("div", { class: Object.assign(Object.assign({}, bemLineEl.class()), bemLineEl.modifier(`animated`).class(this.animated)), ref: lineEl => (this.lineEl = lineEl) })));
  }
  static get is() { return "bal-progress-bar"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-progress-bar.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-progress-bar.css"]
    };
  }
  static get properties() {
    return {
      "value": {
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
          "text": "The value of the bar in percentage. So min is 0 and 100 would be the max value."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "0"
      },
      "background": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalProgressBarBackground",
          "resolved": "\"grey\" | \"white\"",
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
          "text": "The shape color"
        },
        "attribute": "background",
        "reflect": false,
        "defaultValue": "'white'"
      }
    };
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
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
__decorate([
  ListenToBreakpoints()
], ProgressBar.prototype, "breakpointListener", null);
