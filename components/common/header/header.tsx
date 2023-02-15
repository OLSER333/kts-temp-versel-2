import React, { useEffect, useState } from 'react';
import { HeaderWrapper } from "./header.style";
import { Logo } from "../../design-system";
import { CartAndPartner } from "../cart-and-partner";
import { NavHeader } from "../nav-header";
import { getIsOpen, useMatchQuery } from "../../../utils";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { BurgerBtn } from "../../design-system/button/button.style";
import { EModalTypes } from "../../../store/types";
import {
  closeAllModals,
  openModal,
  setBlackLogo,
  setHeaderBack,
  setWhiteLogo,
  unsetHeaderBack
} from "../../../store/modalsSlice";
import { ModalOverlay } from "../modal/modal.style";
import { BurgerCross, BurgerIcon } from "../../../assets";
import { Breakpoints } from "../../../styles";
import { useRouter } from "next/router";

export const Header = ({ isCatalogPage = false }) => {
  const router = useRouter()
  const isPhone = useMatchQuery(`(max-width: ${Breakpoints.phone}`)
  const { modalList, headerLogoIsBlack, headerHasBack } = useAppSelector(state => state.modals)
  const type = EModalTypes.BURGER
  const dispatch = useAppDispatch()
  const [ isOpen, setIsOpen ] = useState<boolean>(getIsOpen(modalList, type))
  const [ anyIsOpen, setAnyIsOpen ] = useState<boolean>(modalList.filter(el => el.isOpen === true)[0]?.isOpen || false)


  useEffect(() => {
    setAnyIsOpen(modalList.filter(el => el.isOpen === true)[0]?.isOpen || false)
  }, [ modalList ])

  useEffect(() => {
    if(isCatalogPage) {
      if (isPhone && anyIsOpen) {
        dispatch(setBlackLogo())
      } else if (isPhone && headerHasBack) {
        dispatch(setBlackLogo())
      } else if (!isPhone && anyIsOpen) {
        dispatch(setWhiteLogo())
      } else if (!isPhone && !anyIsOpen) {
        dispatch(setBlackLogo())
      }
    }

    if (isPhone && anyIsOpen) {
      dispatch(setBlackLogo())
    } else if (isPhone && headerHasBack) {
      dispatch(setBlackLogo())
    } else if (isPhone && !anyIsOpen && !headerHasBack) {
      dispatch(setWhiteLogo())
    } else if (!isPhone && anyIsOpen && !headerHasBack) {
      dispatch(setWhiteLogo())
    } else if (!isPhone && !anyIsOpen && headerHasBack) {
      dispatch(setBlackLogo())
    } else if (!isPhone && !anyIsOpen && !headerHasBack) {
      dispatch(setWhiteLogo())
    }
  }, [ anyIsOpen, headerHasBack ])
  useEffect(() => {
    if (isCatalogPage) {
      if (!isPhone && anyIsOpen) {
        dispatch(unsetHeaderBack())
      } else {
        dispatch(setHeaderBack())
      }
    } else {
      const needBackOnScroll = (document.documentElement.scrollTop > document.documentElement.clientHeight)
      if (!isPhone && anyIsOpen && needBackOnScroll) {
        dispatch(unsetHeaderBack())
      } else if (!isPhone && !anyIsOpen && needBackOnScroll) {
        dispatch(setHeaderBack())
      }
    }
  }, [ anyIsOpen ])


  useEffect(() => {
    setIsOpen(getIsOpen(modalList, type))
  }, [ modalList, type ])


  const tabletLG = useMatchQuery('(max-width: 1024px)')

  const toggleBurger = () => {
    isOpen ? dispatch(closeAllModals()) : dispatch(openModal(EModalTypes.BURGER))
  }

  /////////////////////////
  // работа header logo color & bg


  useEffect(() => {
    const onScroll = () => {
      if (isCatalogPage) {

      } else {
        const needBack = (document.documentElement.scrollTop > document.documentElement.clientHeight)
        if (needBack && (!anyIsOpen && !isPhone) && !router.query.orderId) {
          dispatch(setHeaderBack())
        } else if (needBack && isPhone) {
          dispatch(setHeaderBack())
        } else if (!needBack) {
          dispatch(unsetHeaderBack())
        }
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);


  ////////////////////

  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={() => dispatch(closeAllModals())}/>
      <HeaderWrapper hasBackground={headerHasBack} isPhone={isPhone}>
        {tabletLG &&
            <BurgerBtn onClick={() => toggleBurger()}>
              {isOpen ? <BurgerCross/> : <BurgerIcon/>}
            </BurgerBtn>}
        <Logo size={'header'} textColor={'white'}
              isOpen={isOpen}
              isPhone={isPhone}
              logoIsBlack={headerLogoIsBlack}>
          <span>Тепло
            <i style={{ display: `${tabletLG ? 'block' : 'inline'}` }}>Кварц</i>
          </span>
        </Logo>
        <NavHeader isOpen={isOpen}/>
        <CartAndPartner isOpen={isOpen}/>

      </HeaderWrapper>
    </>
  );
};

