import React from 'react';
import { HidingWrapperNavList, NavList } from "./nav-header.style";
import { NavButton } from "../../design-system";
import { closeAllModals } from "../../../store/modalsSlice";
import { useAppDispatch } from "../../../store/store";
import { useMatchQuery } from "../../../utils";


export enum ENavLinks {
  CATALOG = 'catalog',
  ABOUT = 'about',
  DELIVERY = 'delivery',
  CONTACTS = 'contacts',
}

type NavHeaderT ={
  isOpen?: boolean
}
export const NavHeader:React.FC<NavHeaderT> = ({isOpen}) => {
  const links = [

    {
      text: 'каталог',
      href: `#${ENavLinks.CATALOG}`
    },
    {
      text: 'о нас',
      href: `#${ENavLinks.ABOUT}`
    },
    {
      text: 'доставка',
      href: `#${ENavLinks.DELIVERY}`
    },
    {
      text: 'контакты',
      href: `#${ENavLinks.CONTACTS}`
    },
  ]
  const dispatch = useAppDispatch()

  const tabletLG = useMatchQuery('(max-width: 1024px)')

  return (
      <NavList isOpen={isOpen}>
        {links.map(({ text, href }) => (
          <NavButton onClick={() => dispatch(closeAllModals())} key={text} href={href}>{text}</NavButton>
        ))}
      </NavList>
  );
};
