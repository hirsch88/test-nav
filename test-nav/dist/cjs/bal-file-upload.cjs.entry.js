'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1009f308.js');
const index_esm = require('./index.esm-edff2e0c.js');
const formInput = require('./form-input-7611e5c9.js');
const log = require('./log-911f84ec.js');
const _commonjsHelpers = require('./_commonjsHelpers-bcc1208a.js');
const bem = require('./bem-5d122a5c.js');
const balFileUpload_type = require('./bal-file-upload.type-6182bc54.js');
const form = require('./form-9af6cd7d.js');
require('./index-e6a233be.js');
require('./browser-791d6902.js');

var spec = _commonjsHelpers.createCommonjsModule(function (module, exports) {
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

var lib = _commonjsHelpers.createCommonjsModule(function (module, exports) {
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

const fileSize = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(lib);

const bemListEl = bem.BEM.block('file-upload').element('list');
const FileListComponent = ({ files, disabled, subTitle, onRemoveFile, }) => {
  return (index.h("bal-card", { class: Object.assign({}, bemListEl.class()), flat: true },
    index.h("bal-list", { disabled: disabled, border: true, size: "large" }, files.map((file, index$1) => (index.h("bal-list-item", { disabled: disabled },
      index.h("bal-list-item-icon", null,
        index.h("bal-icon", { name: "document" })),
      index.h("bal-list-item-content", null,
        index.h("bal-list-item-title", null, file.name),
        index.h("bal-list-item-subtitle", null, subTitle ? subTitle(file) : fileSize(file.size))),
      index.h("bal-list-item-icon", { right: true, class: {
          'file-remove': true,
          'is-clickable': !disabled,
        }, onClick: event => onRemoveFile(event, index$1) },
        index.h("bal-icon", { name: "trash", color: disabled ? 'grey' : 'danger' }))))))));
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
        reasons.push(balFileUpload_type.FileUploadRejectionReason.BAD_EXTENSION);
      }
      if (fileOptions.maxFileSize !== undefined && file.size > fileOptions.maxFileSize) {
        reasons.push(balFileUpload_type.FileUploadRejectionReason.FILE_TOO_BIG);
      }
      const stateBundleSize = newState.map(f => f.size).reduce((a, b) => a + b, 0);
      const bundleSize = stateBundleSize + file.size;
      if (fileOptions.maxBundleSize !== undefined && bundleSize > fileOptions.maxBundleSize) {
        reasons.push(balFileUpload_type.FileUploadRejectionReason.FILE_SIZE_SUM_TOO_BIG);
      }
      const amountOfFiles = newState.length + 1;
      if (fileOptions.maxFiles !== undefined && amountOfFiles > fileOptions.maxFiles) {
        reasons.push(balFileUpload_type.FileUploadRejectionReason.TOO_MANY_FILES);
      }
      const areFilesEqual = (fileA, fileB) => fileA.size === fileB.size &&
        fileA.name === fileB.name &&
        fileA.type === fileB.type &&
        fileA.lastModified === fileB.lastModified;
      const duplicatedFiles = state.filter(f => areFilesEqual(f, file));
      if (duplicatedFiles.length > 0) {
        reasons.push(balFileUpload_type.FileUploadRejectionReason.DUPLICATED_FILE);
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
    index.registerInstance(this, hostRef);
    this.balChange = index.createEvent(this, "balChange", 7);
    this.balFilesAdded = index.createEvent(this, "balFilesAdded", 7);
    this.balFilesRemoved = index.createEvent(this, "balFilesRemoved", 7);
    this.balRejectedFile = index.createEvent(this, "balRejectedFile", 7);
    this.balInputClick = index.createEvent(this, "balInputClick", 7);
    this.balBlur = index.createEvent(this, "balBlur", 7);
    this.balFocus = index.createEvent(this, "balFocus", 7);
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
      formInput.stopEventBubbling(ev);
    };
    this.onDragover = (ev) => {
      formInput.stopEventBubbling(ev);
    };
    this.onDrop = (ev) => {
      formInput.stopEventBubbling(ev);
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
      formInput.stopEventBubbling(ev);
      if (index >= 0 && index < this.files.length) {
        const files = this.files;
        const removedFiles = files.splice(index, 1);
        this.balFilesRemoved.emit(removedFiles);
        this.files = [...files];
        this.balChange.emit(this.files);
        this.updateFileInput();
      }
    };
    this.onHostClick = (ev) => formInput.inputHandleHostClick(this, ev);
    this.onInputFocus = (ev) => formInput.inputHandleFocus(this, ev);
    this.onInputBlur = (ev) => formInput.inputHandleBlur(this, ev);
    this.onInputClick = (ev) => {
      if (this.nativeInput && !this.disabled && !this.readonly && !this.loading) {
        this.nativeInput.value = '';
      }
      this.balInputClick.emit(ev);
    };
    this.files = [];
    this.focused = false;
    this.ariaForm = form.defaultBalAriaForm;
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
    if (!index_esm.areArraysEqual(this.files, this.value)) {
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
    formInput.inputSetFocus(this);
  }
  async setBlur() {
    formInput.inputSetBlur(this);
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  async setAriaForm(ariaForm) {
    this.ariaForm = Object.assign({}, ariaForm);
  }
  render() {
    const id = this.ariaForm.controlId || this.fileUploadId;
    return (index.h(index.Host, { onClick: this.onHostClick, "aria-disabled": this.disabled ? 'true' : null, class: {
        'bal-file-upload': true,
      } }, index.h("div", { class: {
        'file': true,
        'is-disabled': this.disabled || this.readonly || this.loading,
        'is-danger': this.invalid,
      } }, index.h("label", { htmlFor: id, ref: el => (this.labelEl = el), class: {
        'file-label': true,
        'is-disabled': this.disabled || this.loading || this.readonly,
      } }, index.h("input", { class: "file-input", type: "file", id: id, "aria-labelledby": this.ariaForm.labelId, "aria-describedby": this.ariaForm.messageId, "aria-invalid": this.invalid === true ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : null, name: this.name, multiple: this.multiple, disabled: this.disabled || this.loading || this.readonly, readonly: this.readonly, required: this.required, accept: this.accept, onClick: this.onInputClick, onChange: this.onInputChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, ref: el => (this.nativeInput = el), "data-testid": "bal-file-upload-input" }), this.loading ? (index.h("span", { class: "file-cta" }, index.h("bal-spinner", null))) : (index.h("span", { class: "file-cta" }, index.h("span", { class: "file-icon" }, index.h("bal-icon", { name: "upload", size: "medium", color: this.disabled || this.loading || this.readonly ? 'grey-light' : this.invalid ? 'danger' : 'blue' })), index.h("span", { class: "file-label", "data-testid": "bal-file-upload-label" }, this.label))))), this.hasFileList && this.files.length > 0 ? (index.h(FileListComponent, { files: this.files, disabled: this.disabled || this.readonly || this.loading, subTitle: this.subTitle, onRemoveFile: this.onRemoveFile })) : ('')));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["onValueChange"]
  }; }
};
__decorate([
  log.Logger('bal-file-upload')
], FileUpload.prototype, "createLogger", null);
let FileUploadIds = 0;
FileUpload.style = {
  css: balFileUploadCss
};

exports.bal_file_upload = FileUpload;
