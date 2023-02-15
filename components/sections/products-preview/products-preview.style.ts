import styled from "@emotion/styled";
import { Breakpoints, getCurrentGap } from "../../../styles";

export const ProductsPreviewWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${getCurrentGap('pig')};
 position: relative;

  .productsHeader {
    @media screen and (max-width: ${Breakpoints.phone}) {
      margin-bottom: 80px;
    }
  }  
  `;

