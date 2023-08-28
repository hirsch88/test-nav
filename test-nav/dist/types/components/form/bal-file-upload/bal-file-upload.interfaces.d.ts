/// <reference path="../../../interfaces.d.ts" />
declare namespace BalEvents {
  enum FileUploadRejectionReason {
    BAD_EXTENSION = "BAD_EXTENSION",
    FILE_TOO_BIG = "FILE_TOO_BIG",
    FILE_SIZE_SUM_TOO_BIG = "FILE_SIZE_SUM_TOO_BIG",
    TOO_MANY_FILES = "TOO_MANY_FILES",
    DUPLICATED_FILE = "DUPLICATED_FILE"
  }
  interface FileUploadRejectedFile {
    reasons: FileUploadRejectionReason[];
    file: File;
  }
  interface BalFileUploadCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalFileUploadElement;
  }
  type BalFileUploadChangeDetail = File[];
  type BalFileUploadChange = BalFileUploadCustomEvent<BalFileUploadChangeDetail>;
  type BalFileUploadFilesAddedDetail = File[];
  type BalFileUploadFilesAdded = BalFileUploadCustomEvent<BalFileUploadFilesAddedDetail>;
  type BalFileUploadFilesRemovedDetail = File[];
  type BalFileUploadFilesRemoved = BalFileUploadCustomEvent<BalFileUploadFilesRemovedDetail>;
  type BalFileUploadRejectedFileDetail = FileUploadRejectedFile;
  type BalFileUploadRejectedFile = BalFileUploadCustomEvent<BalFileUploadRejectedFileDetail>;
  type BalFileUploadInputClickDetail = MouseEvent;
  type BalFileUploadInputClick = BalFileUploadCustomEvent<BalFileUploadInputClickDetail>;
  type BalFileUploadBlurDetail = FocusEvent;
  type BalFileUploadBlur = BalFileUploadCustomEvent<BalFileUploadBlurDetail>;
  type BalFileUploadFocusDetail = FocusEvent;
  type BalFileUploadFocus = BalFileUploadCustomEvent<BalFileUploadFocusDetail>;
}
