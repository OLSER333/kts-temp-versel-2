import {
  Breakpoints,
  Colors,
  FontSizeNames,
  IndentNames,
  fontSizes,
  fontStyles,
  indents,
  subsequenceOfBreakpoints,
} from "./constants";
import {
  Color,
  DirectionT,
  GetCurrentIndentStyleT,
  NamesTypeT,
  borderStyleT,
  borderWidthT
} from "./types";

import { getResponsiveStyle } from "./media-query-utils";

export const getCurrentDictionaryValue = <B extends Breakpoints, T extends NamesTypeT>(
  dictionary: Record<B, Partial<Record<T, string>>>,
  breakpointName: B,
  type: T
): string | undefined => dictionary?.[breakpointName]?.[type];

export const getCurrentStyleByDictionary =
  <T extends NamesTypeT>(dictionary: Record<Breakpoints, Partial<Record<T, string>>>) =>
  (propertyName: string) =>
  (type: T, isNegative?: boolean) =>
    getResponsiveStyle(propertyName)(
      subsequenceOfBreakpoints.map(
        (breakpointName) =>
          (isNegative ? "-" : "") + getCurrentDictionaryValue(dictionary, breakpointName, type)
      )
    );

const getCurrentIndentStyle = getCurrentStyleByDictionary(indents);

const getCurrentIndentStylesByDirection =
  (styleName: "margin" | "padding") =>
  (type: keyof typeof IndentNames, direction: DirectionT, isNegative?: boolean) => {
    switch (direction) {
      case "top":
        return getCurrentIndentStyle(styleName + "Top")(type, isNegative);
      case "bottom":
        return getCurrentIndentStyle(styleName + "Bottom")(type, isNegative);
      case "left":
        return getCurrentIndentStyle(styleName + "Left")(type, isNegative);
      case "right":
        return getCurrentIndentStyle(styleName + "Right")(type, isNegative);
      case "vertical":
        return [
          getCurrentIndentStyle(styleName + "Top")(type, isNegative),
          getCurrentIndentStyle(styleName + "Bottom")(type, isNegative),
        ];
      case "horizontal":
        return [
          getCurrentIndentStyle(styleName + "Left")(type, isNegative),
          getCurrentIndentStyle(styleName + "Right")(type, isNegative),
        ];
      default:
        return getCurrentIndentStyle(styleName)(type, isNegative);
    }
  };

export const getCurrentFontSizeStyle = (type: keyof typeof FontSizeNames) =>
  getCurrentStyleByDictionary(fontSizes)("fontSize")(type);

//???
export const getCurrentFontStyle = (type: keyof typeof FontSizeNames) => fontStyles[type];

export const getCurrentMarginStyle: GetCurrentIndentStyleT = (type, direction, isNegative) =>
  getCurrentIndentStylesByDirection("margin")(type, direction, isNegative);

export const getCurrentPaddingStyle: GetCurrentIndentStyleT = (type, direction) =>
  getCurrentIndentStylesByDirection("padding")(type, direction);

export const getCurrentColor = (color: Color) => (color ? `color: ${Colors[color]};` : "");
export const getCurrentGap = (gap: keyof typeof indents["1440px"]) => {
  return gap ? getCurrentIndentStyle('gap')(gap) : "";
}


export const getCurrentBackgroundColor = (color: Color) =>
  color ? `background-color: ${Colors[color]};` : "";

export const getCurrentFillColor = (color: Color) => (color ? `fill: ${Colors[color]};` : "");

export const getCurrentStrokeColor = (color: Color) => (color ? `stroke: ${Colors[color]};` : "");

export const getCurrentBorderColor = (color: Color) =>
  color ? `border-color: ${Colors[color]};` : `border-color: ${Colors.transparent};`;

export const getCurrentBorderWidth = (borderWidth: borderWidthT) =>
  borderWidth !== undefined ? `border-width: ${borderWidth};` : "";

export const getCurrentBorderStyle = (borderStyle: borderStyleT) =>
  borderStyle !== undefined ? `border-style: ${borderStyle};` : "";
