/// <reference path="../../../interfaces.d.ts" />
declare namespace BalProps {
  type BalModalInterface = 'light' | 'card';
  type BalModalSpace = 'small' | '' | 'medium';
  type ComponentProps = {
    [key: string]: any;
  };
  type ComponentRef = Function | HTMLElement | string | null;
  interface FrameworkDelegate {
    attachViewToDom(container: any, component: any, propsOrDataObj?: any, cssClasses?: string[]): Promise<HTMLElement>;
    removeViewFromDom(container: any, component: any): Promise<void>;
  }
}
declare namespace BalEvents {
  interface OverlayEventDetail<T = any> {
    data?: T;
    role?: string;
  }
  interface BalModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalModalElement;
  }
  type BalModalDidPresentDetail = void;
  type BalModalDidPresent = BalModalCustomEvent<BalModalDidPresentDetail>;
  type BalModalWillPresentDetail = void;
  type BalModalWillPresent = BalModalCustomEvent<BalModalWillPresentDetail>;
  type BalModalDidDismissDetail = any;
  type BalModalDidDismiss = BalModalCustomEvent<BalModalDidDismissDetail>;
  type BalModalWillDismissDetail = any;
  type BalModalWillDismiss = BalModalCustomEvent<BalModalWillDismissDetail>;
}
