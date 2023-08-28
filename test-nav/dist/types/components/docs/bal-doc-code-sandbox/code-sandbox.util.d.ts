export type Frameworks = 'angular' | 'react' | 'html' | 'vue';
export declare const parseMarkdown: (content: string) => string;
export declare const loadSourceFiles: (files: string[]) => Promise<string[]>;
export declare const getFramework: () => Frameworks;
