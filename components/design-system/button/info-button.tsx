import { MouseEvent } from 'react';
import { InfoBtn } from "./button.style";
import { InfoLetter } from "../../../assets";

type InfoBtnPropsT = {
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  className?: string
}
export const InfoButton: React.FC<InfoBtnPropsT> = ({onClick, className}) => {
  return (
    <InfoBtn className={className} onClick={onClick} >
      <InfoLetter/>
    </InfoBtn>
  );
};

