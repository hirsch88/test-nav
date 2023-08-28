import Lottie from 'lottie-web/build/player/lottie_light_html';
import { LogoAnimationData } from './bal-logo.data';
export const animate = (el, color) => {
  return Lottie.loadAnimation({
    container: el,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: LogoAnimationData(color),
  });
};
