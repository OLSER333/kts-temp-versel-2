import {
  Duration,
  Radiuses,
  getCurrentPaddingStyle,
  getCurrentFontStyle,
  getCurrentGap,
  getCurrentFillColor,
  getCurrentFontSizeStyle,
  getCurrentStrokeColor, Breakpoints,
} from "../../../styles";

import styled from "@emotion/styled";

import { Colors } from "../../../styles";
import { Button } from "./common-button";
import { ButtonPropT } from "./types";
export const ButtonWrapper = styled.button<ButtonPropT>`

`;


export const NavBtn = styled(Button)`
  background: ${Colors.white};
  color: ${Colors.mainBlack};
  ${getCurrentPaddingStyle('dog', 'horizontal')};
  ${getCurrentPaddingStyle('chicken', 'vertical')};
  border-radius: ${Radiuses.lg};
  transition: all ${Duration.smHover};

  ${getCurrentFontStyle('subLittle')}
  ${getCurrentFontSizeStyle('subLittle')}
  &:hover {
    color: ${Colors.mainBlack06};
    box-shadow: inset 0px 5px 4px rgba(0, 0, 0, 0.08), inset 0px 7px 10px rgba(0, 0, 0, 0.07);
  }

  &:active {
    color: ${Colors.mainBlack06};
    box-shadow: none;
  }

  @media screen and (max-width: ${Breakpoints.desktopSM}) {
    padding: 20px
  }
  
  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    width: 100%;
    text-align: center;
  }
 
  
`;

export const PartnerBtn = styled(Button)`
  background: ${Colors.gradient_warm};
  color: ${Colors.white};
  ${getCurrentPaddingStyle('dog', 'horizontal')};
  ${getCurrentPaddingStyle('chicken', 'vertical')};
  border-radius: ${Radiuses.lg};
  transition: all ${Duration.smHover};

  ${getCurrentFontStyle('subLittle')}
  ${getCurrentFontSizeStyle('subLittle')}
  &:hover {
    color: ${Colors.orange06};
      // background: ${Colors.orange};
    box-shadow: inset 0px 5px 4px rgba(255, 255, 255, 0.36), inset 0px 7px 10px rgba(255, 255, 255, 0.2);
  }

  &:active {
    color: ${Colors.white};
    background: ${Colors.gradient_warm};
    box-shadow: none;
  }
`;

type PartnerBtnHeaderT = {
  isOpen?: boolean
}
export const PartnerBtnHeader = styled(Button)<PartnerBtnHeaderT>`
  background: ${Colors.gradient_warm};
  color: ${Colors.white};
  ${getCurrentPaddingStyle('dog', 'horizontal')};
  ${getCurrentPaddingStyle('chicken', 'vertical')};
  border-radius: ${Radiuses.lg};
  transition: all ${Duration.smHover};

  ${getCurrentFontStyle('subLittle')}
  ${getCurrentFontSizeStyle('subLittle')}
  &:hover {
    color: ${Colors.orange06};
      // background: ${Colors.orange};
    box-shadow: inset 0px 5px 4px rgba(255, 255, 255, 0.36), inset 0px 7px 10px rgba(255, 255, 255, 0.2);
  }

  &:active {
    color: ${Colors.white};
    background: ${Colors.gradient_warm};
    box-shadow: none;
  }


  @media screen and (max-width: ${Breakpoints.desktopSM}) {
    padding: 20px
  }
  
  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    position: fixed;
    bottom: 16px;
    left: 32px;
    right: 32px;
    margin: 0 auto;
    transition: all ${Duration.lgHover};
    transform: translate(${props => props.isOpen ? '0' : '-2000px'});
  }
  @media screen and (max-width: ${Breakpoints.tabletSM}) {
    left: 28px;
    right: 28px;
  }
  @media screen and (max-width: ${Breakpoints.phone}) {
    left: 12px;
    right: 12px;
  }
  
`;




export const CartOrderCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.white};
  background: ${Colors.red};
  width: 24px;
  height: 24px;
  border-radius: ${Radiuses.circle};
  ${getCurrentFontStyle('subLittle')}
  ${getCurrentFontSizeStyle('subLittle')}; 
  @keyframes triggerCart{
    0% {
      transform: scale(1);
      
    }
    50% {
      background: ${Colors.gradient_cold};
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  };
  animation: .8s triggerCart;
  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    position: absolute;
    right: -8px;
    top: -8px;
   
  }
`;

export const CartBtn = styled(Button)`
  background: ${Colors.mainBlack};
  color: ${Colors.white};
  ${getCurrentPaddingStyle('dog', 'horizontal')};
  ${getCurrentPaddingStyle('chicken', 'vertical')};
  border-radius: ${Radiuses.lg};
  transition: all ${Duration.smHover};
  ${getCurrentFontStyle('subLittle')};
  ${getCurrentFontSizeStyle('subLittle')}
  max-height: 58.2px;
  
  display: flex;
  align-items: center;
  position: relative;
  ${getCurrentGap('butterfly')}
  
 
  &:hover {
    color: ${Colors.red};
    box-shadow: inset 0px 5px 4px rgba(255, 62, 62, 0.2), inset 0px 7px 10px rgba(255, 0, 0, 0.07);
  }

  &:active {
    color: ${Colors.white};
    box-shadow: none;
  }

  @media screen and (max-width: ${Breakpoints.desktopSM}) {
    padding: 20px
  }
  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    border-radius: 16px;
    align-self: flex-end;
    margin-left: auto;
    width: 56px;
    height: 56px;
  }
 
`;


export const CalcBtnCold = styled(Button)`
  background: ${Colors.gradient_cold};
  color: ${Colors.white};
  ${getCurrentPaddingStyle('bull', 'horizontal')};
  ${getCurrentPaddingStyle('cat', 'vertical')};
  border-radius: ${Radiuses.xxxlg};
  transition: all ${Duration.smHover};

  ${getCurrentFontStyle('little')}
  ${getCurrentFontSizeStyle('little')}
  &:hover {
    filter: grayscale(15%);
    color: ${Colors.white06};
  }

  &:active {
    filter: none;
    color: ${Colors.white};
  }
`;

export const CalcBtnColdFixed = styled(CalcBtnCold)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 24px;
  margin: 0 auto;
  width: fit-content;
  transition: opacity ${Duration.lgHover}, transform ${Duration.lgHover};
`;

export const CalcBtnWhite = styled(Button)`
  background: ${Colors.white};
  color: ${Colors.mainBlack};
  ${getCurrentPaddingStyle('bull', 'horizontal')};
  ${getCurrentPaddingStyle('cat', 'vertical')};
  border-radius: ${Radiuses.xxxlg};
  transition: all ${Duration.smHover};

  ${getCurrentFontStyle('little')}
  ${getCurrentFontSizeStyle('little')}
  &:hover {
    filter: grayscale(15%);
    color: ${Colors.mainBlack06};
  }
    width: fit-content;
  &:active {
    filter: none;
    color: ${Colors.mainBlack};
  };
  @media screen and (max-width: ${Breakpoints.tabletLG}) {
    padding: 15px 20px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    max-width: 600px;
    ${getCurrentPaddingStyle('bull', 'horizontal')};
    ${getCurrentPaddingStyle('cat', 'vertical')};
  }

`;

export const TagBtn = styled(Button)`
  background: ${Colors.white};
  color: ${Colors.mainBlack};
  ${getCurrentPaddingStyle('dog', 'horizontal')};
  ${getCurrentPaddingStyle('chicken', 'vertical')};
  border-radius: ${Radiuses.md};
  transition: all ${Duration.smHover};
  ${getCurrentFontStyle('subLittle')};
  ${getCurrentFontSizeStyle('subLittle')}
  font-weight: 500;
  display: flex;
  align-items: center;
  white-space: nowrap;
  max-height: 50px;
  @media screen and (max-width: ${Breakpoints.tabletSM}) {
    max-height: 45px;
  }

  ${getCurrentGap('ant')}
  &:hover {
    color: ${Colors.mainBlack06};
    box-shadow: inset 0px 5px 4px rgba(0, 0, 0, 0.08), inset 0px 7px 10px rgba(0, 0, 0, 0.07);
  }

  &:active {
    color: ${Colors.white};
    background: ${Colors.mainBlack};
    box-shadow: none;
  }

  svg,
  path {
    ${getCurrentFillColor("red")}
    width: 16px;
    height: 19px;
  }
`;

export const TagBtnActive = styled(TagBtn)`
  background: ${Colors.mainBlack};
  color: ${Colors.white};
  ${getCurrentPaddingStyle('dog', 'horizontal')};
  ${getCurrentPaddingStyle('chicken', 'vertical')};
  border-radius: ${Radiuses.md};
  transition: all ${Duration.smHover};
  ${getCurrentFontStyle('subLittle')};
  ${getCurrentFontSizeStyle('subLittle')}
  font-weight: 500;
  display: flex;
  align-items: center;
  max-height: 50px;

  ${getCurrentGap('ant')}
  &:hover {
    color: ${Colors.white06};
    box-shadow: inset 0px 5px 4px rgba(0, 0, 0, 0.08), inset 0px 7px 10px rgba(0, 0, 0, 0.07);
  }
  @media screen and (max-width: ${Breakpoints.tabletSM}) {
    max-height: 45px;
    
  }

  &:active {
    color: ${Colors.mainBlack};
    background: ${Colors.white};
    box-shadow: none;
  }

  svg,
  path {
    ${getCurrentFillColor("red")}
    width: 16px;
    height: 19px;
  }
`;


export const TagBtnText = styled.div`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
`;

export const PlusBtn = styled(Button)<ButtonPropT>`
  background: ${Colors.red};
  border-radius: ${Radiuses.circle};
  transition: all ${Duration.smHover};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  &:hover {
    box-shadow: inset 0px 5px 4px rgba(255, 255, 255, 0.36), inset 0px 7px 10px rgba(255, 255, 255, 0.2);
  }

  &:active {
    box-shadow: none;
  }
  

  svg,
  path {
    ${getCurrentFillColor("white")}
    ${getCurrentStrokeColor("white")}
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: ${Breakpoints.desktopMD}) {
    height: 48px;
    width: 48px;
    svg,
    path {
      width: 16px;
      height: 16px;
    }
  }
`;


export const InfoBtn = styled(Button)<ButtonPropT>`
  background: ${Colors.white};
  border-radius: ${Radiuses.circle};
  transition: all ${Duration.smHover};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  &:hover {
    box-shadow: inset 0px 5px 4px rgba(0, 0, 0, 0.08), inset 0px 7px 10px rgba(0, 0, 0, 0.07);
  }

  &:active {
    box-shadow: none;
  }

  svg,
  path {
    ${getCurrentFillColor("red")}
    width: 30px;
    height: 25px;
  }
`;


type PriceBtnT ={
  isFull?: boolean
}
export const PriceBtn = styled(Button)<PriceBtnT>`
  background: ${Colors.white04};

  color: ${Colors.mainBlack};
  ${getCurrentPaddingStyle('dog', 'horizontal')};
  ${getCurrentPaddingStyle('chicken', 'vertical')};
  border-radius: ${Radiuses.lg};
  transition: all ${Duration.smHover};
  ${getCurrentFontStyle('subMain')};
  ${getCurrentFontSizeStyle('subMain')}
  display: flex;
  align-items: center;
  width: fit-content;
  height: 60px;

  ${getCurrentGap('ant')}
    //TODO: везде добавить fontSizeStyle 
  &:hover {
      //background: ${Colors.white};
  }

  span {
    ${getCurrentFontStyle('smallest')};
    ${getCurrentFontSizeStyle('subLittle')}
    text-decoration: line-through;
    color: ${Colors.red}
  }

  background: ${props => props.isFull && Colors.white};

  @media screen and (max-width: ${Breakpoints.desktopMD}) {
    height: 48px;
    font-size: 20px;
    padding-right: 13px;
    padding-left: 13px;
  }
  @media screen and (max-width: ${Breakpoints.desktopMD}) {
    width: 100%;
    justify-content: center;
    max-width: 220px;
  }
`;


export const CalcMaterialBtnActive = styled(Button)`
  border: 1px solid transparent;
  background: ${Colors.gradient_warm};
  color: ${Colors.white};
  ${getCurrentPaddingStyle('cat', 'horizontal')};
  ${getCurrentPaddingStyle('rat', 'vertical')};
  border-radius: ${Radiuses.xs};
  transition: all ${Duration.smHover};

  ${getCurrentFontStyle('little')}
  ${getCurrentFontSizeStyle('little')}
  &:hover {
    color: ${Colors.orange06};
      // background: ${Colors.orange};
    box-shadow: inset 0px 5px 4px rgba(255, 255, 255, 0.36), inset 0px 7px 10px rgba(255, 255, 255, 0.2);
  }

  &:active {
    color: ${Colors.white};
    background: ${Colors.gradient_warm};
    box-shadow: none;
  }
`;

export const CalcMaterialBtn = styled(CalcMaterialBtnActive)`
  background: ${Colors.transparent};
  color: ${Colors.orange};
  border: 1px solid ${Colors.orange}; 

  &:hover {
    color: ${Colors.white};
    background: ${Colors.orange};
    box-shadow: inset 0px 5px 4px rgba(255, 255, 255, 0.36), inset 0px 7px 10px rgba(255, 255, 255, 0.2);
  }

  &:active {
    box-shadow: none;
  }
`;




export const ToAllProductsButton = styled(Button)<ButtonPropT>`
  background: ${Colors.white};
  border-radius: ${Radiuses.circle};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  ${getCurrentFontStyle('subLittle')}
  ${getCurrentFontSizeStyle('subLittle')};
  cursor: pointer;
    transition: all ${Duration.lgHover};
  &:hover {
    color: ${Colors.white};
    background: ${Colors.blue}
  }
  &:active {
    color: ${Colors.mainBlack06};
    background: ${Colors.white}
  }

  


`;





export const BurgerBtn = styled(Button)`
  background: ${Colors.white};
  transition: all ${Duration.smHover};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 56px;
  height: 56px;
  svg, path {
    width: 20px;
    height: 20px;
  }

  ${getCurrentGap('butterfly')};


 
`;


