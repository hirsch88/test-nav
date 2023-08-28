import { Host, h, writeTask } from '@stencil/core';
import { dismiss, eventMethod, prepareOverlay } from '../../../utils/overlays/overlays';
import { attachComponent, detachComponent } from '../../../utils/framework-delegate';
import { deepReady, wait } from '../../../utils/helpers';
import { getClassMap } from '../../../utils/css-classes';
import { BalScrollHandler } from '../../../utils/scroll';
export class Modal {
  constructor() {
    this.isClickedOutsideOnMouseDown = false;
    this.isClickedOutsideOnMouseUp = false;
    this.bodyScrollHandler = new BalScrollHandler();
    this.presented = false;
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.dataTestId = undefined;
    this.modalWidth = 640;
    this.space = '';
    this.hasBackdrop = true;
    this.isClosable = true;
    this.component = undefined;
    this.componentProps = undefined;
    this.cssClass = undefined;
    this.backdropDismiss = true;
  }
  connectedCallback() {
    this.bodyScrollHandler.connect();
    prepareOverlay(this);
  }
  disconnectedCallback() {
    this.bodyScrollHandler.disconnect();
  }
  async open() {
    await deepReady(this.usersElement);
    this.setModalActiveOnBody();
    writeTask(() => {
      if (this.modalBackgroundElement) {
        this.modalBackgroundElement.classList.add('fadeIn');
      }
      if (this.modalContentElement) {
        this.modalContentElement.classList.add('fadeInDown');
      }
    });
    if (this.presented) {
      return;
    }
    this.willPresent.emit();
    this.presented = true;
    await wait(150);
    writeTask(() => {
      if (this.modalBackgroundElement) {
        this.modalBackgroundElement.classList.remove('fadeIn');
      }
      if (this.modalContentElement) {
        this.modalContentElement.classList.remove('fadeInDown');
      }
    });
    this.didPresent.emit();
  }
  async close() {
    this.willDismiss.emit();
    this.unsetModalActiveOnBody();
    this.presented = false;
    this.didDismiss.emit();
  }
  async present() {
    this.setModalActiveOnBody();
    if (this.presented) {
      return;
    }
    const container = this.el.querySelector(`.bal-modal__content`);
    if (!container) {
      throw new Error('container is undefined');
    }
    const componentProps = Object.assign(Object.assign({}, this.componentProps), { modal: this.el });
    this.usersElement = await attachComponent(this.delegate, container, this.component, [], componentProps);
    await this.open();
  }
  async dismiss(data, role) {
    this.unsetModalActiveOnBody();
    if (this.delegate === undefined) {
      await this.close();
      return true;
    }
    const dismissed = await dismiss(this, data, role, async () => {
      writeTask(() => {
        if (this.modalBackgroundElement) {
          this.modalBackgroundElement.classList.add('fadeOut');
        }
        if (this.modalContentElement) {
          this.modalContentElement.classList.add('fadeOutUp');
        }
      });
      await wait(140);
    });
    if (dismissed) {
      await detachComponent(this.delegate, this.usersElement);
    }
    return dismissed;
  }
  onDidDismiss() {
    return eventMethod(this.el, 'balModalDidDismiss');
  }
  onWillDismiss() {
    return eventMethod(this.el, 'balModalWillDismiss');
  }
  async onClickCloseButton(ev) {
    if (this.isClosable && this.presented && ev && ev.target) {
      const element = ev.target;
      const closestBalButton = element.closest('bal-button');
      if (closestBalButton && closestBalButton.hasAttribute('modal-close')) {
        await this.dismiss(undefined, 'model-close');
      }
      if (this.backdropDismiss && this.isClickedOutsideOnMouseUp && this.isClickedOutsideOnMouseDown) {
        await this.dismiss(undefined, 'model-close');
      }
    }
  }
  async onMouseDown(ev) {
    this.isClickedOutsideOnMouseDown = this.isClickedOutside(ev);
  }
  async onMouseUp(ev) {
    this.isClickedOutsideOnMouseUp = this.isClickedOutside(ev);
  }
  async handleKeyUp(ev) {
    const modals = Array.from(document.querySelectorAll('bal-modal')).filter(el => el.hasAttribute('aria-presented'));
    const numbers = modals
      .map(el => el.overlayIndex)
      .map(num => parseInt(num))
      .filter(num => !Number.isNaN(num));
    const max = Math.max(...numbers);
    if (this.overlayIndex === max) {
      ev.preventDefault();
      ev.stopPropagation();
      if (this.presented && this.isClosable) {
        if (ev.key === 'Escape' || ev.key === 'Esc') {
          if (this.delegate) {
            await this.dismiss(undefined, 'model-escape');
          }
          else {
            await this.close();
          }
        }
      }
    }
  }
  setModalActiveOnBody() {
    this.bodyScrollHandler.disable();
  }
  unsetModalActiveOnBody() {
    this.bodyScrollHandler.enable();
  }
  isClickedOutside(ev) {
    if (this.isClosable && this.presented && ev && ev.target && this.backdropDismiss) {
      const element = ev.target;
      return element.classList.contains('bal-modal__container');
    }
    return false;
  }
  render() {
    return (h(Host, { "aria-modal": "true", "aria-presented": this.presented ? 'true' : null, "data-testid": this.dataTestId, tabindex: "-1", class: Object.assign({ 'bal-modal': true, 'bal-modal--is-closable': this.isClosable, 'bal-modal--is-active': this.presented }, getClassMap(this.cssClass)), style: {
        '--bal-width': `${this.modalWidth}px`,
      } }, h("div", { class: {
        'bal-modal__background': true,
        'is-hidden': !this.hasBackdrop,
      }, ref: div => (this.modalBackgroundElement = div) }), h("div", { class: {
        'bal-modal__container': true,
      }, ref: div => (this.modalContainerElement = div) }, h("div", { class: {
        'bal-modal__content': true,
        [`bal-modal__content--has-spacing-${this.space}`]: true,
      }, ref: div => (this.modalContentElement = div) }, h("slot", null)))));
  }
  static get is() { return "bal-modal"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-modal.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-modal.css"]
    };
  }
  static get properties() {
    return {
      "overlayIndex": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "overlay-index",
        "reflect": false
      },
      "delegate": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "BalProps.FrameworkDelegate",
          "resolved": "FrameworkDelegate | undefined",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        }
      },
      "dataTestId": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "data-test-id",
        "reflect": false
      },
      "modalWidth": {
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
          "text": "Defines the width of the modal body"
        },
        "attribute": "modal-width",
        "reflect": false,
        "defaultValue": "640"
      },
      "space": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.BalModalSpace",
          "resolved": "\"\" | \"medium\" | \"small\"",
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
          "text": "Defines the space/padding of the modal"
        },
        "attribute": "space",
        "reflect": false,
        "defaultValue": "''"
      },
      "hasBackdrop": {
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
          "text": "If `true`, a backdrop will be displayed behind the modal."
        },
        "attribute": "has-backdrop",
        "reflect": false,
        "defaultValue": "true"
      },
      "isClosable": {
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
          "text": "If `true`, the modal can be closed with the escape key or the little close button."
        },
        "attribute": "is-closable",
        "reflect": false,
        "defaultValue": "true"
      },
      "component": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BalProps.ComponentRef",
          "resolved": "Function | HTMLElement | null | string",
          "references": {
            "BalProps": {
              "location": "global"
            }
          }
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The component to display inside of the modal."
        },
        "attribute": "component",
        "reflect": false
      },
      "componentProps": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "BalProps.ComponentProps",
          "resolved": "undefined | { [key: string]: any; }",
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
          "text": "The data to pass to the modal component."
        }
      },
      "cssClass": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | string[]",
          "resolved": "string | string[] | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Additional classes to apply for custom CSS. If multiple classes are\nprovided they should be separated by spaces."
        },
        "attribute": "css-class",
        "reflect": false
      },
      "backdropDismiss": {
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
          "text": "If `true`, the modal can be closed with the click outside of the modal"
        },
        "attribute": "backdrop-dismiss",
        "reflect": false,
        "defaultValue": "true"
      }
    };
  }
  static get states() {
    return {
      "presented": {}
    };
  }
  static get events() {
    return [{
        "method": "didPresent",
        "name": "balModalDidPresent",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the modal has presented."
        },
        "complexType": {
          "original": "BalEvents.BalModalDidPresentDetail",
          "resolved": "void",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "willPresent",
        "name": "balModalWillPresent",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted before the modal has presented."
        },
        "complexType": {
          "original": "BalEvents.BalModalWillPresentDetail",
          "resolved": "void",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "willDismiss",
        "name": "balModalWillDismiss",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted before the modal has dismissed."
        },
        "complexType": {
          "original": "BalEvents.BalModalWillDismissDetail",
          "resolved": "any",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "didDismiss",
        "name": "balModalDidDismiss",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the modal has dismissed."
        },
        "complexType": {
          "original": "BalEvents.BalModalDidDismissDetail",
          "resolved": "any",
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
      "open": {
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
              "text": "Opens the modal."
            }]
        }
      },
      "close": {
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
              "text": "Closes the modal."
            }]
        }
      },
      "present": {
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
          "text": "Presents the modal through the modal controller",
          "tags": []
        }
      },
      "dismiss": {
        "complexType": {
          "signature": "(data?: any, role?: string) => Promise<boolean>",
          "parameters": [{
              "tags": [],
              "text": ""
            }, {
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<boolean>"
        },
        "docs": {
          "text": "Closes the presented modal with the modal controller",
          "tags": []
        }
      },
      "onDidDismiss": {
        "complexType": {
          "signature": "<T = any>() => Promise<OverlayEventDetail<T>>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "OverlayEventDetail": {
              "location": "import",
              "path": "./bal-modal.type"
            },
            "T": {
              "location": "global"
            }
          },
          "return": "Promise<OverlayEventDetail<T>>"
        },
        "docs": {
          "text": "Returns a promise that resolves when the modal did dismiss.",
          "tags": []
        }
      },
      "onWillDismiss": {
        "complexType": {
          "signature": "<T = any>() => Promise<OverlayEventDetail<T>>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "OverlayEventDetail": {
              "location": "import",
              "path": "./bal-modal.type"
            },
            "T": {
              "location": "global"
            }
          },
          "return": "Promise<OverlayEventDetail<T>>"
        },
        "docs": {
          "text": "Returns a promise that resolves when the modal will dismiss.",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "click",
        "method": "onClickCloseButton",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "mousedown",
        "method": "onMouseDown",
        "target": undefined,
        "capture": false,
        "passive": true
      }, {
        "name": "mouseup",
        "method": "onMouseUp",
        "target": undefined,
        "capture": false,
        "passive": true
      }, {
        "name": "keyup",
        "method": "handleKeyUp",
        "target": "body",
        "capture": false,
        "passive": false
      }];
  }
}
