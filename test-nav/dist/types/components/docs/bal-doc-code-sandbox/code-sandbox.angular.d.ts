interface AngularProject {
  template: string;
  component: string;
  name2: string;
  template2: string;
  component2: string;
  fullscreen: boolean;
}
export declare const PLACEHOLDER_IMPORT = "/** PLACEHOLDER FOR DESIGN SYSTEM IMPORTS */";
export declare const buildAngularParameters: (project: AngularProject) => Promise<string>;
export {};
