// import {
//   BGClickColorsT,
//   BGColorsT,
//   BGHoverColorsT,
//   BorderT,
//   ColorsT,
//   HoverColorsT,
//   ClickColorsT,
//   CursorT,
//   MarginPropsT,
//   PaddingPropsT,
//   SVGClickColorsT,
//   SVGColorsT,
//   SVGHoverColorsT,
// } from "../../../styles";
//
// import { FontSizeNames } from "../../../styles";
import { HTMLAttributes, MouseEvent, ReactNode } from "react";

export type ButtonPropT = {
  children?: string | ReactNode
  as?: "a" | "button";
  // fontType?: keyof typeof FontSizeNames;
  href?: string;
  // target?: '_blank'
  // LeftIcon?: React.FC;
  // RightIcon?: React.FC;
  // CenterIcon?: React.FC;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  className?: string
  form?: string
  ref?: React.MutableRefObject<null>
}
/*

 & HTMLAttributes<HTMLButtonElement> &
  ColorsT &
  MarginPropsT &
  PaddingPropsT &
  HoverColorsT &
  ClickColorsT &
  CursorT &
  BGColorsT &
  BGHoverColorsT &
  BGClickColorsT &
  SVGColorsT &
  SVGHoverColorsT &
  SVGClickColorsT &
  BorderT

export type ButtonWrapperPropT = MarginPropsT &
  PaddingPropsT &
  HoverColorsT &
  ClickColorsT &
  CursorT &
  BGColorsT &
  BGHoverColorsT &
  BGClickColorsT &
  SVGColorsT &
  SVGHoverColorsT &
  SVGClickColorsT &
  BorderT

 */