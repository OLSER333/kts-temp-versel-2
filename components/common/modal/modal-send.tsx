import React, { useEffect, useState } from 'react';
import {
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  ModalWrapper
} from "./modal.style";
import { Close } from "../../../assets";
import { ModalForm } from "../modal-form";
import { FogTranstiion } from "../../design-system/fog-transition";
import { ModalFormSend } from "../modal-form/modal-form.style";
import { v4 as uuid } from "uuid";
import { getIsOpen, useNoScroll } from "../../../utils";
import { Colors } from "../../../styles";
import { ModalGratitude } from "./modal-gratitude";
import { EModalTypes } from "../../../store/types";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { closeAllModals } from "../../../store/modalsSlice";


type ModalSendT = {
  type: EModalTypes.PARTNER | EModalTypes.CALC | EModalTypes.CHECKOUT

}

enum EfilialOrText {
  filial = 'filial',
  text = 'text',
}

export enum EModalForm {
  ORDER = 'ORDER',
  CALCULATION = 'CALCULATION',
  BECOME_PARTNER = 'BECOME_PARTNER'

}

export type ModalTypeFormT = EModalForm.BECOME_PARTNER | EModalForm.ORDER | EModalForm.CALCULATION

export const ModalSend: React.FC<ModalSendT> = ({ type }) => {

  const { modalList } = useAppSelector(state => state.modals)
  const dispatch = useAppDispatch()
  const [ isOpen, setIsOpen ] = useState<boolean>(getIsOpen(modalList, type))

  // useNoScroll(isOpen)


  useEffect(() => {
    setIsOpen(getIsOpen(modalList, type))
  }, [ modalList, type ])


  const modalData = {
    checkout: {
      themeColor: Colors.orange as string,
      title: <p>Оформление<br/>заказа</p>,
      filialOrText: EfilialOrText.filial,
      btnText: 'Оформить заказ',
      typeOfForm: 'ORDER' as ModalTypeFormT
    },
    partner: {
      themeColor: Colors.orange as string,
      title: <p>Стать<br/>партнёром</p>,
      filialOrText: EfilialOrText.text,
      btnText: 'Отправить',
      typeOfForm: 'BECOME_PARTNER' as ModalTypeFormT
    },
    calc: {
      themeColor: Colors.blue as string,
      title: <p>Мне нужен<br/>подробный просчет</p>,
      filialOrText: EfilialOrText.text,
      btnText: 'Мне нужен просчёт',
      typeOfForm: 'CALCULATION' as ModalTypeFormT
    },
  }
  const formId = uuid()

  const [ step, setStep ] = useState<number>(0)
  const [ success, setSuccess ] = useState<boolean>(false)

  const showGratitude = (isSuccess: boolean) => {
    setSuccess(isSuccess)
    setStep(prev => prev + 1)
    setTimeout(() => {
      dispatch(closeAllModals())
      setStep(0)
    }, 3000)
  }

  return (

    <>
      <ModalOverlay isOpen={isOpen} onClick={() => dispatch(closeAllModals())}>

      </ModalOverlay>
      <ModalWrapper isOpen={isOpen} showTitle={true}>
        <ModalHeader showTitle={true}>
          <ModalClose onClick={() => dispatch(closeAllModals())} hoverBgColor={'white06'}>
            <Close/>
          </ModalClose>
          {step === 0 &&
              <ModalTitle color={modalData[type].themeColor}>
                {modalData[type].title}
              </ModalTitle>
          }
        </ModalHeader>

        <ModalContent>
          <FogTranstiion direction={"top"}/>
          {step === 0 && (
            <>
              <ModalForm formType={modalData[type].typeOfForm} onSetStep={(isSuccess) => showGratitude(isSuccess)} formId={formId} filialOrText={modalData[type].filialOrText}/>
              <ModalFormSend themeBgColor={modalData[type].themeColor}
                             form={formId}>{modalData[type].btnText}</ModalFormSend>
            </>
          )}
          {step === 1 && (
            <>
              <ModalGratitude success={success}/>
            </>
          )}
          <FogTranstiion direction={"bottom"}/>
        </ModalContent>

      </ModalWrapper>
    </>
  );
};

