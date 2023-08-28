import { h, Host } from '@stencil/core';
import { logoAngular, logoCodeSandbox, logoHtml, logoReact } from './code-sandbox.logos';
import { getFramework } from './code-sandbox.util';
import { buildHtmlParameters } from './code-sandbox.html';
import { buildReactParameters } from './code-sandbox.react';
import { buildAngularParameters } from './code-sandbox.angular';
export class DocCodeSandbox {
  constructor() {
    this.buildParameters = async () => {
      if (this.framework === 'html') {
        this.parameters = await buildHtmlParameters({
          template: this.template,
          component: this.component,
          fullscreen: this.fullscreen,
        });
      }
      if (this.framework === 'react') {
        this.parameters = await buildReactParameters({
          component: this.component,
          fullscreen: this.fullscreen,
        });
      }
      if (this.framework === 'angular') {
        this.parameters = await buildAngularParameters({
          template: this.template,
          component: this.component,
          name2: this.name2,
          template2: this.template2,
          component2: this.component2,
          fullscreen: this.fullscreen,
        });
      }
    };
    this.fullscreen = false;
    this.framework = undefined;
    this.modules = undefined;
    this.template = undefined;
    this.component = undefined;
    this.name2 = undefined;
    this.template2 = undefined;
    this.component2 = undefined;
    this.visible = false;
    this.primary = false;
    this.logo = false;
    this.label = undefined;
    this.parameters = '';
  }
  frameworkWatcher() {
    this.buildParameters();
  }
  componentWillLoad() {
    this.buildParameters();
  }
  render() {
    const framework = getFramework();
    if (framework !== this.framework && !this.visible) {
      return h(Host, { style: { display: 'none' } });
    }
    const labels = {
      angular: 'Angular',
      html: 'HTML & JS',
      react: 'React',
      vue: 'Vue.js',
    };
    const logos = {
      angular: logoAngular,
      react: logoReact,
      html: logoHtml,
      vue: logoReact,
    };
    const logo = logos[this.framework];
    return (h(Host, { class: {
        'bal-doc-code-sandbox': true,
        [`bal-doc-code-sandbox--${this.framework}`]: true,
      } }, h("bal-doc-app", null, h("form", { action: "https://codesandbox.io/api/v1/sandboxes/define", method: "POST", target: "_blank" }, h("input", { type: "hidden", name: "parameters", value: this.parameters }), h("bal-button", { elementType: 'submit' }, h("div", { class: "is-flex fg-xx-small" }, h("div", { innerHTML: this.logo ? logoCodeSandbox : logo, style: { width: '24px', height: '24px' } }), h("span", null, this.label ? this.label : `${labels[this.framework] || 'Angular'} Code Sandbox`)))))));
  }
  static get is() { return "bal-doc-code-sandbox"; }
  static get originalStyleUrls() {
    return {
      "$": ["bal-doc-code-sandbox.sass"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["bal-doc-code-sandbox.css"]
    };
  }
  static get properties() {
    return {
      "fullscreen": {
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
        "attribute": "fullscreen",
        "reflect": false,
        "defaultValue": "false"
      },
      "framework": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Frameworks",
          "resolved": "\"angular\" | \"html\" | \"react\" | \"vue\"",
          "references": {
            "Frameworks": {
              "location": "import",
              "path": "./code-sandbox.util"
            }
          }
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "framework",
        "reflect": false
      },
      "modules": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "modules",
        "reflect": false
      },
      "template": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "template",
        "reflect": false
      },
      "component": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "component",
        "reflect": false
      },
      "name2": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "name-2",
        "reflect": false
      },
      "template2": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "template-2",
        "reflect": false
      },
      "component2": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "component-2",
        "reflect": false
      },
      "visible": {
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
        "attribute": "visible",
        "reflect": false,
        "defaultValue": "false"
      },
      "primary": {
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
        "attribute": "primary",
        "reflect": false,
        "defaultValue": "false"
      },
      "logo": {
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
        "attribute": "logo",
        "reflect": false,
        "defaultValue": "false"
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "label",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "parameters": {}
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "framework",
        "methodName": "frameworkWatcher"
      }];
  }
}
