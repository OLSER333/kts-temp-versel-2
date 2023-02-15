import React from 'react';
import { ModalGratitudeInner, ModalGratitudeWrapper } from "./modal.style";
import { FireGradient } from "../../../assets";

type ModalGratitudeT = {
  success: boolean
}
export const ModalGratitude: React.FC<ModalGratitudeT> = ({ success }) => {

  return (
    <>
      {
        success ? (
          <ModalGratitudeWrapper>
            <ModalGratitudeInner>
              спасибо! {<FireGradient/>}
            </ModalGratitudeInner>
            мы свяжемся с вами в ближайшее время
          </ModalGratitudeWrapper>
        ) : (
          <ModalGratitudeWrapper>
            <ModalGratitudeInner>
              Что-то пошло не так
            </ModalGratitudeInner>
            Попробуйте перезагрузить страницу
          </ModalGratitudeWrapper>
        )
      }
    </>
  );
};

