import { Host, h } from '@stencil/core';
import * as balIcons from '@baloise/design-system-icons';
import { updateBalIcons } from '../../../utils/config';
import { balBrowser } from '../../../utils/browser';
import globalScript from '../../../global';
export class DocApp {
  constructor() {
    this.logComponents = '';
    this.logLifecycle = true;
    this.logEvents = true;
    this.logRender = true;
    this.logCustom = true;
    this.stickyFooter = false;
    this.animated = true;
  }
  connectedCallback() {
    globalScript();
    updateBalIcons(balIcons);
  }
  componentDidRender() {
    const logConfig = {
      components: this.logComponents
        .split(',')
        .map(c => c.trim())
        .filter(c => c !== ''),
      lifecycle: this.logLifecycle,
      event: this.logEvents,
      render: this.logRender,
      custom: this.logCustom,
    };
    if (balBrowser.hasWindow) {
      ;
      window.BaloiseDesignSystem.config.logger = logConfig;
    }
  }
  render() {
    return (h(Host, null, h("bal-app", { animated: this.animated }, h("div", { class: { 'has-sticky-footer': this.stickyFooter } }, h("slot", null)))));
  }
  static get is() { return "bal-doc-app"; }
  static get originalStyleUrls() {
    return {
      "$": ["bal-doc-app.sass"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["bal-doc-app.css"]
    };
  }
  static get properties() {
    return {
      "logComponents": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "log-components",
        "reflect": false,
        "defaultValue": "''"
      },
      "logLifecycle": {
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
          "text": ""
        },
        "attribute": "log-lifecycle",
        "reflect": false,
        "defaultValue": "true"
      },
      "logEvents": {
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
          "text": ""
        },
        "attribute": "log-events",
        "reflect": false,
        "defaultValue": "true"
      },
      "logRender": {
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
          "text": ""
        },
        "attribute": "log-render",
        "reflect": false,
        "defaultValue": "true"
      },
      "logCustom": {
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
          "text": ""
        },
        "attribute": "log-custom",
        "reflect": false,
        "defaultValue": "true"
      },
      "stickyFooter": {
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
          "text": ""
        },
        "attribute": "sticky-footer",
        "reflect": false,
        "defaultValue": "false"
      },
      "animated": {
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
          "text": "Disables all animation inside the bal-app. Can be used for simplify e2e testing."
        },
        "attribute": "animated",
        "reflect": true,
        "defaultValue": "true"
      }
    };
  }
}
