import styled from "@emotion/styled";
import {
  Colors,
  getCurrentFontSizeStyle,
  getCurrentFontStyle,
  getCurrentGap,
  getCurrentMarginStyle,
  Radiuses
} from "../../../styles";

export const CartOrderWrapper = styled.article`
  display: flex;
  flex-direction: column;
  ${getCurrentGap('dog')};
  padding-top: 20px;
  
  `;

export const CartOrderInner = styled.article`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  ${getCurrentGap('dog')}
`;

export const CartOrderImg = styled.div`
  border-radius: ${Radiuses.xs};
  overflow: hidden;
`;
export const CartOrderPriceAndButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${getCurrentGap('rat')}
  ${getCurrentMarginStyle('chicken', 'bottom')}
  
  
`;

export const CartOrderButtons = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  ${getCurrentGap('butterfly')}
  
`;

export const CardOrderMoreAbout = styled.button`
  ${getCurrentFontSizeStyle('smallest')}
  ${getCurrentFontStyle('smallest')};
  color: ${Colors.mainBlack04};
  cursor: pointer;
  text-transform: uppercase;
  `;

export const CardOrderDelete = styled.button`
  ${getCurrentFontSizeStyle('smallest')}
  ${getCurrentFontStyle('smallest')};
  color: ${Colors.red};
  cursor: pointer;
  text-transform: uppercase;
  `;

export const CartOrderColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
