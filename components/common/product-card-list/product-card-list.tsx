import React, { useContext, useEffect } from 'react';
import { ProductCard } from "../product-card";
import { ProductCardListWrapper, ProductEmptyList } from "./product-card-list.style";
import { PropsContext } from "../../../store/propsContext/context";
import { useMatchQuery } from "../../../utils";


export const ProductCardList = ({curFilter, isCatalogPage = false, curShown = 4}) => {
  const context = useContext(PropsContext)
  const cards = context.products
  const isPhone = useMatchQuery('(max-width: 600px)')
  const isTablet = useMatchQuery('(max-width: 1024px)')

  const isPhoneWithoutHook = window.matchMedia('(max-width: 600px)').matches
  const isTabletWithoutHook = window.matchMedia('(max-width: 1024px)').matches

  const getFilteredCards = (arr) => {
    const filtered = curFilter === -1 ? arr :
      arr.filter(({ attributes }) => attributes.kategorii.data.id === curFilter)
    if(!isCatalogPage){
      if(isPhone) return filtered.slice(0, 4)
      else if (isTablet) return filtered.slice(0, 6)
      else return filtered.slice(0, 8)
    } else if(isCatalogPage){
        if(isPhoneWithoutHook) return filtered.slice(0, curShown)
        else if (isTabletWithoutHook) return filtered.slice(0, curShown)
        else return filtered.slice(0, curShown)
      }

  }

  return (
    <ProductCardListWrapper>
        {/*// @ts-ignore*/}
        {cards && !isCatalogPage && getFilteredCards(cards).map(({ id, attributes }) => {
          return (
            <>
              {
                attributes.showOnMain &&
                (<ProductCard
                  key={id}
                  id={id}
                  attributes={attributes}
                />)
              }
            </>
          )
        })}
      {cards && isCatalogPage && getFilteredCards(cards).map(({ id, attributes }) => {
        return (
          <>
            {
              (<ProductCard
                key={id}
                id={id}
                attributes={attributes}
              />)
            }
          </>
        )
      })}

        {!cards.length  &&
          (<ProductEmptyList>В данной категории нет товаров</ProductEmptyList>)
        }

    </ProductCardListWrapper>
  );
}
