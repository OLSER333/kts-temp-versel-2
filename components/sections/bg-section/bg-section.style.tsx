import styled from "@emotion/styled";
import Image from "next/image";
import { Swiper } from "swiper/react";
import { Colors, getCurrentFontSizeStyle, getCurrentFontStyle, getCurrentMarginStyle } from "../../../styles";

type BgSectionWrapperT = {
  isActive?: boolean
}
export const BgSectionWrapper = styled.section<BgSectionWrapperT>`
  position: fixed;
  width: 100%;
  height: 100vh;
  transition: transform 0.6s;
  transform: scale(1.1);
  ${({ isActive }) => (isActive ? "transform: scale(1);" : "")}
`;

export const BgImg = styled(Image)`
  width: 100vw;
  height: 100vw;
  object-fit: cover;
`;

export const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  position: relative;

  .swiper-pagination {
    position: absolute;
    bottom: 150px;
    width: 100%;
    height: 10px;
    z-index: 1;
    display: flex;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    display: block;
    background: #ffffff;
    border-radius: 50%;
    margin-right: 10px;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #ff5c00;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  pointer-events: none;
`;

export const Stub = styled.div`
  width: 100%;
  height: 100vh;
`;

//@ts-nocheck
type SwiperTextT = {
  corner: string
}
export const SwiperText = styled.div<SwiperTextT>`
  width: 50%;
  position: absolute;
  ${getCurrentFontSizeStyle('slogan')}
  ${getCurrentFontStyle('slogan')}
  color: ${Colors.white};
  ${getCurrentMarginStyle('pig', 'horizontal')}
  right: ${props => props.corner === 'правый нижний' ? '0' : ''};  
  right: ${props => props.corner === 'правый верхний' ? '0' : ''};
  bottom: ${props => props.corner === 'правый нижний' ? '120px' : ''};
  top: ${props => props.corner === 'правый верхний' ? '120px' : ''};
  bottom: ${props => props.corner === 'левый нижний' ? '120px' : ''};
  top: ${props => props.corner === 'левый верхний' ? '120px' : ''};
  text-align: ${props => props.corner === 'правый верхний' ? 'right' : ''};
  text-align: ${props => props.corner === 'правый нижний' ? 'right' : ''};
  @media screen and (max-width: 600px) {
    width: 70%;
  }
`;


