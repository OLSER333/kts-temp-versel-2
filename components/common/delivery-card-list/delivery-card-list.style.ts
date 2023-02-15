import styled from "@emotion/styled";
import { Breakpoints, getCurrentGap } from "../../../styles";

export const DeliveryCardListWraper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${getCurrentGap('rat')}
  width: 100%;

  @media screen and (max-width: ${Breakpoints.phone}) {
    flex-direction: column;
  }
`;
