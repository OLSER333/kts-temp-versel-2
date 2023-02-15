import { Breakpoints, getCurrentFontSizeStyle, getCurrentFontStyle, getCurrentGap } from "../../../styles";
import styled from "@emotion/styled";

export const ProductCardListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 60px;
  column-gap: 16px;
  width: 100%;
  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 70px;
  }
  @media screen and (max-width: ${Breakpoints.phone}) {
    grid-template-columns: 1fr;
    row-gap: 48px;
  }

`;

export const ProductEmptyList = styled.div`
  ${getCurrentFontSizeStyle('subMain')};
  ${getCurrentFontStyle('subMain')};
  text-align: center;
  max-width: 900px;
`;