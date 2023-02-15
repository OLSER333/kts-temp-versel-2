import React, { useContext } from 'react';
import {
  HeroDecorBadge,
  HeroDecorImg, HeroDecorImgInner,
  HeroDecorWrapper,
  HeroSectionWrapper, ThirdBlockSubTitle,
  ThirdBlockSubTitle2, ThirdBlockTitle
} from "./hero-section.style";
import { LogoBlack, Star } from "../../../assets";
import Image from "next/image";
import { PropsContext } from "../../../store/propsContext/context";
import { ENavLinks } from "../../common/nav-header/nav-header";
import { addressSite } from "../../../api/endpoints";

export const HeroSection = ({}) => {
  const { hero } = useContext(PropsContext)
  const {thirdBlockTitle,thirdBlockSubTitle2, thirdBlockSubTitle, showRoomImage } = hero
  return (
    <HeroSectionWrapper id={ENavLinks.ABOUT}>
      <HeroDecorWrapper>
        <HeroDecorImg>
          <HeroDecorImgInner>
            <Image
              src={`${addressSite}${showRoomImage.attributes.url}`}
              layout={"fill"}
              objectFit={"cover"}
              alt='Шоу-рум'/>
          </HeroDecorImgInner>
          <HeroDecorBadge>
            <Star/>
            <p>Шоурум со всем
              ассортиментом</p>
          </HeroDecorBadge>
        </HeroDecorImg>

      </HeroDecorWrapper>

      <LogoBlack className={'herologo'}/>
      <ThirdBlockTitle dangerouslySetInnerHTML={{__html: thirdBlockTitle}}/>
      <ThirdBlockSubTitle dangerouslySetInnerHTML={{__html: thirdBlockSubTitle}}/>
      <ThirdBlockSubTitle2 dangerouslySetInnerHTML={{__html: thirdBlockSubTitle2}}/>
    </HeroSectionWrapper>
  );
};

