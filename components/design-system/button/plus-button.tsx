import React, { MouseEvent } from 'react';
import { PlusBtn } from "./button.style";
import { Plus } from "../../../assets";

type PlusBtnT = {
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  className?: string
  ref?:  React.MutableRefObject<null>
}
export const PlusButton: React.FC<PlusBtnT> = ({onClick, className, ref}) => {
  return (
    <PlusBtn className={className} onClick={onClick} ref={ref}>
        <Plus/>
    </PlusBtn>
  );
};

