import styled from "@emotion/styled";
import { getCurrentFontSizeStyle, getCurrentFontStyle } from "../../../styles";


export const HeaderTextWrapper = styled.div`

  display: flex;
  justify-content: center;
  width: 100%;
  

`;
export const HeaderTextStyles = styled.div`
  ${getCurrentFontSizeStyle('main')};
  ${getCurrentFontStyle('main')};
  text-align: center;
  max-width: 900px;
`;
