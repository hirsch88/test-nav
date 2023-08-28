import { FunctionalComponent } from '../../../../stencil-public-runtime';
export interface FileListComponentProps {
  files: File[];
  disabled: boolean;
  subTitle?: (file: File) => string;
  onRemoveFile: (ev: Event, index: number) => void;
}
export declare const FileListComponent: FunctionalComponent<FileListComponentProps>;
