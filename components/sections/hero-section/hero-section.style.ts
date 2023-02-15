import styled from "@emotion/styled";
import { SectionLayoutT } from "../../design-system";
import {
  Breakpoints,
  Colors,
  getCurrentFontSizeStyle,
  getCurrentFontStyle,
  getCurrentGap,
  Radiuses
} from "../../../styles";
import { Button } from "../../design-system/button/common-button";

export const HeroSectionWrapper = styled.section<SectionLayoutT>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 48px;
  
  grid-template-areas: 
  'decor logo'
  'decor title'
  'decor subtitle'
  'decor subtitle2';

  


  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    grid-template-columns: 1fr;
    row-gap: 20px;
    margin-top: 80px;
    grid-template-areas: 
  'logo'
  'title'
  'decor '
  'subtitle'
  'subtitle2';
  }

  .herologo {
    grid-area: logo;
    height: 100%;
    max-width: 420px;
    @media screen and (max-width: ${Breakpoints.tabletLG}) {
      max-width: 290px;
    }
    @media screen and (max-width: ${Breakpoints.phone}) {
      width: 250px;

    }
  }
}

`;


export const HeroDecorWrapper = styled.div`
  position: relative;
  grid-area: decor;
  
  @media screen and (max-width: ${Breakpoints.tabletMD}) {
    display: flex;
    justify-content: center;
  }
  
`;

export const HeroDecorImg = styled.div`
  position: relative;
  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    height: 350px;
    width: 350px;
    margin: 0 auto;
  }

  @media screen and (max-width: ${Breakpoints.tabletMD}) {
    height: 290px;
    width: 290px;
  }
  @media screen and (max-width: ${Breakpoints.phone}) {
    height: 290px;
    width: 290px;
  }
  
`;

export const HeroDecorImgInner = styled.div`
  position: relative;
  width: 90%;
  aspect-ratio: 1;
  border-radius: ${Radiuses.circle};
  overflow: hidden;
 
  `;


export const HeroDecorBadge = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  align-content: center;
  justify-items: center;
  
  ${getCurrentGap('butterfly')};
  background: ${Colors.white};
  cursor: initial;
  
  ${getCurrentFontStyle('little')}
  ${getCurrentFontSizeStyle('little')}
  svg, path {
    align-self: flex-end;
    width: 40px;
    height: 40px;
  }
  p {
    align-self: flex-start;
  }
  border-radius: ${Radiuses.circle};
  width: 200px;
  height: 200px;

  
  @media screen and (max-width: ${Breakpoints.desktopSM}) {
    top: 0;
  }
  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    width: 120px;
    height: 120px;
    font-size: 10px;
    line-height: 1.2;
  }
`;

// export const HeroInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   ${getCurrentGap('dog')}
//
//
// `;

export const ThirdBlockTitle = styled.div`
  ${getCurrentFontStyle('main')}
  ${getCurrentFontSizeStyle('main')};
  grid-area: title
  `;
export const ThirdBlockSubTitle = styled.div`
  ${getCurrentFontStyle('subMain')}
  ${getCurrentFontSizeStyle('subMain')}
  color: ${Colors.mainBlack08};
  grid-area: subtitle
` ;
export const ThirdBlockSubTitle2 = styled.div`
  ${getCurrentFontStyle('middle')}
  ${getCurrentFontSizeStyle('middle')}
  color: ${Colors.mainBlack06};
  grid-area: subtitle2
  `;


