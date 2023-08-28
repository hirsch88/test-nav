import { FileUploadRejectedFile } from '../bal-file-upload.type';
type FileOptions = {
  accept?: string;
  maxFileSize?: number | undefined;
  maxBundleSize?: number | undefined;
  maxFiles?: number | undefined;
};
type ValidateFileArrayReturn = {
  validFiles: File[];
  invalidFiles: FileUploadRejectedFile[];
};
export declare const validateFileArray: (state: File[], files: File[], fileOptions: FileOptions) => ValidateFileArrayReturn;
export {};
