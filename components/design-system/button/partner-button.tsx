import React, { MouseEvent } from 'react';
import { PartnerBtn } from "./button.style";

type PartnerBtnT = {
  children: string
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
export const PartnerButton: React.FC<PartnerBtnT> = ({ children, onClick }) => {



  return (
    <PartnerBtn onClick={onClick}>
      {children}
    </PartnerBtn>
  );
};

