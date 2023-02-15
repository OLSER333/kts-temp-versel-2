import styled from "@emotion/styled";
import { Breakpoints, Duration, getCurrentGap } from "../../../styles";

type NavListT = {
  isOpen?: boolean
}

export const NavList = styled.nav<NavListT>`


  display: flex;
  align-items: center;
  ${getCurrentGap('bacteria')};
  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    position: fixed;
    flex-direction: column;
    left: 32px;
    right: 32px;
    margin: 0 auto;
    top: 100px;
    transition: all ${Duration.lgHover};
    transform: translate(${props => props.isOpen ? '0' : '-2000px'});
  }
  @media screen and (max-width: ${Breakpoints.tabletSM}) {
    left: 28px;
    right: 28px;
  }
  @media screen and (max-width: ${Breakpoints.phone}) {
    left: 12px;
    right: 12px;
  }
`;

export const HidingWrapperNavList = styled.div`
  
  // nav {
  //   transform: translateY(-1000px);
  //   transition: all ${Duration.lgHover};
  // }
  // &:hover {
  //   nav {
  //     transform: translateY(0)
  //   }
  // }
`;
