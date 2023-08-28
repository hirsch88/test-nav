import { h, Host } from '@stencil/core';
import { readSubLevels } from '../utils/level.utils';
export class NavigationLevels {
  async getLevelInfos() {
    return await readSubLevels(this.el, 'bal-navigation-level-meta');
  }
  render() {
    return (h(Host, { class: "is-hidden" }, h("slot", null)));
  }
  static get is() { return "bal-navigation-levels"; }
  static get methods() {
    return {
      "getLevelInfos": {
        "complexType": {
          "signature": "() => Promise<LevelInfo[]>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "LevelInfo": {
              "location": "import",
              "path": "../utils/level.utils"
            }
          },
          "return": "Promise<LevelInfo[]>"
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
