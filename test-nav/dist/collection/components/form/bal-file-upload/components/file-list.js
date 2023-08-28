import { h } from '@stencil/core';
import fileSize from 'filesize.js';
import { BEM } from '../../../../utils/bem';
const bemListEl = BEM.block('file-upload').element('list');
export const FileListComponent = ({ files, disabled, subTitle, onRemoveFile, }) => {
  return (h("bal-card", { class: Object.assign({}, bemListEl.class()), flat: true }, h("bal-list", { disabled: disabled, border: true, size: "large" }, files.map((file, index) => (h("bal-list-item", { disabled: disabled }, h("bal-list-item-icon", null, h("bal-icon", { name: "document" })), h("bal-list-item-content", null, h("bal-list-item-title", null, file.name), h("bal-list-item-subtitle", null, subTitle ? subTitle(file) : fileSize(file.size))), h("bal-list-item-icon", { right: true, class: {
      'file-remove': true,
      'is-clickable': !disabled,
    }, onClick: event => onRemoveFile(event, index) }, h("bal-icon", { name: "trash", color: disabled ? 'grey' : 'danger' }))))))));
};
