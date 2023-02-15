import {
  BGClickColorsT,
  BGColorsT,
  BGHoverColorsT,
  BorderT,
  ClickColorsT,
  ColorsT,
  CursorT,
  DirectionT,
  EllipsisT,
  FontT,
  GetCurrentIndentStyleT,
  HoverColorsT,
  MarginPropsT,
  PaddingPropsT,
  SVGClickColorsT,
  SVGColorsT,
  SVGHoverColorsT,
} from "./types";
import {
  getCurrentBackgroundColor,
  getCurrentBorderColor,
  getCurrentBorderStyle,
  getCurrentBorderWidth,
  getCurrentColor,
  getCurrentFillColor,
  getCurrentFontSizeStyle,
  getCurrentFontStyle,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  getCurrentStrokeColor,
} from "./get-styles-utils";

import { DynamicStyle } from "facepaint";
import { IndentNames } from "./constants";
import { css } from "@emotion/react";
import { ellipsis } from "./particles.style";

enum PaddingDirectionDictionary {
  p = "default",
  px = "horizontal",
  py = "vertical",
  pt = "top",
  pb = "bottom",
  pl = "left",
  pr = "right",
}

enum MarginDirectionDictionary {
  m = "default",
  mx = "horizontal",
  my = "vertical",
  mt = "top",
  mb = "bottom",
  ml = "left",
  mr = "right",
}

const getIndentStylesByProps = <K extends string>(
  props: Record<K, keyof typeof IndentNames | undefined>,
  directionDictionary: Record<K, DirectionT>,
  getCurrentIndentStyleHandler: GetCurrentIndentStyleT
): (DynamicStyle | DynamicStyle[])[] =>
  (Object.keys(props) as K[]).reduce((acc, key) => {
    const type = props[key];

    if (type) {
      const arrayOfIndents = getCurrentIndentStyleHandler(type, directionDictionary[key]);

      return [...arrayOfIndents, ...acc];
    } else {
      return acc;
    }
  }, [] as (DynamicStyle | DynamicStyle[])[]);

export const applyMargins = ({ mx, my, mt, mb, ml, mr, m }: MarginPropsT) => {
  const marginProps = { mx, my, mt, mb, ml, mr, m };

  const marginStyles = getIndentStylesByProps(
    marginProps,
    MarginDirectionDictionary,
    getCurrentMarginStyle
  );

  return marginStyles;
};

export const applyPaddings = ({ px, py, pt, pb, pl, pr, p }: PaddingPropsT) => {
  const paddingProps = { px, py, pt, pb, pl, pr, p };

  const paddingStyles = getIndentStylesByProps(
    paddingProps,
    PaddingDirectionDictionary,
    getCurrentPaddingStyle
  );

  return paddingStyles;
};

export const applyFontType = ({ fontType = "subLittle" }: FontT) => css`
  ${getCurrentFontSizeStyle(fontType)}
  ${getCurrentFontStyle(fontType)}
`;

export const applyColors = ({ color = "black" }: ColorsT) => css`
  ${getCurrentColor(color)}
`;

export const applyHoverColors = ({ hoverColor }: HoverColorsT) => css`
  :hover {
    ${getCurrentColor(hoverColor)}
  }
`;

export const applyClickColors = ({ clickColor }: ClickColorsT) => css`
  :active {
    ${getCurrentColor(clickColor)}
  }
`;

export const applyBGColors = ({ bg }: BGColorsT) => css`
  ${getCurrentBackgroundColor(bg)}
`;

export const applyBGHoverColors = ({ hoverBg }: BGHoverColorsT) => css`
  :hover {
    ${getCurrentBackgroundColor(hoverBg)}
  }
`;

export const applyBGClickColors = ({ clickBg }: BGClickColorsT) => css`
  :active {
    ${getCurrentBackgroundColor(clickBg)}
  }
`;

export const applySVGColors = ({ fill, stroke }: SVGColorsT) => css`
  ${getCurrentFillColor(fill)}
  ${getCurrentStrokeColor(stroke)}
`;

export const applySVGHoverColors = ({ hoverFill, hoverStroke }: SVGHoverColorsT) => css`
  :hover {
    ${getCurrentFillColor(hoverFill)}
    ${getCurrentStrokeColor(hoverStroke)}
  }
`;

export const applySVGClickColors = ({ clickFill, clickStroke }: SVGClickColorsT) => css`
  :active {
    ${getCurrentFillColor(clickFill)}
    ${getCurrentStrokeColor(clickStroke)}
  }
`;

export const applyBorder = ({ borderColor, borderWidth = "1px", borderStyle = "solid" }: BorderT) =>
  css`
    ${getCurrentBorderWidth(borderWidth)}
    ${getCurrentBorderStyle(borderStyle)}
    ${getCurrentBorderColor(borderColor)}
  `;

export const applyCursor = ({ cursor }: CursorT) => css`
  cursor: ${cursor};
`;

export const applyEllipsis = ({ isEllipsis }: EllipsisT) => (isEllipsis ? ellipsis : "");
