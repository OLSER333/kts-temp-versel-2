import { Breakpoints, Colors, FontSizeNames, IndentNames, indents } from "./constants";

import { DynamicStyle } from "facepaint";

export type IndentDirectionT =
  | "default"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "vertical"
  | "horizontal";

export type IndentsT = Record<Breakpoints, Partial<Record<keyof typeof IndentNames, string>>>;
export type FontSizeNamesT = Record<
  Breakpoints,
  Partial<Record<keyof typeof FontSizeNames, string>>
>;

export type NamesTypeT = keyof typeof FontSizeNames | keyof typeof IndentNames;

export type FontT = { fontType?: keyof typeof FontSizeNames };

export type Color = keyof typeof Colors | undefined;

export type ColorsT = { color?: Color };

export type HoverColorsT = { hoverColor?: Color };

export type ClickColorsT = { clickColor?: Color };

export type BGColorsT = { bg?: Color };

export type BGHoverColorsT = { hoverBg?: Color };

export type BGClickColorsT = { clickBg?: Color };

export type SVGColorsT = { fill?: Color; stroke?: Color };

export type SVGHoverColorsT = { hoverFill?: Color; hoverStroke?: Color };

export type SVGClickColorsT = { clickFill?: Color; clickStroke?: Color };

export type CursorT = {
  cursor?:
    | "auto"
    | "pointer"
    | "zoom-out"
    | "inherit"
    | "initial"
    | "revert"
    | "revert-layer"
    | "unset";
};


export type borderStyleT =
  | "none"
  | "hidden"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset"
  | undefined;

export type borderWidthT = string | undefined;

export type BorderT = {
  borderColor?: Color;
  borderWidth?: borderWidthT;
  borderStyle?: borderStyleT;
};

export type PaddingPropsT = {
  px?: keyof typeof IndentNames;
  py?: keyof typeof IndentNames;
  pt?: keyof typeof IndentNames;
  pb?: keyof typeof IndentNames;
  pl?: keyof typeof IndentNames;
  pr?: keyof typeof IndentNames;
  p?: keyof typeof IndentNames;
};

export type MarginPropsT = {
  mx?: keyof typeof IndentNames;
  my?: keyof typeof IndentNames;
  mt?: keyof typeof IndentNames;
  mb?: keyof typeof IndentNames;
  ml?: keyof typeof IndentNames;
  mr?: keyof typeof IndentNames;
  m?: keyof typeof IndentNames;
};

export type DirectionT =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "vertical"
  | "horizontal"
  | "default"
  | undefined;

export type GetCurrentIndentStyleT = (
  type: keyof typeof IndentNames,
  direction?: DirectionT,
  isNegative?: boolean
) => DynamicStyle[] | DynamicStyle[][];

export type EllipsisT = { isEllipsis?: boolean };
