import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { k as isEscapeKey } from './index.esm.js';
import { B as BEM } from './bem.js';
import { b as balBrowser } from './browser.js';
import { s as stopEventBubbling } from './form-input.js';
import { h as debounce } from './helpers.js';
import { L as Logger } from './log.js';
import { focusableQueryString } from './focus-visible.js';
import { d as defineCustomElement$5 } from './bal-close2.js';
import { d as defineCustomElement$4 } from './bal-heading2.js';
import { d as defineCustomElement$3 } from './bal-icon2.js';
import { d as defineCustomElement$2 } from './bal-stack2.js';

class AbstractVariantRenderer {
  showContainerElement(component) {
    if (component.containerEl) {
      this.showElement(component.containerEl);
    }
  }
  hideContainerElement(component) {
    if (component.containerEl) {
      this.hideElement(component.containerEl);
    }
  }
  showArrowElement(component, hasArrow = component.arrow) {
    if (hasArrow && component.arrowEl) {
      this.showElement(component.arrowEl);
    }
  }
  hideArrowElement(component) {
    if (component.arrowEl) {
      Object.assign(component.arrowEl.style, {
        left: '',
        top: '',
        display: 'none',
        visibility: 'hidden',
      });
    }
  }
  showBackdropElement(component, hasBackdrop = component.backdrop) {
    if (hasBackdrop && component.backdropEl) {
      this.showElement(component.backdropEl);
    }
  }
  hideBackdropElement(component) {
    if (component.backdropEl) {
      this.hideElement(component.backdropEl);
    }
  }
  showElement(element) {
    if (element) {
      element.style.setProperty('display', 'block');
      element.style.setProperty('visibility', 'visible');
    }
  }
  hideElement(element) {
    if (element) {
      element.style.removeProperty('display');
      element.style.removeProperty('visibility');
    }
  }
}

class DrawerVariantRenderer extends AbstractVariantRenderer {
  constructor() {
    super(...arguments);
    this.backdrop = false;
    this.offset = 0;
  }
  async present(component) {
    if (component.containerEl && component.trigger && component.backdropEl) {
      this.backdrop = component.getBooleanValue(component.trigger, 'bal-popup-backdrop', component.backdrop);
      this.offset = component.getValue(component.trigger, 'bal-popup-offset', component.offset);
      component.containerEl.style.setProperty('inset', `auto 0px 0px 0px`);
      component.containerEl.style.setProperty('bottom', `${this.offset}px`);
      component.backdropEl.style.setProperty('bottom', `${this.offset}px`);
      component.containerEl.classList.add('container');
      this.showBackdropElement(component, this.backdrop);
      this.showContainerElement(component);
      return true;
    }
    return false;
  }
  async update(_component) {
    return false;
  }
  async dismiss(component) {
    if (component.containerEl && component.backdropEl) {
      component.balWillAnimate.emit();
      this.hideBackdropElement(component);
      this.hideContainerElement(component);
      component.containerEl.style.removeProperty('inset');
      component.containerEl.classList.remove('container');
      component.containerEl.style.removeProperty('bottom');
      component.backdropEl.style.removeProperty('bottom');
      return true;
    }
    return false;
  }
}

class FullscreenVariantRenderer extends AbstractVariantRenderer {
  constructor() {
    super(...arguments);
    this.offset = 0;
  }
  async present(component) {
    if (component.containerEl && component.trigger) {
      this.offset = component.getValue(component.trigger, 'bal-popup-offset', component.offset);
      component.containerEl.style.setProperty('inset', `${this.offset}px auto auto 0px`);
      if (this.offset > 0) {
        component.containerEl.style.setProperty('box-shadow', `inset var(--bal-nav-meta-bar-variant-white-shadow)`);
      }
      this.showBackdropElement(component);
      this.showContainerElement(component);
      this.showArrowElement(component);
      component.containerEl.classList.add('container');
      return true;
    }
    return false;
  }
  async update(_component) {
    return false;
  }
  async dismiss(component) {
    if (component.containerEl) {
      this.hideBackdropElement(component);
      this.hideContainerElement(component);
      this.hideArrowElement(component);
      component.containerEl.style.removeProperty('box-shadow');
      component.containerEl.style.removeProperty('inset');
      component.containerEl.classList.remove('container');
      return true;
    }
    return false;
  }
}

function getAlignment(placement) {
  return placement.split('-')[1];
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function getSide(placement) {
  return placement.split('-')[0];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === 'x';
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

const min$1 = Math.min;
const max$1 = Math.max;

function within(min$1$1, value, max$1$1) {
  return max$1(min$1$1, min$1(value, max$1$1));
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = options || {};
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements
    } = state;
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min = paddingObject[minProp];
    const max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = within(min, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. This stops `shift()` from taking action, but can
    // be worked around by calling it again after the `arrow()` if desired.
    const shouldAddOffset = getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min ? paddingObject[minProp] : paddingObject[maxProp]) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min ? min - center : max - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset
      }
    };
  }
});

const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

async function convertValueToCoords(state, value) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === 'function' ? value(state) : value;

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: 'offset',
    options: value,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, value);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};

function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || '').toLowerCase() : '';
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const safari = isSafari();
  const css = getComputedStyle$1(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || !safari && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !safari && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function isSafari() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}

const min = Math.min;
const max = Math.max;
const round = Math.round;

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    fallback: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

const FALLBACK_SCALE = {
  x: 1,
  y: 1
};
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return FALLBACK_SCALE;
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    fallback
  } = getCssDimensions(domElement);
  let x = (fallback ? round(rect.width) : rect.width) / width;
  let y = (fallback ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = {
  x: 0,
  y: 0
};
function getVisualOffsets(element, isFixed, floatingOffsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (isFixed === void 0) {
    isFixed = true;
  }
  if (!isSafari()) {
    return noOffsets;
  }
  const win = element ? getWindow(element) : window;
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== win) {
    return noOffsets;
  }
  return {
    x: ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0,
    y: ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0
  };
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = FALLBACK_SCALE;
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = getVisualOffsets(domElement, isFixedStrategy, offsetParent);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += iframeRect.x;
      y += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = {
    x: 1,
    y: 1
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    // `getParentNode` will never return a `Document` due to the fallback
    // check, so it's either the <html> or <body> element.
    return parentNode.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isSafari();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : {
    x: 1,
    y: 1
  };
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...(await getDimensionsFn(floating))
      }
    };
  },
  getClientRects: element => Array.from(element.getClientRects()),
  isRTL: element => getComputedStyle$1(element).direction === 'rtl'
};

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestors = ancestorScroll || ancestorResize ? [...(isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    // ignores Window, checks for [object VisualViewport]
    const isVisualViewport = !isElement(ancestor) && ancestor.toString().includes('V');
    if (ancestorScroll && (animationFrame ? isVisualViewport : true)) {
      ancestor.addEventListener('scroll', update, {
        passive: true
      });
    }
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  let observer = null;
  if (elementResize) {
    observer = new ResizeObserver(() => {
      update();
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _observer;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

class PopoverVariantRenderer extends AbstractVariantRenderer {
  constructor() {
    super(...arguments);
    this.placement = 'bottom';
    this.offset = 0;
    this.arrow = false;
    this.backdrop = false;
    this.reference = undefined;
    this.triggerEl = null;
  }
  async present(component) {
    if (!component.trigger && balBrowser.hasDocument) {
      const firstTrigger = Array.from(document.querySelectorAll(`[bal-popup="${component.el.id}"]`))[0];
      component.trigger = firstTrigger;
    }
    if (component.trigger && component.containerEl && component.arrowEl) {
      this.placement = component.getValue(component.trigger, 'bal-popup-placement', component.placement);
      this.arrow = component.getBooleanValue(component.trigger, 'bal-popup-arrow', component.arrow);
      this.backdrop = component.getBooleanValue(component.trigger, 'bal-popup-backdrop', component.backdrop);
      this.reference = component.getValue(component.trigger, 'bal-popup-reference', component.reference);
      this.offset = component.getNumberValue(component.trigger, 'bal-popup-offset', component.offset);
      this.triggerEl = component.trigger;
      if (this.reference && balBrowser.hasDocument) {
        const referenceEl = document.getElementById(this.reference);
        this.triggerEl = referenceEl ? referenceEl : component.trigger;
      }
      if (this.triggerEl) {
        this.showContainerElement(component);
        this.showBackdropElement(component, this.backdrop);
        this.showArrowElement(component, this.arrow);
        this.triggerEl.classList.add('bal-popup-variant-popover-trigger');
        this.cleanup = autoUpdate(this.triggerEl, component.containerEl, () => {
          this.update(component);
        });
        return true;
      }
    }
    return false;
  }
  async update(component) {
    var _a, _b;
    if (this.triggerEl && component.trigger && component.containerEl && component.arrowEl) {
      const isNavMetaDesktopPopup = this.placement === 'bottom-end' && this.triggerEl !== component.trigger;
      let arrowX = 0;
      if (isNavMetaDesktopPopup) {
        const referenceRect = (_a = this.triggerEl) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        const triggerRect = (_b = component.trigger) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
        const diff = triggerRect.x - referenceRect.x;
        const width = 440 - referenceRect.width;
        arrowX = width + diff + triggerRect.width / 2 - 4;
      }
      computePosition(this.triggerEl, component.containerEl, {
        placement: this.placement,
        middleware: [
          shift(),
          flip(),
          offset(this.arrow ? 16 : this.offset),
          arrow({
            element: component.arrowEl,
            padding: 4,
          }),
        ],
      }).then(({ x, y, middlewareData, placement }) => {
        if (component.containerEl) {
          Object.assign(component.containerEl.style, {
            left: `${x}px`,
            top: `${y}px`,
          });
          const side = placement.split('-')[0];
          const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
          }[side];
          if (middlewareData.arrow && component.arrowEl) {
            const arrowPosition = middlewareData.arrow;
            if (isNavMetaDesktopPopup) {
              Object.assign(component.arrowEl.style, {
                left: `${arrowX}px`,
                top: y != null && arrowPosition.y != null ? `${arrowPosition.y}px` : '',
                right: '',
                bottom: '',
                [staticSide]: `${-4}px`,
              });
            }
            else {
              Object.assign(component.arrowEl.style, {
                left: x != null && arrowPosition.x != null ? `${arrowPosition.x}px` : '',
                top: y != null && arrowPosition.y != null ? `${arrowPosition.y}px` : '',
                right: '',
                bottom: '',
                [staticSide]: `${-4}px`,
              });
            }
          }
        }
      });
      return true;
    }
    return false;
  }
  async dismiss(component) {
    if (component.containerEl && component.arrowEl && this.triggerEl) {
      if (this.cleanup) {
        this.cleanup();
      }
      this.triggerEl.classList.remove('bal-popup-variant-popover-trigger');
      this.hideBackdropElement(component);
      this.hideContainerElement(component);
      this.hideArrowElement(component);
      return true;
    }
    return false;
  }
}

class VariantRenderer {
  constructor(renderer) {
    this.renderer = renderer;
  }
  async present(component) {
    component.balWillAnimate.emit();
    const didRender = await this.renderer.present(component);
    if (didRender) {
      component.presented = true;
      component.balDidAnimate.emit();
    }
    return didRender;
  }
  async update(component) {
    component.balWillAnimate.emit();
    const didRender = await this.renderer.update(component);
    if (didRender) {
      component.balDidAnimate.emit();
    }
    return didRender;
  }
  async dismiss(component) {
    component.balWillAnimate.emit();
    const didRender = await this.renderer.dismiss(component);
    if (didRender) {
      component.presented = false;
      component.balDidAnimate.emit();
    }
    return didRender;
  }
}

const balPopupCss = ":root{--bal-popup-backdrop-background:rgba(0,7,57,.8);--bal-popup-container-padding-top:0;--bal-popup-container-padding-bottom:0;--bal-popup-container-background:var(--bal-color-white);--bal-popup-variant-popover-max-width:auto;--bal-popup-variant-popover-radius:var(--bal-radius-large);--bal-popup-variant-popover-shadow:var(--bal-shadow-large);--bal-popup-variant-drawer-radius:var(--bal-radius-large);--bal-popup-arrow-background:var(--bal-color-white)}.bal-popup{position:static;display:inline;z-index:var(--bal-z-index-popup)}.bal-popup__container{background:var(--bal-popup-container-background);display:none;visibility:hidden;padding-top:var(--bal-popup-container-padding-top);padding-bottom:var(--bal-popup-container-padding-bottom)}.bal-popup__container--variant-popover{border-radius:var(--bal-popup-variant-popover-radius);-webkit-box-shadow:var(--bal-popup-variant-popover-shadow);box-shadow:var(--bal-popup-variant-popover-shadow);width:var(--bal-popup-variant-popover-max-width);position:absolute;top:0;left:0}.bal-popup__container--variant-fullscreen{position:fixed;margin:0;width:100%;min-width:100%;max-width:100% !important;min-height:var(--bal-app-height, 100%)}.bal-popup__container--variant-drawer{position:fixed;border-top-left-radius:var(--bal-popup-variant-drawer-radius);border-top-right-radius:var(--bal-popup-variant-drawer-radius);width:100%}.bal-popup__inner{overflow-y:auto;max-height:calc(var(--bal-app-height, 100%) - 8rem)}.bal-popup__inner__head{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bal-popup__inner__content{width:100%}.bal-popup__arrow{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;width:8px;height:8px;background:var(--bal-popup-arrow-background);-webkit-transform:rotate(45deg);transform:rotate(45deg);display:none;visibility:hidden}.bal-popup__backdrop{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;bottom:0;left:0;right:0;top:0;background-color:var(--bal-popup-backdrop-background);width:100vw;display:none;visibility:hidden}.bal-popup-variant-popover-trigger,.bal-popup-permanent-trigger{z-index:calc(var(--bal-z-index-popup) + 1) !important;position:relative !important}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Popup = proxyCustomElement(class Popup extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.balChange = createEvent(this, "balChange", 7);
    this.balWillAnimate = createEvent(this, "balWillAnimate", 7);
    this.balDidAnimate = createEvent(this, "balDidAnimate", 7);
    this.popupId = `bal-pu-${popupIds++}`;
    this.isClickedOutsideOnMouseDown = false;
    this.isClickedOutsideOnMouseUp = false;
    this.popoverVariantRenderer = new VariantRenderer(new PopoverVariantRenderer());
    this.fullscreenVariantRenderer = new VariantRenderer(new FullscreenVariantRenderer());
    this.drawerVariantRenderer = new VariantRenderer(new DrawerVariantRenderer());
    this.lastVariant = 'popover';
    this.initialActive = this.active;
    this.debouncedGlobalClick = debounce((trigger) => this.notifyGlobalClick(trigger), 10);
    this.onBackdropClick = (ev) => {
      if (this.activeBackdropDismiss && this.presented && ev && ev.target) {
        const element = ev.target;
        return element.classList.contains('bal-popup__backdrop');
      }
      return false;
    };
    this.onCloseClick = () => {
      if (this.activeClosable) {
        this.dismiss();
      }
    };
    this.activeClosable = false;
    this.activeBackdropDismiss = false;
    this.activeVariant = 'popover';
    this.trigger = undefined;
    this.lastTrigger = undefined;
    this.label = '';
    this.reference = undefined;
    this.variant = 'popover';
    this.placement = 'bottom';
    this.arrow = false;
    this.backdrop = false;
    this.offset = 0;
    this.closable = false;
    this.backdropDismiss = false;
    this.active = false;
    this.presented = false;
    this.contentWidth = undefined;
  }
  createLogger(log) {
    this.log = log;
  }
  async variantChanged(newVariant, oldVariant) {
    if (newVariant !== oldVariant) {
      await this.getVariantRenderer(oldVariant).dismiss(this);
      if (this.activeVariant !== newVariant) {
        this.lastVariant = this.activeVariant;
        this.activeVariant = newVariant;
        await this.getVariantRenderer(this.lastVariant).dismiss(this);
      }
      if (this.presented) {
        await this.getVariantRenderer(newVariant).present(this);
      }
    }
  }
  async activeChanged(newActive, oldActive) {
    if (newActive !== oldActive && newActive !== this.presented) {
      if (newActive) {
        this.present();
      }
      else {
        this.dismiss();
      }
    }
  }
  contentWidthChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      if (newValue === undefined) {
        this.el.style.removeProperty('--bal-popup-variant-popover-max-width');
      }
      else {
        this.el.style.setProperty('--bal-popup-variant-popover-max-width', `${this.contentWidth}px`);
      }
    }
  }
  componentDidLoad() {
    this.contentWidthChanged(this.contentWidth, 0);
    if (this.initialActive === true && this.presented !== true) {
      this.present();
    }
  }
  async listenOnGlobalClick(ev) {
    var _a;
    const target = ev.target;
    const trigger = target.closest('[bal-popup]');
    if (trigger && balBrowser.hasWindow) {
      const popupId = ((_a = trigger.attributes.getNamedItem('bal-popup')) === null || _a === void 0 ? void 0 : _a.nodeValue) || '';
      if (this.el.id === popupId) {
        this.debouncedGlobalClick(trigger);
      }
    }
  }
  async listenOnKeyDown(ev) {
    if (this.activeClosable && this.presented && isEscapeKey(ev)) {
      stopEventBubbling(ev);
      this.dismiss();
    }
  }
  async listenOnMouseDown(ev) {
    this.isClickedOutsideOnMouseDown = this.onBackdropClick(ev);
  }
  async listenOnMouseUp(ev) {
    this.isClickedOutsideOnMouseUp = this.onBackdropClick(ev);
  }
  async listenOnComponentClick() {
    if (this.presented &&
      this.activeBackdropDismiss &&
      this.isClickedOutsideOnMouseUp &&
      this.isClickedOutsideOnMouseDown) {
      await this.dismiss();
    }
  }
  async present() {
    await this.resetAllVariants();
    if (await this._present()) {
      this.lastTrigger = this.trigger;
      this.balChange.emit(this.presented);
    }
  }
  async dismiss() {
    await this.resetAllVariants();
    if (await this._dismiss()) {
      this.lastTrigger = this.trigger;
      this.balChange.emit(this.presented);
    }
  }
  async toggle() {
    if (this.presented) {
      return this.dismiss();
    }
    else {
      return this.present();
    }
  }
  async _emitChange() {
    this.balChange.emit(this.presented);
  }
  async _present() {
    if (balBrowser.hasDocument) {
      this.lastFocus = document.activeElement || undefined;
    }
    if (this.lastVariantRenderer) {
      await this.lastVariantRenderer.dismiss(this);
      this.presented = true;
    }
    this.lastVariantRenderer = this.getVariantRenderer();
    const result = await this.lastVariantRenderer.present(this);
    this.focusFirstDescendant();
    return result;
  }
  async _dismiss() {
    var _a;
    const result = await this.getVariantRenderer().dismiss(this);
    this.lastVariantRenderer = undefined;
    if (this.lastFocus && this.lastFocus.focus) {
      (_a = this.lastFocus) === null || _a === void 0 ? void 0 : _a.focus();
    }
    return result;
  }
  getVariantRenderer(variant = this.activeVariant) {
    switch (variant) {
      case 'fullscreen':
        return this.fullscreenVariantRenderer;
      case 'drawer':
        return this.drawerVariantRenderer;
      default:
        return this.popoverVariantRenderer;
    }
  }
  getValue(trigger, attributeName, componentValue) {
    const attributeValue = trigger.attributes.getNamedItem(attributeName);
    return attributeValue ? attributeValue.value : componentValue;
  }
  getNumberValue(trigger, attributeName, componentValue) {
    const attributeValue = trigger.attributes.getNamedItem(attributeName);
    if (attributeValue) {
      return parseInt(attributeValue.value, 10) || componentValue;
    }
    return componentValue;
  }
  getBooleanValue(trigger, attributeName, componentValue) {
    const attributeValue = trigger.attributes.getNamedItem(attributeName);
    if (attributeValue) {
      const booleanValue = attributeValue.value === '' || attributeValue.value === 'true' ? true : false;
      return attributeValue ? booleanValue : componentValue;
    }
    return componentValue;
  }
  notifyGlobalClick(trigger) {
    this.trigger = trigger;
    this.lastTrigger = this.lastTrigger === undefined ? this.trigger : this.lastTrigger;
    this.activeVariant = this.getValue(trigger, 'bal-popup-variant', this.variant);
    this.activeClosable = this.getBooleanValue(trigger, 'bal-popup-closable', this.closable);
    this.activeBackdropDismiss = this.getBooleanValue(trigger, 'bal-popup-backdrop-dismiss', this.backdropDismiss);
    if (this.presented && this.lastTrigger !== this.trigger) {
      this._present();
    }
    else {
      this.toggle();
    }
  }
  async resetAllVariants() {
    await this.dismissAllOtherPopups();
    if (this.lastVariant !== this.activeVariant) {
      const lastVariant = this.getVariantRenderer(this.lastVariant);
      await lastVariant.dismiss(this);
    }
    this.lastVariant = this.activeVariant;
  }
  async dismissAllOtherPopups() {
    if (balBrowser.hasDocument) {
      const popups = Array.from(document.getElementsByTagName('bal-popup')).filter(el => el.id !== this.el.id && el.ariaHidden !== 'true');
      for (let index = 0; index < popups.length; index++) {
        const popup = popups[index];
        await popup._dismiss();
        await popup._emitChange();
      }
    }
  }
  focusFirstDescendant() {
    const { el } = this;
    const firstInput = el.querySelector(focusableQueryString);
    if (firstInput) {
      firstInput.focus();
    }
    else {
      el.focus();
    }
  }
  render() {
    const block = BEM.block('popup');
    const containerBlock = block.element('container');
    const arrowBlock = block.element('arrow');
    const backdropBlock = block.element('backdrop');
    const innerBlock = block.element('inner');
    const innerHeadBlock = innerBlock.element('head');
    const innerContentBlock = innerBlock.element('content');
    return (h(Host, { class: Object.assign({}, block.class()), role: "dialog", "aria-hidden": `${this.presented !== true}`, "aria-modal": `${this.presented === true}`, "aria-presented": `${this.presented === true}`, "aria-labelledby": `${this.popupId}-heading` }, h("div", { class: Object.assign({}, backdropBlock.class()), ref: backdropEl => (this.backdropEl = backdropEl) }), h("div", { class: Object.assign(Object.assign({}, containerBlock.class()), containerBlock.modifier(`variant-${this.activeVariant}`).class()), ref: containerEl => (this.containerEl = containerEl) }, h("div", { class: Object.assign({}, arrowBlock.class()), ref: arrowEl => (this.arrowEl = arrowEl) }), h("bal-stack", { layout: "vertical", px: this.activeVariant === 'popover' ? 'medium' : 'none', py: "medium", class: Object.assign({}, innerBlock.class()) }, this.label ? (h("bal-stack", { space: "auto", class: Object.assign({}, innerHeadBlock.class()) }, h("bal-heading", { "data-test": "bal-popup-label", level: "span", "visual-level": "large", id: `${this.popupId}-heading` }, this.label), this.activeClosable ? (h("bal-close", { "data-test": "bal-popup-close", tabindex: -1, onClick: () => this.onCloseClick() })) : (''))) : (''), h("div", { class: Object.assign({}, innerContentBlock.class()), ref: contentEl => (this.contentEl = contentEl), "data-test": "bal-popup-content" }, h("slot", null))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "variant": ["variantChanged"],
    "active": ["activeChanged"],
    "contentWidth": ["contentWidthChanged"]
  }; }
  static get style() { return {
    css: balPopupCss
  }; }
}, [36, "bal-popup", {
    "label": [1],
    "reference": [1],
    "variant": [1],
    "placement": [1],
    "arrow": [4],
    "backdrop": [4],
    "offset": [2],
    "closable": [4],
    "backdropDismiss": [4, "backdrop-dismiss"],
    "active": [4],
    "contentWidth": [2, "content-width"],
    "activeClosable": [32],
    "activeBackdropDismiss": [32],
    "activeVariant": [32],
    "trigger": [32],
    "lastTrigger": [32],
    "presented": [32],
    "present": [64],
    "dismiss": [64],
    "toggle": [64],
    "_emitChange": [64],
    "_present": [64],
    "_dismiss": [64]
  }, [[8, "click", "listenOnGlobalClick"], [16, "keydown", "listenOnKeyDown"], [1, "mousedown", "listenOnMouseDown"], [1, "mouseup", "listenOnMouseUp"], [0, "click", "listenOnComponentClick"]]]);
__decorate([
  Logger('bal-popup')
], Popup.prototype, "createLogger", null);
let popupIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["bal-popup", "bal-close", "bal-heading", "bal-icon", "bal-stack"];
  components.forEach(tagName => { switch (tagName) {
    case "bal-popup":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Popup);
      }
      break;
    case "bal-close":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "bal-heading":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "bal-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "bal-stack":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const BalPopup = Popup;
const defineCustomElement = defineCustomElement$1;

export { BalPopup, defineCustomElement };
