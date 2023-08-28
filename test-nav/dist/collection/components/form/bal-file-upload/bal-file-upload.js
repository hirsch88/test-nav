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
import { areArraysEqual } from '@baloise/web-app-utils';
import { Host, h } from '@stencil/core';
import { inputHandleBlur, inputHandleFocus, inputHandleHostClick, inputSetBlur, inputSetFocus, stopEventBubbling, } from '../../../utils/form-input';
import { Logger } from '../../../utils/log';
import { FileListComponent } from './components/file-list';
import { toFileArray, toFileList } from './utils/file-list.util';
import { validateFileArray } from './utils/file-validation.util';
import { defaultBalAriaForm } from '../../../utils/form';
export class FileUpload {
  constructor() {
    this.fileUploadId = `bal-file-upload-${FileUploadIds++}`;
    this.initialValue = this.value || [];
    this.addEventListenerDragAndDrop = () => {
      if (this.labelEl) {
        this.labelEl.addEventListener('dragenter', this.onDragenter, false);
        this.labelEl.addEventListener('dragover', this.onDragover, false);
        this.labelEl.addEventListener('drop', this.onDrop, false);
      }
    };
    this.removeEventListenerDragAndDrop = () => {
      if (this.labelEl) {
        this.labelEl.removeEventListener('dragenter', this.onDragenter, false);
        this.labelEl.removeEventListener('dragover', this.onDragover, false);
        this.labelEl.removeEventListener('drop', this.onDrop, false);
      }
    };
    this.handleFiles = (fileList) => {
      const files = toFileArray(fileList);
      const validatedFiles = validateFileArray(this.files, files, {
        accept: this.accept,
        maxFileSize: this.maxFileSize,
        maxBundleSize: this.maxBundleSize,
        maxFiles: this.maxFiles,
      });
      if (validatedFiles.invalidFiles.length > 0) {
        this.balRejectedFile.emit(validatedFiles.invalidFiles[0]);
      }
      if (validatedFiles.validFiles.length > 0) {
        this.balFilesAdded.emit(validatedFiles.validFiles);
        this.files = [...this.files, ...validatedFiles.validFiles];
        this.balChange.emit(this.files);
      }
      this.updateFileInput();
    };
    this.updateFileInput = () => {
      var _a;
      if ((_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.files) {
        this.nativeInput.files = toFileList(this.files);
      }
    };
    this.onDragenter = (ev) => {
      stopEventBubbling(ev);
    };
    this.onDragover = (ev) => {
      stopEventBubbling(ev);
    };
    this.onDrop = (ev) => {
      stopEventBubbling(ev);
      if (!this.disabled && !this.readonly && !this.loading) {
        const dataTransfer = ev.dataTransfer;
        if (dataTransfer) {
          this.handleFiles(dataTransfer.files);
        }
      }
    };
    this.onInputChange = () => {
      var _a;
      if (!this.disabled && !this.readonly && !this.loading) {
        if ((_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.files) {
          this.handleFiles(this.nativeInput.files);
        }
      }
    };
    this.onRemoveFile = (ev, index) => {
      stopEventBubbling(ev);
      if (index >= 0 && index < this.files.length) {
        const files = this.files;
        const removedFiles = files.splice(index, 1);
        this.balFilesRemoved.emit(removedFiles);
        this.files = [...files];
        this.balChange.emit(this.files);
        this.updateFileInput();
      }
    };
    this.onHostClick = (ev) => inputHandleHostClick(this, ev);
    this.onInputFocus = (ev) => inputHandleFocus(this, ev);
    this.onInputBlur = (ev) => inputHandleBlur(this, ev);
    this.onInputClick = (ev) => {
      if (this.nativeInput && !this.disabled && !this.readonly && !this.loading) {
        this.nativeInput.value = '';
      }
      this.balInputClick.emit(ev);
    };
    this.files = [];
    this.focused = false;
    this.ariaForm = defaultBalAriaForm;
    this.name = this.fileUploadId;
    this.value = [];
    this.label = 'Choose or drop a file...';
    this.multiple = true;
    this.disabled = false;
    this.readonly = false;
    this.loading = false;
    this.required = false;
    this.accept = undefined;
    this.maxFiles = undefined;
    this.maxFileSize = undefined;
    this.maxBundleSize = undefined;
    this.hasFileList = true;
    this.invalid = false;
    this.subTitle = undefined;
  }
  createLogger(log) {
    this.log = log;
  }
  onValueChange() {
    if (!areArraysEqual(this.files, this.value)) {
      this.files = this.value;
    }
  }
  componentWillLoad() {
    this.onValueChange();
  }
  connectedCallback() {
    this.initialValue = this.value || [];
    this.addEventListenerDragAndDrop();
  }
  componentDidLoad() {
    this.addEventListenerDragAndDrop();
  }
  disconnectedCallback() {
    this.removeEventListenerDragAndDrop();
  }
  resetHandler(ev) {
    const formElement = ev.target;
    if (formElement === null || formElement === void 0 ? void 0 : formElement.contains(this.el)) {
      this.files = [...this.initialValue];
      clearTimeout(this.resetHandlerTimer);
      this.resetHandlerTimer = setTimeout(() => {
        if (this.nativeInput) {
          this.nativeInput.files = toFileList(this.initialValue);
        }
      });
    }
  }
  async clear() {
    this.files = [];
    this.updateFileInput();
  }
  async setFocus() {
    inputSetFocus(this);
  }
  async setBlur() {
    inputSetBlur(this);
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  render() {
    const id = this.ariaForm.controlId || this.fileUploadId;
    return (h(Host, { onClick: this.onHostClick, "aria-disabled": this.disabled ? 'true' : null, class: {
        'bal-file-upload': true,
      } }, h("div", { class: {
        'file': true,
        'is-disabled': this.disabled || this.readonly || this.loading,
        'is-danger': this.invalid,
      } }, h("label", { htmlFor: id, ref: el => (this.labelEl = el), class: {
        'file-label': true,
        'is-disabled': this.disabled || this.loading || this.readonly,
      } }, h("input", { class: "file-input", type: "file", id: id, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, name: this.name, multiple: this.multiple, disabled: this.disabled || this.loading || this.readonly, readonly: this.readonly, required: this.required, accept: this.accept, onClick: this.onInputClick, onChange: this.onInputChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, ref: el => (this.nativeInput = el), "data-testid": "bal-file-upload-input" }), this.loading ? (h("span", { class: "file-cta" }, h("bal-spinner", null))) : (h("span", { class: "file-cta" }, h("span", { class: "file-icon" }, h("bal-icon", { name: "upload", size: "medium", color: this.disabled || this.loading || this.readonly ? 'grey-light' : this.invalid ? 'danger' : 'blue' })), h("span", { class: "file-label", "data-testid": "bal-file-upload-label" }, this.label))))), this.hasFileList && this.files.length > 0 ? (h(FileListComponent, { files: this.files, disabled: this.disabled || this.readonly || this.loading, subTitle: this.subTitle, onRemoveFile: this.onRemoveFile })) : ('')));
  }
  static get is() { return "bal-file-upload"; }
  static get originalStyleUrls() {
    return {
      "css": ["bal-file-upload.sass"]
    };
  }
  static get styleUrls() {
    return {
      "css": ["bal-file-upload.css"]
    };
  }
  static get properties() {
    return {
      "name": {
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
          "text": "The name of the control, which is submitted with the form data."
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "this.fileUploadId"
      },
      "value": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "File[]",
          "resolved": "File[]",
          "references": {
            "File": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Input value."
        },
        "defaultValue": "[]"
      },
      "label": {
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
          "text": "Label of the drop area."
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "'Choose or drop a file...'"
      },
      "multiple": {
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
          "text": "If `true` multiple file upload is possible."
        },
        "attribute": "multiple",
        "reflect": false,
        "defaultValue": "true"
      },
      "disabled": {
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
          "text": "If `true`, the element is not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "readonly": {
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
          "text": "If `true` the element can not mutated, meaning the user can not edit the control."
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
      },
      "loading": {
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
          "text": "If `true` the file upload is disabled and shows a spinner"
        },
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "false"
      },
      "required": {
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
          "text": "If `true`, the user must fill in a value before submitting a form."
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "accept": {
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
          "tags": [],
          "text": "Accepted MIME-Types like `image/png,image/jpeg`."
        },
        "attribute": "accept",
        "reflect": false
      },
      "maxFiles": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Allowed number of files in the bundle."
        },
        "attribute": "max-files",
        "reflect": false
      },
      "maxFileSize": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Allowed max file size in bytes."
        },
        "attribute": "max-file-size",
        "reflect": false
      },
      "maxBundleSize": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Allowed max bundle size in bytes."
        },
        "attribute": "max-bundle-size",
        "reflect": false
      },
      "hasFileList": {
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
          "text": "If `true` below the drop-down area it generates a file list."
        },
        "attribute": "has-file-list",
        "reflect": false,
        "defaultValue": "true"
      },
      "invalid": {
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
          "text": "If `true` the component gets a invalid style."
        },
        "attribute": "invalid",
        "reflect": false,
        "defaultValue": "false"
      },
      "subTitle": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "(file: File) => string",
          "resolved": "((file: File) => string) | undefined",
          "references": {
            "File": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Overrides the default subtitle file size"
        }
      }
    };
  }
  static get states() {
    return {
      "files": {},
      "focused": {},
      "ariaForm": {}
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
          "text": "Triggers when a file is added or removed."
        },
        "complexType": {
          "original": "BalEvents.BalFileUploadChangeDetail",
          "resolved": "File[]",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balFilesAdded",
        "name": "balFilesAdded",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggers when a file is added."
        },
        "complexType": {
          "original": "BalEvents.BalFileUploadFilesAddedDetail",
          "resolved": "File[]",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balFilesRemoved",
        "name": "balFilesRemoved",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggers when a file is removed."
        },
        "complexType": {
          "original": "BalEvents.BalFileUploadFilesRemovedDetail",
          "resolved": "File[]",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balRejectedFile",
        "name": "balRejectedFile",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggers when a file is rejected due to not allowed MIME-Type and so on."
        },
        "complexType": {
          "original": "BalEvents.BalFileUploadRejectedFileDetail",
          "resolved": "FileUploadRejectedFile",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balInputClick",
        "name": "balInputClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input has clicked."
        },
        "complexType": {
          "original": "BalEvents.BalFileUploadInputClickDetail",
          "resolved": "MouseEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balBlur",
        "name": "balBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input loses focus."
        },
        "complexType": {
          "original": "BalEvents.BalFileUploadBlurDetail",
          "resolved": "FocusEvent",
          "references": {
            "BalEvents": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "balFocus",
        "name": "balFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input has focus."
        },
        "complexType": {
          "original": "BalEvents.BalFileUploadFocusDetail",
          "resolved": "FocusEvent",
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
      "clear": {
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
          "text": "Sets the file list to an empty list",
          "tags": []
        }
      },
      "setFocus": {
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
          "text": "Sets focus on the native `input`. Use this method instead of the global\n`input.focus()`.",
          "tags": []
        }
      },
      "setBlur": {
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
          "text": "Sets blur on the native `input`. Use this method instead of the global\n`input.blur()`.",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      },
      "getInputElement": {
        "complexType": {
          "signature": "() => Promise<HTMLInputElement | undefined>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLInputElement": {
              "location": "global"
            }
          },
          "return": "Promise<HTMLInputElement | undefined>"
        },
        "docs": {
          "text": "Returns the native `<input>` element used under the hood.",
          "tags": []
        }
      },
      "setAriaForm": {
        "complexType": {
          "signature": "(ariaForm: BalAriaForm) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "BalAriaForm": {
              "location": "import",
              "path": "../../../utils/form"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "onValueChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "reset",
        "method": "resetHandler",
        "target": "document",
        "capture": true,
        "passive": false
      }];
  }
}
__decorate([
  Logger('bal-file-upload')
], FileUpload.prototype, "createLogger", null);
let FileUploadIds = 0;
