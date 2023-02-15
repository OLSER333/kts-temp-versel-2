import React, { useContext } from 'react';
import { DeliveryCardListWraper } from "./delivery-card-list.style";
import { DeliveryCard } from "../../design-system/delivery-card";
import { PropsContext } from "../../../store/propsContext/context";

export const DeliveryCardList = () => {
  const { orderCards } = useContext(PropsContext)
  return (
    <DeliveryCardListWraper>
      {orderCards.map(({ textColor, text, id, imageUrl, borderColor }) => {
        return (
          <DeliveryCard
            key={id}
            // @ts-ignore
            textColor={textColor}
            borderColor={borderColor}
            text={text}
            icon={imageUrl ? imageUrl.data.attributes.url : ''}
          />
        )
      })}
    </DeliveryCardListWraper>
  );
};
