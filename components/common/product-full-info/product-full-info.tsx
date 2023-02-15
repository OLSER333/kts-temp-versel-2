//@ts-nocheck
import { PlusButton } from "../../design-system";
import {
  ProductCardButtonsInnerWrapper,
  ProductCardCategoryNew,
  ProductCardCategorySale,
  ProductCardCategoryWrapper
} from "../product-card/product-card.style";
import { useAppDispatch } from "../../../store/store";
import {
  ProductAbout, ProductAboutText, ProductAttrCell, ProductAttrCellOrange, ProductAttributes, ProductAttrRow,
  ProductFullButtons,
  ProductFullImg,
  ProductFullTitle,
  ProductFullWrapper,
  ProductPaddingWrapper
} from "./product-full-info.style";
import { PriceButton } from "../../design-system/button/price-burron";
import Image from 'next/image'
import { ModalDivider } from "../modal/modal.style";
import { addToCart } from "../../../store/cartSlice";
import { PropsContext } from "../../../store/propsContext/context";
import { useContext } from "react";
import { addressSite } from "../../../api/endpoints";
import { Skeleton } from "../../../assets";
import imgStub from "../../../assets/images/bg-room.png";
import { ymAddedToCart } from "../../../utils/yandex-metrika";

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


export const ProductFull: React.FC = ({ id, attributes }) => {
  const {
    description,
    isSale,
    name,
    price,
    originalPrice,
    image,
    isNew,
    kategorii,
    attributes: properties
  } = attributes
  const dispatch = useAppDispatch()

  const sendToCart = () => {
    dispatch(addToCart(id))
    ymAddedToCart()
    //del await
  }

  const { categories } = useContext(PropsContext)


  const getLabelCategory = () => {
    return categories.filter(el => el.id === kategorii.data.id)[0].attributes.name
  }

  const showOnHover = 'showOnHover'
  const whiteOnHover = 'whiteOnHover'
  return (
    <ProductFullWrapper>

      <ProductFullImg>
        <Image
          src={`${addressSite}${image.data.attributes.url}`} layout={"responsive"}
          blurDataURL={'../../public/skeleton.svg'}
          placeholder={"blur"}
          height={1}
          width={1.66}
          objectFit={"cover"}
          alt={'img'}/>
      </ProductFullImg>
      <ProductPaddingWrapper>
        <ProductCardCategoryWrapper isFull={true}>
          {getLabelCategory()}
          {isNew && <ProductCardCategoryNew>NEW</ProductCardCategoryNew>}
          {isSale && <ProductCardCategorySale>SALE</ProductCardCategorySale>}
        </ProductCardCategoryWrapper>

        <ProductFullTitle>
          {name}
        </ProductFullTitle>

        <ModalDivider/>

        <ProductAbout>о товаре </ProductAbout>

        <ProductAboutText dangerouslySetInnerHTML={{ __html: description }}/>

        <ModalDivider/>

        <ProductAbout>характеристики</ProductAbout>

        <ProductAttributes>
          <ProductAttrRow key={0}>
            <ProductAttrCellOrange>Название параметра</ProductAttrCellOrange>
            <ProductAttrCellOrange>Значение</ProductAttrCellOrange>
          </ProductAttrRow>
          {properties.map(({ id, name, value }) => {
            return (
              <ProductAttrRow key={id}>
                <ProductAttrCell>{name}</ProductAttrCell>
                <ProductAttrCell>{value}</ProductAttrCell>
              </ProductAttrRow>
            )
          })}
        </ProductAttributes>


      </ProductPaddingWrapper>

      <ProductFullButtons>
        <PriceButton className={whiteOnHover} isFull={true}>
          {price && price + '₽'}
          {originalPrice && <span>{originalPrice}₽</span>}
        </PriceButton>
        <ProductCardButtonsInnerWrapper className={showOnHover}>
          <PlusButton onClick={() => sendToCart()}/>
        </ProductCardButtonsInnerWrapper>
      </ProductFullButtons>

    </ProductFullWrapper>
  );
};
