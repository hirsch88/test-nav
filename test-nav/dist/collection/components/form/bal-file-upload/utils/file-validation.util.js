import { FileUploadRejectionReason } from '../bal-file-upload.type';
export const validateFileArray = (state, files, fileOptions) => {
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
