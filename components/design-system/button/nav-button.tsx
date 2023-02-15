import React, { MouseEvent } from 'react';
import { NavBtn } from "./button.style";

type NavBtnT = {
  children: string
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  href: string
  className?: string
}
export const NavButton: React.FC<NavBtnT> = ({children, onClick, href, className}) => {
  return (
      <NavBtn as='a' href={href} className={className} onClick={onClick}>
        {children}
      </NavBtn>
  );
};

