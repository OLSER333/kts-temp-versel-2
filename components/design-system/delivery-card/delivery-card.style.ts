import styled from "@emotion/styled";
import {
  Breakpoints,
  Colors,
  getCurrentMarginStyle, getCurrentPaddingStyle,
  Radiuses
} from "../../../styles";


type DeliveryCardWrapper = {
  borderColor
}
export const DeliveryCardWrapper = styled.li<DeliveryCardWrapper>`
  background: ${Colors.white};
  border: 4px solid ${({borderColor}) => borderColor ? `${borderColor}`: Colors.blue};
  border-radius: ${Radiuses.sm};
  font-size: 32px;
  font-weight: 600;
  ${getCurrentPaddingStyle('cat', 'horizontal')}
  ${getCurrentPaddingStyle('cat', 'vertical')}
  color: ${Colors.mainBlack};
  font-weight: 500;
  display: flex;
  flex-direction: column;
  max-height: 370px;
  height: max-content;
  aspect-ratio: 1;
  width: 100%;

  @media screen and (max-width: ${Breakpoints.desktopMD}) {
    font-size: 28px;
  }
  @media screen and (max-width: ${Breakpoints.desktopSM}) {
    font-size: 20px;
  }
  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    font-size: 20px;
    &:nth-child(n) {
      border: 2px solid ${({borderColor}) => borderColor ? `${borderColor}`: Colors.blue};
    }
  }
  @media screen and (max-width: ${Breakpoints.tabletMD}) {
    font-size: 15px;
  }
  @media screen and (max-width: ${Breakpoints.tabletSM}) {
    font-size: 13px;
    padding: 15px;
  }
  @media screen and (max-width: 650px) {
    font-size: 12px;
  }
  @media screen and (max-width: ${Breakpoints.phone}) {
    font-size: 20px;
    max-height: 200px;
    height: max-content;
    aspect-ratio: 1;
    max-width: 400px;
    width: 100%;
  }




  img {
    align-self: end;
    ${getCurrentMarginStyle('auto', 'top')};
    width: 84px;
    height: 84px;

    @media screen and (max-width: ${Breakpoints.tabletLG}) {
      width: 40px;
      height: 40px;
    }
    @media screen and (max-width: ${Breakpoints.tabletMD}) {
      width: 28px;
      height: 28px;
    }
    @media screen and (max-width: ${Breakpoints.phone}) {
      width: 60px;
      height: 60px;
    }

  }
`;
