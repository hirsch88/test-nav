import { h, proxyCustomElement, HTMLElement, createEvent, Host } from '@stencil/core/internal/client';
import { a as areArraysEqual } from './index.esm.js';
import { s as stopEventBubbling, c as inputHandleHostClick, b as inputHandleFocus, e as inputHandleBlur, i as inputSetFocus, a as inputSetBlur } from './form-input.js';
import { L as Logger } from './log.js';
import { a as createCommonjsModule, g as getDefaultExportFromCjs } from './_commonjsHelpers.js';
import { B as BEM } from './bem.js';
import { F as FileUploadRejectionReason } from './bal-file-upload.type.js';
import { d as defaultBalAriaForm } from './form.js';
import { d as defineCustomElement$b } from './bal-card2.js';
import { d as defineCustomElement$a } from './bal-heading2.js';
import { d as defineCustomElement$9 } from './bal-icon2.js';
import { d as defineCustomElement$8 } from './bal-list2.js';
import { d as defineCustomElement$7 } from './bal-list-item2.js';
import { d as defineCustomElement$6 } from './bal-list-item-content2.js';
import { d as defineCustomElement$5 } from './bal-list-item-icon2.js';
import { d as defineCustomElement$4 } from './bal-list-item-subtitle2.js';
import { d as defineCustomElement$3 } from './bal-list-item-title2.js';
import { d as defineCustomElement$2 } from './bal-spinner2.js';

var spec = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var si = { radix: 1e3, unit: ['b', 'kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'] };
var iec = { radix: 1024, unit: ['b', 'Kib', 'Mib', 'Gib', 'Tib', 'Pib', 'Eib', 'Zib', 'Yib'] };
var jedec = { radix: 1024, unit: ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'] };
exports.SPECS = {
    si: si,
    iec: iec,
    jedec: jedec,
};
//# sourceMappingURL=spec.js.map
});

var lib = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * file size
 * @param bytes
 * @param fixed
 * @param spec
 */
function default_1(bytes, fixed, spec$1) {
    if (fixed === void 0) { fixed = 1; }
    bytes = Math.abs(bytes);
    var _a = spec.SPECS[spec$1] || spec.SPECS['jedec'], radix = _a.radix, unit = _a.unit;
    var loop = 0;
    // calculate
    while (bytes >= radix) {
        bytes /= radix;
        ++loop;
    }
    return bytes.toFixed(fixed) + " " + unit[loop];
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
});

const fileSize = /*@__PURE__*/getDefaultExportFromCjs(lib);

const bemListEl = BEM.block('file-upload').element('list');
const FileListComponent = ({ files, disabled, subTitle, onRemoveFile, }) => {
  return (h("bal-card", { class: Object.assign({}, bemListEl.class()), flat: true },
    h("bal-list", { disabled: disabled, border: true, size: "large" }, files.map((file, index) => (h("bal-list-item", { disabled: disabled },
      h("bal-list-item-icon", null,
        h("bal-icon", { name: "document" })),
      h("bal-list-item-content", null,
        h("bal-list-item-title", null, file.name),
        h("bal-list-item-subtitle", null, subTitle ? subTitle(file) : fileSize(file.size))),
      h("bal-list-item-icon", { right: true, class: {
          'file-remove': true,
          'is-clickable': !disabled,
        }, onClick: event => onRemoveFile(event, index) },
        h("bal-icon", { name: "trash", color: disabled ? 'grey' : 'danger' }))))))));
};

const toFileArray = (list) => {
  return Array.from(list ? list : []);
};
const toFileList = (files) => {
  const dataTransfer = new DataTransfer();
  if (files && files.length > 0) {
    files.forEach(file => dataTransfer.items.add(file));
  }
  return dataTransfer.files;
};

const validateFileArray = (state, files, fileOptions) => {
  const validFiles = [];
  const newState = [...state];
  const invalidFiles = [];
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    if (file) {
      const reasons = [];
      if (fileOptions.accept && fileOptions.accept.split(' ').join('').split(',').indexOf(file.type) === -1) {
        reasons.push(FileUploadRejectionReason.BAD_EXTENSION);
      }
      if (fileOptions.maxFileSize !== undefined && file.size > fileOptions.maxFileSize) {
        reasons.push(FileUploadRejectionReason.FILE_TOO_BIG);
      }
      const stateBundleSize = newState.map(f => f.size).reduce((a, b) => a + b, 0);
      const bundleSize = stateBundleSize + file.size;
      if (fileOptions.maxBundleSize !== undefined && bundleSize > fileOptions.maxBundleSize) {
        reasons.push(FileUploadRejectionReason.FILE_SIZE_SUM_TOO_BIG);
      }
      const amountOfFiles = newState.length + 1;
      if (fileOptions.maxFiles !== undefined && amountOfFiles > fileOptions.maxFiles) {
        reasons.push(FileUploadRejectionReason.TOO_MANY_FILES);
      }
      const areFilesEqual = (fileA, fileB) => fileA.size === fileB.size &&
        fileA.name === fileB.name &&
        fileA.type === fileB.type &&
        fileA.lastModified === fileB.lastModified;
      const duplicatedFiles = state.filter(f => areFilesEqual(f, file));
      if (duplicatedFiles.length > 0) {
        reasons.push(FileUploadRejectionReason.DUPLICATED_FILE);
      }
      if (reasons.length > 0) {
        invalidFiles.push({ file, reasons });
      }
      else {
        newState.push(file);
        validFiles.push(file);
      }
    }
  }
  return {
    validFiles: validFiles,
    invalidFiles: invalidFiles,
  };
};

const balFileUploadCss = ".bal-file-upload{display:block;position:static;width:100%}.bal-file-upload .file-label{word-break:break-word;white-space:normal}.bal-file-upload .bal-heading{word-break:break-all}.bal-file-upload__card{margin-top:var(--bal-space-normal)}.bal-file-upload__list{padding:0 !important}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const FileUpload = proxyCustomElement(class FileUpload extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.balChange = createEvent(this, "balChange", 7);
    this.balFilesAdded = createEvent(this, "balFilesAdded", 7);
    this.balFilesRemoved = createEvent(this, "balFilesRemoved", 7);
    this.balRejectedFile = createEvent(this, "balRejectedFile", 7);
    this.balInputClick = createEvent(this, "balInputClick", 7);
    this.balBlur = createEvent(this, "balBlur", 7);
    this.balFocus = createEvent(this, "balFocus", 7);
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
  get el() { return this; }
  static get watchers() { return {
    "value": ["onValueChange"]
  }; }
  static get style() { return {
    css: balFileUploadCss
  }; }
}, [32, "bal-file-upload", {
    "name": [1],
    "value": [16],
    "label": [1],
    "multiple": [4],
    "disabled": [4],
    "readonly": [4],
    "loading": [4],
    "required": [4],
    "accept": [1],
    "maxFiles": [2, "max-files"],
    "maxFileSize": [2, "max-file-size"],
    "maxBundleSize": [2, "max-bundle-size"],
    "hasFileList": [4, "has-file-list"],
    "invalid": [4],
    "subTitle": [16],
    "files": [32],
    "focused": [32],
    "ariaForm": [32],
    "clear": [64],
    "setFocus": [64],
    "setBlur": [64],
    "getInputElement": [64],
    "setAriaForm": [64]
  }, [[6, "reset", "resetHandler"]]]);
__decorate([
  Logger('bal-file-upload')
], FileUpload.prototype, "createLogger", null);
let FileUploadIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-file-upload", "bal-card", "bal-heading", "bal-icon", "bal-list", "bal-list-item", "bal-list-item-content", "bal-list-item-icon", "bal-list-item-subtitle", "bal-list-item-title", "bal-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-file-upload":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FileUpload);
      }
      break;
    case "bal-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "bal-heading":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "bal-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "bal-list-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "bal-list-item-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "bal-list-item-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "bal-list-item-subtitle":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-list-item-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalFileUpload = FileUpload;
const defineCustomElement = defineCustomElement$1;

export { BalFileUpload, defineCustomElement };
