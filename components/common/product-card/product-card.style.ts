import styled from "@emotion/styled";
import {
  Breakpoints,
  Colors, Duration,
  getCurrentFontSizeStyle,
  getCurrentFontStyle,
  getCurrentGap,
  getCurrentMarginStyle,
  Radiuses
} from "../../../styles";

export const ProductCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  min-width: 230px;
  
  ${getCurrentFontStyle('middle')}
  ${getCurrentFontSizeStyle('middle')}
  .showOnHover {
    transition: opacity ${Duration.smHover};
    opacity: 0;
  }

  u {
    text-decoration: none;
    ${getCurrentMarginStyle('butterfly', 'bottom')}
    Z
  }



  &:hover {
    .showOnHover {

      opacity: 1;
    }

    .whiteOnHover {
      transition: opacity ${Duration.smHover}, background ${Duration.smHover};
      background: ${Colors.white};
      cursor: initial;
    }

    u {
      text-decoration: underline;
      color: ${Colors.orange}

    }


  }

  @media screen and (max-width: ${Breakpoints.tabletSM}) {
    .showAlways {
      opacity: 1;
    }
  }

`;


export const ProductCardImgWrapper = styled.div`
  border-radius: ${Radiuses.sm};
  overflow: hidden;
  ${getCurrentMarginStyle('chicken', 'bottom')};
  position: relative;
  height: 280px;
  //min-width: 430px;
`;



export const ProductCardButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  ${getCurrentGap('ant')};
  margin-top: auto;
`;
export const ProductCardButtonsInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  ${getCurrentGap('ant')}
  `;

type ProductCardCategoryWrapperT = {
  isFull?: boolean
}
export const ProductCardCategoryWrapper = styled.div<ProductCardCategoryWrapperT>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${getCurrentGap('rat')}
  ${getCurrentFontStyle('smallest')}
  ${getCurrentFontSizeStyle('smallest')}
  ${ props => !props.isFull ? getCurrentMarginStyle('butterfly', 'bottom'): ''}
  color: ${Colors.mainBlack04}
`;

export const ProductCardCategoryNew = styled.div`

  ${getCurrentGap('rat')}
  ${getCurrentFontStyle('smallest')}
  ${getCurrentFontSizeStyle('smallest')}
  color: ${Colors.blue}
`;

export const ProductCardCategorySale = styled.div`

  ${getCurrentGap('rat')}
  ${getCurrentFontStyle('smallest')}
  ${getCurrentFontSizeStyle('smallest')}
  color: ${Colors.red}
`;
