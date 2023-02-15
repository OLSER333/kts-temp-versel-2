import { CartAndPartnerWrapper } from "./cart-and-partner.style";
import { CartButton } from "../../design-system";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { closeAllModals, openModal } from "../../../store/modalsSlice";
import { EModalTypes } from "../../../store/types";
import { PartnerBtnHeader } from "../../design-system/button/button.style";
import { useEffect, useState } from "react";
import { getIsOpen, useNoScroll } from "../../../utils";

type CartAndPartnerT = {
  isOpen?: boolean
}
export const CartAndPartner: React.FC<CartAndPartnerT> = ({isOpen}) => {


  const dispatch = useAppDispatch()
  const { cartList  } = useAppSelector(state => state.cart)
  const { modalList } = useAppSelector(state => state.modals)
  const [ cartIsOpen, setCartIsOpen ] = useState<boolean>(getIsOpen(modalList, EModalTypes.CART))

  useEffect(() => {
    setCartIsOpen(getIsOpen(modalList, EModalTypes.CART))
  }, [ modalList ])

  const toggleCart = () => {
    cartIsOpen ? dispatch(closeAllModals()) :  dispatch(openModal(EModalTypes.CART))
  }

  return (
    <CartAndPartnerWrapper>
      <PartnerBtnHeader isOpen={isOpen} onClick={() => dispatch(openModal(EModalTypes.PARTNER))}
      >партнёрам
      </PartnerBtnHeader>
      <CartButton onClick={() => toggleCart()} count={cartList.length}>корзина</CartButton>
    </CartAndPartnerWrapper>
  );


};

