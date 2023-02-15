import {
  applyClickColors,
  applyColors,
  applyCursor,
  applyEllipsis,
  applyFontType,
  applyHoverColors,
  applyMargins,
  applyPaddings,
} from "../../../styles";

import { TypographyPropsT } from "./types";
import styled from "@emotion/styled";
import { applyUnderline } from "./utils";

export const Text = styled.p<TypographyPropsT>`
  display: inline-block;
  transition: color 0.3s;

  ${applyFontType}
  ${applyMargins}
  ${applyPaddings}
  ${applyColors}
  ${applyHoverColors}
  ${applyClickColors}
  ${applyCursor}
  ${applyEllipsis}
  ${applyUnderline}
`;
