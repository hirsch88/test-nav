import { h, r as registerInstance, f as createEvent, g as Host, i as getElement } from './index-2c15ff91.js';
import { a as areArraysEqual } from './index.esm-d25206f6.js';
import { s as stopEventBubbling, a as inputHandleHostClick, i as inputHandleFocus, e as inputHandleBlur, c as inputSetFocus, d as inputSetBlur } from './form-input-2b8d78bf.js';
import { L as Logger } from './log-01623e2c.js';
import { c as createCommonjsModule, g as getDefaultExportFromCjs } from './_commonjsHelpers-8fe71198.js';
import { B as BEM } from './bem-1b28532d.js';
import { F as FileUploadRejectionReason } from './bal-file-upload.type-02fb0bc0.js';
import { d as defaultBalAriaForm } from './form-479fd066.js';
import './index-82aff103.js';
import './browser-9199b5e2.js';

var spec = createCommonjsModule(function (module, exports) {
"use strict";
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

const spec$1 = /*@__PURE__*/getDefaultExportFromCjs(spec);

var lib = createCommonjsModule(function (module, exports) {
"use strict";
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
const FileUpload = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["onValueChange"]
  }; }
};
__decorate([
  Logger('bal-file-upload')
], FileUpload.prototype, "createLogger", null);
let FileUploadIds = 0;
FileUpload.style = {
  css: balFileUploadCss
};

export { FileUpload as bal_file_upload };
