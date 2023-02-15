import {
  ProductCardButtonsInnerWrapper,
  ProductCardButtonsWrapper, ProductCardCategoryNew, ProductCardCategorySale,
  ProductCardCategoryWrapper,
  ProductCardImgWrapper,
  ProductCardWrapper
} from "./product-card.style";
import Image from "next/image";
import skeleton from '../../../public/skeleton.svg'
import { PriceButton } from "../../design-system/button/price-burron";
import {  PlusButton } from "../../design-system";
import {  openModal, setCurrentDetailId } from "../../../store/modalsSlice";
import { EModalTypes } from "../../../store/types";
import { useAppDispatch } from "../../../store/store";
import { addToCart } from "../../../store/cartSlice";
import { addressSite } from "../../../api/endpoints";
import { useContext } from "react";
import { PropsContext } from "../../../store/propsContext/context";
import { useRouter } from "next/router";
import { ymOpenGoods } from "../../../utils/yandex-metrika";


type ProductCartPropsT = {
  id: number,
  attributes: {
    description: string
    isNew: boolean
    isSale: boolean
    name: string
    originalPrice: number
    price: number
    showOnMain: boolean
  }
}

export const ProductCard = ({ id,attributes }) => {
  const { isSale, name, price, originalPrice, isNew, image, attributes: tableData, kategorii } = attributes
  const {categories} = useContext(PropsContext)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const clickCard = (e) => {
    if(!e.target?.closest('.plusButton')) {
      dispatch(setCurrentDetailId(id))
      const beforeQueryAdd = window.scrollY
      router.query.orderId = `${id}`
      router.push(router).then(data => {
        dispatch(openModal(EModalTypes.DETAIL))
        scrollTo(0, beforeQueryAdd)
      })
      ymOpenGoods()
    }
  }
  const getLabelCategory = () => {
    return categories.filter(el => el.id === kategorii.data.id)[0].attributes.name
  }

  const showOnHover = 'showOnHover'
  const whiteOnHover = 'whiteOnHover'
  return (
    <ProductCardWrapper onClick={(e) => clickCard(e)}>

      <ProductCardImgWrapper>
        <Image src={`${addressSite}${image.data.attributes.url}`}
               placeholder={"blur"}
               blurDataURL={skeleton}
               layout={"fill"}
               objectFit={"cover"}
               alt={'img'}/>
      </ProductCardImgWrapper>
      <ProductCardCategoryWrapper>
        {getLabelCategory()}
        {isNew && <ProductCardCategoryNew>NEW</ProductCardCategoryNew>}
        {isSale && <ProductCardCategorySale>SALE</ProductCardCategorySale>}
      </ProductCardCategoryWrapper>

      <u>{name}</u>

      <ProductCardButtonsWrapper>
        <PriceButton className={whiteOnHover}>
          {price && price + '₽'}
          {originalPrice && <span>{originalPrice}₽</span>}
        </PriceButton>
        <ProductCardButtonsInnerWrapper className={ `${showOnHover} showAlways`}>
          {/*<InfoButton />*/}
          <PlusButton  className='plusButton' onClick={() => dispatch(addToCart(id))}/>
        </ProductCardButtonsInnerWrapper>
      </ProductCardButtonsWrapper>

    </ProductCardWrapper>
  );
};
