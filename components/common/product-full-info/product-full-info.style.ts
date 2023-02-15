import styled from "@emotion/styled";
import {
  Colors,
  getCurrentFontSizeStyle,
  getCurrentFontStyle,
  getCurrentGap,
  getCurrentPaddingStyle,
  ZIndex
} from "../../../styles";


export const ProductFullWrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  //height: 100%;

`;



export const ProductFullImg = styled.div`

`;

export const ProductFullButtons = styled.div`
  width: fit-content;
  bottom: 24px;
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: ${ZIndex.frontItem + 1};

  display: flex;
  align-items: center;
  ${getCurrentGap('ant')}
`;
export const ProductPaddingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${getCurrentPaddingStyle('dog', 'horizontal')}
  ${getCurrentGap('rat')}
  padding-bottom: 160px;

`;

export const ProductFullTitle = styled.header`
  ${getCurrentFontStyle('middle')}
  ${getCurrentFontSizeStyle('middle')}
`;
export const ProductAbout = styled.div`
  ${getCurrentFontSizeStyle('smallest')}
  ${getCurrentFontStyle('smallest')}
  color: ${Colors.orange};
  text-transform: uppercase;
`;

export const ProductAboutText = styled.div`
  ${getCurrentFontSizeStyle('subLittle')}
  ${getCurrentFontStyle('subLittle')}
  color: ${Colors.mainBlack06};
  font-weight: 700;
  
  display: flex;
  flex-direction: column;

  p{
    span {
      ${getCurrentFontSizeStyle('subLittle')}
      font-weight: 500;
      color: ${Colors.mainBlack06} ;
      font-weight: 700;
      
    }
  }
  p {
    strong {
      ${getCurrentFontSizeStyle('little')};
      color: ${Colors.mainBlack};
      font-weight: 500;
    }
  }

`;


export const ProductAttributes = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 12px;
  overflow: hidden;
`;
export const ProductAttrRow = styled.li`
  display: flex;
  gap: 2px;
`;

type ProductAttrCellT = {
  isOrange?: boolean
}
export const ProductAttrCell = styled.div<ProductAttrCellT>`
  flex: 1 0 50%;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  color: ${Colors.mainBlack06};
  background: ${Colors.white};
`;

export const ProductAttrCellOrange = styled.div<ProductAttrCellT>`
  flex: 1 0 50%;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  background: ${Colors.orange};
  color: #fff;
`;
