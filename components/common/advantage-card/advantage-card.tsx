import React from "react";
import {
  AdvantageCardSubText,
  AdvantageCardText,
  AdvantageCardTextWrapper,
  AdvantageCardTitle,
  AdvantageCardWrapper, AdvantageTitleWrapper,
} from "./advantage-card.style";
import Image from 'next/image';
import { addressSite } from "../../../api/endpoints";
import skeleton from "../../../public/skeleton.svg";

type AdvantageCardPropT = {
  title: string;
  icon: string;
  color?: string;
  description: string;
  subDescription: string;
  isShown: boolean;
};
export const AdvantageCard: React.FC<AdvantageCardPropT> = (
  { description, subDescription, color, isShown, icon, title }
) => {

  return (

    <AdvantageCardWrapper isShown={isShown}>

      <AdvantageTitleWrapper>
        <Image src={`${addressSite}${icon}`}
               layout={"fixed"}
               width={50}
               placeholder={"blur"}
               blurDataURL={skeleton}
               height={50}/>
        <AdvantageCardTitle
          dangerouslySetInnerHTML={{ __html: title }}
          color={color}>
        </AdvantageCardTitle>
      </AdvantageTitleWrapper>


      <AdvantageCardTextWrapper>
        <AdvantageCardText dangerouslySetInnerHTML={{ __html: description }}/>
        <AdvantageCardSubText dangerouslySetInnerHTML={{ __html: subDescription }}/>
      </AdvantageCardTextWrapper>
    </AdvantageCardWrapper>
  )
    ;
}
