import styled from "@emotion/styled";
import {
  Breakpoints,
  Colors,
  getCurrentFontSizeStyle,
  getCurrentFontStyle,
  getCurrentGap, getCurrentMarginStyle,
  getCurrentPaddingStyle,
  Radiuses
} from "../../../styles";


export const CalcSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  > :first-child {
    ${getCurrentMarginStyle('bull', 'bottom')}
  }
  > :last-child {
    ${getCurrentMarginStyle('pig', 'top')};
    align-self: center;
  }


`;


export const CalcInput = styled.input`
  -webkit-appearance: none !important;
  background:#36B189;
  height: 8px;
  cursor: grab;
  border-radius: 5px;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    background:#fff;
    height:30px;
    width: 30px;
    background: linear-gradient(268.02deg, #FF8A00 -14.53%, #FF5C00 96.05%);
    border-radius: 8px;
    box-shadow: 0 0 1px 8px #FF5C00 inset;
  }
`;

export const CalcCard = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  align-items: center;
  width: 100%;
  min-height: 250px;
  max-width: 500px;
  border-radius: ${Radiuses.lg};
  ${getCurrentPaddingStyle("dog", 'horizontal')};
  ${getCurrentPaddingStyle("dog", 'vertical')};
  
  background: ${Colors.white};
  
  > {
    &:nth-child(1) {
      align-self: flex-start;
    }
    &:nth-child(3) {
      align-self: flex-end;
    }
  }

  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    padding: 24px
  }
  
`;

export const CalcCardRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const CalcCardMeasurements = styled.div`
  background: linear-gradient(268.02deg, #FF8A00 -14.53%, #FF5C00 96.05%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${getCurrentFontStyle('main')};
  ${getCurrentFontSizeStyle('main')};
`;

export const CalcCardCategoryName = styled.div`
  ${getCurrentFontStyle('middle')};
  ${getCurrentFontSizeStyle('middle')};
  color: ${Colors.mainBlack}
  
  
`;


export const CalcCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  ${getCurrentGap('rat')};
  @media screen and (max-width: ${Breakpoints.desktopSM}) {
    align-items: center;
    flex-direction: column;
  }
  
`;

export const CalcMaterialBtnsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${getCurrentGap('ant')};
`;

export const CalcResult = styled.div`
  width: 140px;
  height: 140px;
  ${getCurrentFontStyle('slogan')}  
  ${getCurrentFontSizeStyle('slogan')}
  color: ${Colors.white};
  background: linear-gradient(268.02deg, #FF8A00 -14.53%, #FF5C00 96.05%);
  border-radius: ${Radiuses.circle};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CalcResultLabel = styled.span`
  ${getCurrentFontStyle('little')}  
  ${getCurrentFontSizeStyle('little')}
  color: ${Colors.mainBlack04}
`;
export const CalcResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;