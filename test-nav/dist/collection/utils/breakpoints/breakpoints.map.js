import { BaloiseDesignToken } from '@baloise/design-system-tokens';
const toNumber = (pixel) => parseInt(pixel.slice(0, -2), 10);
const breakpointTablet = toNumber(BaloiseDesignToken.balBreakpointTablet);
const breakpointDesktop = toNumber(BaloiseDesignToken.balBreakpointDesktop);
const breakpointHighDefinition = toNumber(BaloiseDesignToken.balBreakpointHighDefinition);
const breakpointWidescreen = toNumber(BaloiseDesignToken.balBreakpointWidescreen);
const balBreakpointFullhd = toNumber(BaloiseDesignToken.balBreakpointFullhd);
const isMobile = (win) => {
  const width = win.innerWidth;
  return width < breakpointTablet;
};
const isTablet = (win) => {
  const width = win.innerWidth;
  return width >= breakpointTablet && width < breakpointDesktop;
};
const isTouch = (win) => isMobile(win) || isTablet(win);
const isDesktop = (win) => !isTouch(win);
const isHighDefinition = (win) => {
  const width = win.innerWidth;
  return width >= breakpointHighDefinition && width < breakpointWidescreen;
};
const isWideScreen = (win) => {
  const width = win.innerWidth;
  return width >= breakpointWidescreen && width < balBreakpointFullhd;
};
const isFullHD = (win) => {
  const width = win.innerWidth;
  return width >= balBreakpointFullhd;
};
export const BREAKPOINTS_MAP = {
  mobile: isMobile,
  tablet: isTablet,
  touch: isTouch,
  desktop: isDesktop,
  highDefinition: isHighDefinition,
  widescreen: isWideScreen,
  fullhd: isFullHD,
};
