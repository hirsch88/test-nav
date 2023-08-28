interface ReactProject {
  component: string;
  fullscreen: boolean;
}
export declare const buildReactParameters: (project: ReactProject) => Promise<string>;
export {};
