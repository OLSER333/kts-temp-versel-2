import styled from "@emotion/styled";
import {
  Breakpoints,
  Color,
  Colors,
  Duration,
  getCurrentBackgroundColor,
  getCurrentFontSizeStyle,
  getCurrentFontStyle, getCurrentGap,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  Radiuses,
  ZIndex
} from "../../../styles";

type ModalPropsT = {
  isOpen: boolean
}


export const ModalOverlay = styled.div<ModalPropsT>`
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${Colors.mainBlack};

  z-index: ${ZIndex.modal - 1};
  display: flex;
  justify-content: flex-end;
  transition: opacity ${Duration.lgHover};
  opacity: ${props => props.isOpen ? .6 : 0};
  z-index: ${props => props.isOpen ? ZIndex.modalOverlay : ZIndex.backItem};
  @media screen and (max-width: ${Breakpoints.phone}) {
    background: ${Colors.back};
    opacity: 1;
    width: 100%;
  }
`;


type ModalWrapperT = {
  showTitle: boolean,
  isOpen: boolean

  isFull?: boolean

}

export const ModalWrapper = styled.div<ModalWrapperT>`

  border-radius: ${Radiuses.lg};
  ${getCurrentPaddingStyle("dog", 'horizontal')}
  ${getCurrentPaddingStyle("dog", 'bottom')}
  padding-top: ${props => props.showTitle ? '120px' : 0}; // на высоту header modal
  padding: ${props => props.isFull && '0px'};
  margin-top: 100px;
  ${getCurrentMarginStyle("pig", 'horizontal')};
  ${getCurrentMarginStyle("chicken", 'bottom')};
  background: ${Colors.back};
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 500px;
  // сделай скролл для внутрянки - готово )
  overflow: hidden; // для круглых краёв. Не влияет на внутр. скролл
  z-index: ${ZIndex.modal};
  transition: all ${Duration.lgHover};
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(1000px)'};
  max-height: 1000px;

  @media screen and (max-width: ${Breakpoints.phone}) {
    margin-top: 70px;
    width: 100%;
    border-radius: ${Radiuses.lg} ${Radiuses.lg} 0 0 ;
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 0;
  }
`;

type ModalHeader = {
  showTitle: boolean
}

export const ModalHeader = styled.header<ModalHeader>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  // height: ${({ showTitle }) => showTitle ? '120px' : '0px'};
  height: 120px;
  z-index: ${props => !props.showTitle && ZIndex.frontItem};
  width: 100%;
  ${getCurrentPaddingStyle("dog")};
  //width: 100%;
`;


type ModalCloseT = {
  hoverBgColor?: Color
}
export const ModalClose = styled.div<ModalCloseT>`
  &:hover {
    ${props => getCurrentBackgroundColor(props.hoverBgColor)};
  }

  background: ${Colors.white};
  cursor: pointer;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 5px 4px rgba(255, 255, 255, 0.36), inset 0 7px 10px rgba(255, 255, 255, 0.2);

  @media screen and (max-width: ${Breakpoints.phone}) {
    width: 40px;
    height: 40px;
  }
  
`;


type  ModalTitleT = {
  color: string
}

export const ModalTitle = styled.div<ModalTitleT>`
  display: block;
  ${getCurrentFontStyle('subMain')};
  ${getCurrentFontSizeStyle('subMain')};
  color: ${props => props.color};
  text-align: right;
`;

export const ModalDivider = styled.div`
  height: 2px;
  width: 100%;
  background: ${Colors.mainBlack};
  opacity: 0.2;
  //margins deleted
`;


export const ModalContent = styled.div`
  overflow-y: auto;
  height: 100%;
`;

//////////////////////////////

export const ModalGratitudeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${getCurrentFontStyle('main')}
  ${getCurrentFontSizeStyle('main')}
  margin-top: 40px
`;

export const ModalGratitudeInner = styled.div`
  display: flex;
  align-items: center;

  ${getCurrentGap('ant')}
  ${getCurrentFontStyle('main')}
  ${getCurrentFontSizeStyle('main')}
  svg, path {
    width: 30px;
    height: 37px;
  }
`;


////////////////DetailStyles

export const ModalDetailFull = styled.div<ModalWrapperT>`
  border-radius: ${Radiuses.lg};
  margin-top: 100px;
  ${getCurrentMarginStyle("pig", 'horizontal')};
  ${getCurrentMarginStyle("chicken", 'bottom')};
  background: ${Colors.back};
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 500px;
  max-height: 1000px;
  // сделай скролл для внутрянки - готово )
  overflow: hidden; // для круглых краёв. Не влияет на внутр. скролл
  z-index: ${ZIndex.modal};
  transition: all ${Duration.lgHover};
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(1000px)'};

  @media screen and (max-width: ${Breakpoints.phone}) {
    width: 100vw;
    border-radius: ${Radiuses.lg} ${Radiuses.lg} 0 0 ;
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 0;
  }
  
  
`;

///////////////////// cart styles


export const ModalCartInner = styled.ul`
  display: flex;
  flex-direction: column;
  ${getCurrentGap('rat')}
`;

export const ModalCartAmountBLock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 150px;

`;

export const ModalCartLabelAmount = styled.div`
  color: ${Colors.mainBlack06};
  ${getCurrentFontSizeStyle('smallest')}
  ${getCurrentFontStyle('smallest')};
  
`;

export const ModalCartCountAmount = styled.div`
  color: ${Colors.mainBlack};
  ${getCurrentFontSizeStyle('subMain')}
  ${getCurrentFontStyle('subMain')};

`;

export const ModalCartEmpty = styled.div`
  color: ${Colors.mainBlack};
  ${getCurrentFontSizeStyle('middle')}
  ${getCurrentFontStyle('middle')};
  top: 50%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;


