import { PriceBtn } from "./button.style";
import { ReactNode } from "react";


type PriceButtonPropsT = {
  children: string | ReactNode
  className: string
  isFull?: boolean
}
export const PriceButton: React.FC<PriceButtonPropsT> = ({ children, className, isFull = false}) => {
  return (
    <PriceBtn className={className} isFull={isFull}>
      {children}
    </PriceBtn>
  )
};