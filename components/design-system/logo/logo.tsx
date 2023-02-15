import React, { ReactNode } from 'react';
import Link from "next/link";
import { Color } from "../../../styles";
import { LogoIcon, LogoWrapper } from "./logo.style";

type LogoPropsT = {
  children: string | ReactNode,
  textColor: Color
  size: 'footer' | 'header'
  isOpen?: boolean
  className?: string
  logoIsBlack?: boolean
  isPhone?: boolean
}

export const Logo: React.FC<LogoPropsT> = ({ textColor, children, size, isOpen, className, logoIsBlack, isPhone }) => {
  return (
    <Link href={'/'}>
      {/*@ts-ignore*/}
      <LogoWrapper className={className}
                   isOpen={isOpen}
                   logoIsBlack={logoIsBlack}
                   color={textColor} size={size}
                   href={'/'} isPhone={isPhone}>
        <LogoIcon size={size}/>
        {children}
      </LogoWrapper>
    </Link>
  );
};

