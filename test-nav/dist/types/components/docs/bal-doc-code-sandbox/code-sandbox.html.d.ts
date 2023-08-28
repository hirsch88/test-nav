interface HtmlProject {
  template: string;
  component: string;
  fullscreen: boolean;
}
export declare const buildHtmlParameters: (project: HtmlProject) => Promise<string>;
export {};
