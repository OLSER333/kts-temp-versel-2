import {
  Breakpoints,
  Colors,
  getCurrentFontSizeStyle,
  getCurrentFontStyle,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  Radiuses,
} from "../../../styles";
import { SectionLayoutT } from "../../design-system";
import styled from "@emotion/styled";

export const AdvantagesWrapper = styled.section`
  height: 300vh;
  ${getCurrentPaddingStyle("pig", "bottom")};
  padding-top: 110px;

  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    height: auto;
  }
`;

export const AdvantagesInner = styled.div<SectionLayoutT>`
  border-radius: ${Radiuses.xxlg};
  ${getCurrentPaddingStyle("dog")};
  min-height: 570px;
  height: calc(100vh - 250px);
  gap: 50px;
  background: ${Colors.white};
  display: flex;
  position: sticky;
  justify-content: space-between;
  top: 110px;

  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    position: relative;
  }

  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    flex-direction: column;
    background: ${Colors.back};
    height: fit-content;
  }
  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    padding-right: 12px;
    padding-left: 12px;
  }
`;

export const AdvantagesInfo = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    height: fit-content;
    gap: 24px;
    width: 100%;
  }
`;

export const AdvantagesMainText = styled.div`
  grid-area: mainText;
  font-weight: 600;
  font-size: 48px;
  line-height: 110%;
  
  img {
    margin-bottom: 13px;
    width: 32px;
  }
  
  @media screen and (max-width: ${Breakpoints.desktopMD}) {
    font-weight: 600;
    font-size: 40px;
    line-height: 110%;
  }
  @media screen and (max-width: ${Breakpoints.desktopSM}) {
    font-weight: 600;
    font-size: 32px;
    line-height: 110%;
  }
  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    font-weight: 600;
    font-size: 28px;
    line-height: 110%;
    img {
      width: 23px;
    }
  }
  @media screen and (max-width: ${Breakpoints.tabletMD}) {
    font-weight: 600;
    font-size: 26px;
    line-height: 110%;
  }
  @media screen and (max-width: ${Breakpoints.tabletSM}) {
    font-weight: 600;
    font-size: 24px;
    line-height: 110%;
    img {
      width: 18px;
      margin-bottom: 7px;
    }
  }
  @media screen and (max-width: ${Breakpoints.phone}) {
    font-weight: 600;
    font-size: 23px;
    line-height: 110%;
  }

  span {
    color: ${Colors.blue};
  }
`;

export const AdvantagesSubText = styled.div`
  max-width: 320px;
  ${getCurrentFontStyle("middle")}
  ${getCurrentFontSizeStyle("middle")}
  ${getCurrentMarginStyle("auto", "top")}
  opacity: .6;

  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    max-width: 500px;
  }
`;

export const AdvantagesCards = styled.div`
  grid-area: cards;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    //position: absolute;
    bottom: -80px;
  }
  @media screen and (max-width: ${Breakpoints.tabletSM}) {
    //position: absolute;
    bottom: -100px;
  }
`;
