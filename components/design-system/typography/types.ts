import {
  FontSizeNames,
  ClickColorsT,
  ColorsT,
  CursorT,
  EllipsisT,
  HoverColorsT,
  MarginPropsT,
  PaddingPropsT,
  Colors,
} from "../../../styles";
import { MouseEvent } from "react";

type TagT = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a" | "li" | "div" ;

export type UnderlineT = keyof typeof Colors | true;

type TextT = {
  as?: TagT;
  href?: string;
  fontType?: keyof typeof FontSizeNames;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLParagraphElement>) => void;
  underline?: UnderlineT;
};

export type TypographyPropsT = TextT &
  MarginPropsT &
  PaddingPropsT &
  ColorsT &
  HoverColorsT &
  ClickColorsT &
  CursorT &
  EllipsisT;
