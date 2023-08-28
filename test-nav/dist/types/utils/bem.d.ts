export declare const BEM: {
  block: (name: string) => {
    class: (condition?: boolean) => {
      [x: string]: boolean;
    };
    element: (name: string) => any;
    modifier: (name: string) => any;
  };
};
