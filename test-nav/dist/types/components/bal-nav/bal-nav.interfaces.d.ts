/// <reference path="../../interfaces.d.ts" />
declare namespace BalProps {
  type BalNavContainer = 'default' | 'fluid' | 'compact';
  type BalNavMetaButtons = BalNavMetaButton[];
  type BalNavOptions = BalNavMetaLinkItem[];
  interface BalNavMetaButton extends BalNavLinkItem {
    touchPlacement?: 'top' | 'bottom' | 'none';
    icon?: string;
    popupId?: string;
  }
  interface BalNavMetaLinkItem extends BalNavLinkItem {
    overviewLink?: BalNavLinkItem;
    mainLinkItems?: BalNavMenuLinkItem[];
  }
  interface BalNavMenuLinkItem extends BalNavLinkItem {
    render(context?: {
      onClick: () => void;
    }): any;
    overviewLink?: BalNavLinkItem;
    sectionLinkItems?: BalNavSectionLinkItem[];
    serviceLinkItems?: BalNavServiceLinkItem[];
  }
  interface BalNavSectionLinkItem extends BalNavLinkItem {
    linkItems?: BalNavLinkItem[];
  }
  interface BalNavServiceLinkItem extends BalNavLinkItem {
    color?: 'grey' | 'purple' | 'yellow' | 'red' | 'green';
    linkItems?: BalNavLinkItem[];
  }
  interface BalNavLogoLink {
    htmlTitle?: string;
    ariaLabel?: string;
    href?: string;
    target?: BalProps.BalButtonTarget;
    clickable?: boolean;
    onClick?: (ev: MouseEvent) => void;
  }
  interface BalNavLinkItem {
    label: string;
    value?: string;
    active?: boolean;
    htmlTitle?: string;
    ariaLabel?: string;
    href?: string;
    target?: BalProps.BalButtonTarget;
    clickable?: boolean;
    data?: any;
    onClick?: (ev: MouseEvent) => void;
  }
}
declare namespace BalEvents {
  interface BalNavCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBalNavElement;
  }
  interface BalNavClickedItem {
    label: string;
    value?: string;
    href?: string;
    data?: any;
    target?: BalProps.BalButtonTarget;
  }
  type BalNavItemClickDetail = BalNavClickedItem;
  type BalNavItemClick = BalInputCustomEvent<BalNavItemClickDetail>;
}
