import React, { useContext } from 'react';
import Image from "next/image";
import imgStub from '../../../assets/images/bg-room.png'
import {
  CardOrderDelete, CardOrderMoreAbout,
  CartOrderButtons, CartOrderColumn,
  CartOrderImg, CartOrderInner,
  CartOrderPriceAndButtons,
  CartOrderWrapper
} from "./cart-order.style";
import {
  ProductCardCategoryNew,
  ProductCardCategorySale,
  ProductCardCategoryWrapper
} from "../product-card/product-card.style";
import { ProductFullTitle } from "../product-full-info/product-full-info.style";
import { PriceButton } from "../../design-system/button/price-burron";
import { useAppDispatch } from "../../../store/store";
import { openModal, setCurrentDetailId } from "../../../store/modalsSlice";
import { EModalTypes } from "../../../store/types";
import { delFromCart } from "../../../store/cartSlice";
import { PropsContext } from "../../../store/propsContext/context";
import { useRouter } from "next/router";
import skeleton from "../../../public/skeleton.svg";
import { ymOpenGoods, ymRemovedFromCart } from "../../../utils/yandex-metrika";

//@ts-nocheck
type cartOrderT = {
  id: number,
  attributes: {
    isNew: boolean
    isSale: boolean
    name: string
    originalPrice: number
    price: number
  }

}// @ts-nocheck
// @ts-ignore
export const CartOrder: React.FC = ({id, attributes}) => {
  const { isSale, name, price, originalPrice, isNew, kategorii} = attributes
  const dispatch = useAppDispatch()
  const {categories} = useContext(PropsContext)

  const router = useRouter()

  const getLabelCategory = () => {
    return categories.filter(el => el.id === kategorii.data.id)[0].attributes.name
  }
  const sendDetailAndOpen = () => {
    dispatch(setCurrentDetailId(id))
    const beforeQueryAdd = window.scrollY
    router.query.orderId = `${id}`
    router.push(router).then(data => {
      dispatch(openModal(EModalTypes.DETAIL))
      scrollTo(0, beforeQueryAdd)
    })
    ymOpenGoods()
  }

  const onDeleteFromCard = () => {
    dispatch(delFromCart(id))
    ymRemovedFromCart()
  }

  return (

    <CartOrderWrapper>
     <CartOrderInner>
       <CartOrderImg >
         <Image placeholder={"blur"} blurDataURL={skeleton} src={imgStub} layout={"responsive"} objectFit={"cover"}
                alt={'img'}/>
       </CartOrderImg>
       <CartOrderColumn>
         <ProductCardCategoryWrapper isFull={true}>
           {getLabelCategory()}
           {isNew && <ProductCardCategoryNew>NEW</ProductCardCategoryNew>}
           {isSale && <ProductCardCategorySale>SALE</ProductCardCategorySale>}
         </ProductCardCategoryWrapper>

         <ProductFullTitle>
           {name}
         </ProductFullTitle>
       </CartOrderColumn>
     </CartOrderInner>

      <CartOrderPriceAndButtons>
        <PriceButton className={'whiteOnHover'} isFull={true}>
          {price && price + '₽'}
          {originalPrice && <span>{originalPrice}₽</span>}
        </PriceButton>
        <CartOrderButtons>

          <CardOrderMoreAbout onClick={() => sendDetailAndOpen()} >подробнее о товаре </CardOrderMoreAbout>
          <CardOrderDelete onClick={() => onDeleteFromCard()}>удалить</CardOrderDelete>
        </CartOrderButtons>

      </CartOrderPriceAndButtons>
    </CartOrderWrapper>
  );
};

