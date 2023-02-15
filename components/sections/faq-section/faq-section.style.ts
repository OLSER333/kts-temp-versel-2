import styled from "@emotion/styled";
import {
  Breakpoints,
  Colors, Duration,
  getCurrentFontSizeStyle,
  getCurrentFontStyle,
  getCurrentGap,
  getCurrentPaddingStyle,
  Radiuses
} from "../../../styles";
import { Button } from "../../design-system/button/common-button";

export const FaqSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  ${getCurrentGap('bacteria')}
`;
type FaqSpoiler = {
  isActive: boolean
}
export const FaqSpoiler = styled.article<FaqSpoiler>`
  border-radius: ${Radiuses.sm};
  ${getCurrentPaddingStyle("dog", 'vertical')};
  ${getCurrentPaddingStyle("pig", 'horizontal')};
  background: ${Colors.white};
  cursor: ${({isActive}) =>!isActive ? 'pointer' : 'initial'};
`;

export const FaqSpoilerQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${getCurrentGap('chicken')}
  ${getCurrentFontStyle('subMain')}
  ${getCurrentFontSizeStyle('subMain')};
  @media screen and (max-width: ${Breakpoints.phone}) {
    font-size: 20px;
  }
`;

type FaqSpoilerAnswerT = {
  active: boolean

}
export const FaqSpoilerAnswer = styled.p<FaqSpoilerAnswerT>`
  font-weight: 500;
  ${getCurrentFontSizeStyle('little')};
  color: ${Colors.mainBlack06};
  transition: all ${Duration.lgHover};
  
  position: relative;
  overflow: hidden;

  
`;

type FaqSpoilerButtonT = {
  active: boolean

}
export const FaqShowButton = styled(Button)<FaqSpoilerButtonT>`
  color: ${Colors.white};
  transition: background-color ${Duration.lgHover};
  background: ${props => props.active ? Colors.gradient_cold : Colors.mainBlack};
  width: 32px;
  height: 32px;
  min-width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${Radiuses.circle};
  cursor: pointer;
  div {
    font-size: 20px;
    transform: translateY(-2px);    
  }
`;

