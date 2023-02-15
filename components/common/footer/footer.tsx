import React, { useContext } from 'react';
import {
  FooterBtnsWrapper,
  FooterContactLinks,
  FooterContacts, FooterDivider, FooterEndLabel, FooterEndLabelsWrapper,
  FooterInner, FooterMadeBy,
  FooterNav,
  FooterNavMain,
  FooterNavSub, FooterShareLinks,
  FooterWrapper
} from "./footer.style";
import { Logo } from "../../design-system";
import { CalcBtnWhite } from "../../design-system/button/button.style";
import { SocialIcon } from "../../design-system/social-icon";
import { Telegram, Vkontakte, WildBerries } from "../../../assets";
import { openModal } from "../../../store/modalsSlice";
import { useAppDispatch } from "../../../store/store";
import { EModalTypes } from "../../../store/types";
import { ENavLinks } from "../nav-header/nav-header";
import { PropsContext } from "../../../store/propsContext/context";
//@ts-nocheck
export const Footer = () => {
  const dispatch = useAppDispatch()

  const { footer, socialLinks } = useContext(PropsContext)

  return (
    <FooterWrapper >

      <FooterInner>
        {/*<FooterCol>*/}
          <Logo className={'footerLogo'} textColor={"black"} size={'footer'} >
            <span>Тепло<br/><i>Кварц</i></span>
          </Logo>
          <FooterShareLinks>
            <SocialIcon hoverBgColor={'wildBerriesHoverBg'} icon={<WildBerries/>} bgColor={'wildBerries'}
                        link='#'></SocialIcon>
            <SocialIcon hoverBgColor={'vkontakteHoverBg'} icon={<Vkontakte/>} bgColor={'vkontakteBg'}
                        link='#'></SocialIcon>
            <SocialIcon hoverBgColor={'telegramHoverBg'} icon={<Telegram/>} bgColor={'telegramBg'}
                        link='#'></SocialIcon>
            {/*{socialLinks.map(({id, socialNetworkLink, name, networkIcon}) => {*/}
            {/*  return (*/}
            {/*    <SocialIcon key={id} icon={networkIcon}/>}*/}
            {/*                link={`${socialNetworkLink}`}/>*/}
            {/*  )*/}
            {/*})}*/}
          </FooterShareLinks>
        {/*</FooterCol>*/}
        <FooterNav>
          <FooterNavMain>
            <a href={`#${ENavLinks.CATALOG}`}>каталог</a>
            <a href={`#${ENavLinks.ABOUT}`}>о нас</a>
            <a href={`#${ENavLinks.DELIVERY}`}>доставка</a>
            <a href={`#${ENavLinks.CONTACTS}`}>контакты</a>

          </FooterNavMain>
          <FooterNavSub>
            <button onClick={() => dispatch(openModal(EModalTypes.CART))}>Корзина</button>
            <a>карта филиалов</a>
          </FooterNavSub>
        </FooterNav>
        <FooterContacts>
          <FooterContactLinks>
            <a dangerouslySetInnerHTML={{__html: footer.email}} href={`mailto:${footer.email}`}/>
            <a dangerouslySetInnerHTML={{__html: footer.phone}} href={`tel:${footer.phone}`}/>
          </FooterContactLinks>
          <FooterBtnsWrapper>
            {/*// @ts-ignore*/}
            <CalcBtnWhite inFooter={true} onClick={() => dispatch(openModal(EModalTypes.CALC))}>Мне нужен просчет</CalcBtnWhite>
            {/*// @ts-ignore*/}
            <CalcBtnWhite inFooter={true} onClick={() => dispatch(openModal(EModalTypes.PARTNER))}>Стать партнером</CalcBtnWhite>
          </FooterBtnsWrapper>
        </FooterContacts>
      </FooterInner>

      <FooterDivider/>
      <FooterEndLabelsWrapper>
        <FooterEndLabel>© 2023 ТеплоКварц</FooterEndLabel>
        <FooterMadeBy>
          <a href="https://www.deviant-studio.com/" target="_blank" rel="noreferrer">
            <span>Made by </span> Deviant
          </a>
        </FooterMadeBy>
      </FooterEndLabelsWrapper>

    </FooterWrapper>
  );
};

