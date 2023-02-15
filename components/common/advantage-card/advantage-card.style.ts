import { css } from "@emotion/react";
import {
  Breakpoints,
  Colors,
  getCurrentFontSizeStyle,
  getCurrentFontStyle,
  getCurrentGap,
  getCurrentPaddingStyle,
  Radiuses,
} from "../../../styles";
import styled from "@emotion/styled";

const hidden = css`
  opacity: 0;
  transform: translateY(40px);
`;

type AdvantageCardWrapper = {
  isShown: boolean
}
export const AdvantageCardWrapper = styled.article<AdvantageCardWrapper>`
  border-radius: ${Radiuses.lg};
  ${getCurrentPaddingStyle("dog")};
  ${getCurrentPaddingStyle("dog")};
  background: ${Colors.white};
  border: 2px solid rgba(15, 31, 47, 0.05);
  box-shadow: 0px 4px 20px rgba(34, 34, 34, 0.07);

  display: flex;
  flex-direction: column;
  height: 320px;
  transition: 0.3s;
  max-width: 580px;
  // @ts-ignore
  ${({ isShown }) => (isShown ? "" : hidden)};

  &:not(:first-of-type) {
    margin-top: -40%;
  }

  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    &:not(:first-of-type) {
      margin-top: 24px;
    }
    width: 100%;
    max-width: none;
    opacity: 1;
    transform: translateY(0px);
  }

  @media screen and (max-width: ${Breakpoints.phone}) {
    height: 220px;
  }
`;
export const AdvantageTitleWrapper = styled.div`
  display: flex;
  ${getCurrentGap('cat')}
  `;

export const AdvantageCardTitle = styled.div`
  display: flex;
  align-items: center;
  ${getCurrentGap("cat")};
  ${getCurrentFontStyle("main")};
  ${getCurrentFontSizeStyle("main")};
  color: ${({ color }) => (color ? color : "")};
`;

export const AdvantageCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  ${getCurrentGap("rat")};
`;
export const AdvantageCardText = styled.div`
  ${getCurrentFontStyle("middle")};
  ${getCurrentFontSizeStyle("middle")};
`;

export const AdvantageCardSubText = styled.div`
  ${getCurrentFontStyle("subLittle")};
  ${getCurrentFontSizeStyle("subLittle")};
  color: ${Colors.mainBlack06};
`;
