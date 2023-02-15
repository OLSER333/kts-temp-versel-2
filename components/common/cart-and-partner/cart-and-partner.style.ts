import { Breakpoints, getCurrentGap } from "../../../styles";
import styled from "@emotion/styled";

export const CartAndPartnerWrapper = styled.div`
  display: flex;
  align-items: center;
  ${getCurrentGap('bacteria')};
  @media screen and(max-width: ${Breakpoints.desktopSM}) {
    .headerAdaptive {
      padding: 20px;
    }
  };

  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    .PartnerBtn {
      position: fixed;
      bottom: 0;
      right: 0;
    }
  }
`;
