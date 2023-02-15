import React from 'react';
import { DeliverySectionWrapper } from "./delivery.style";
import { DeliveryCardList } from "../../common/delivery-card-list";
import { ENavLinks } from "../../common/nav-header/nav-header";
import { HeaderText } from "../../design-system/header-text/header-text";

export const Delivery = () => {
  return (
    <DeliverySectionWrapper id={ENavLinks.DELIVERY}>
      <HeaderText>Заказ передаётся в доставку после
        подтверждения онлайн-оплаты.</HeaderText>
      <DeliveryCardList/>
    </DeliverySectionWrapper>
  );
};

