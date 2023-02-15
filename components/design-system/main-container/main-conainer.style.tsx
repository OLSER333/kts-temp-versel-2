import {
  MarginPropsT,
  PaddingPropsT,
  getCurrentMarginStyle,
  getCurrentGap,
  getCurrentPaddingStyle,
  Breakpoints, Colors,
} from "../../../styles";

import styled from "@emotion/styled";
type MainContainerWrapperT = {
  isCatalogPage?: boolean
}
export const MainContainerWrapper = styled.main<MarginPropsT & PaddingPropsT & MainContainerWrapperT>`
  display: flex;
  flex-direction: column;
  ${getCurrentPaddingStyle("pig", "horizontal")};
  ${getCurrentGap("planet")}
  max-width: 1920px;
  margin-right: auto;
  margin-left: auto;
  
  
  @media screen and (max-width: ${Breakpoints.phone}) {
    ${getCurrentPaddingStyle("rat", "horizontal")};
  }
// @ts-ignore
  padding-top: ${props => props.isCatalogPage ? '120px' : ''};
  background: ${props => props.isCatalogPage ? `${Colors.back}` : ''};
  
  position: relative;
`;
