//@ts-nocheck
import React, { useContext, useEffect, useState } from 'react';
import {
  ModalClose,
  ModalContent, ModalDetailFull,
  ModalHeader,
  ModalOverlay,
} from "./modal.style";
import { Close } from "../../../assets";
import { FogTranstiion } from "../../design-system/fog-transition";
import { getIsOpen } from "../../../utils";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { EModalTypes, ModalTypesT } from "../../../store/types";
import { closeAllModals, openModal, setCurrentDetailId } from "../../../store/modalsSlice";
import { PropsContext } from "../../../store/propsContext/context";
import { ProductFull } from "../product-full-info";
import { useRouter } from "next/router";

type ModalT = {
  type: ModalTypesT


}
export const ModalDetail: React.FC<ModalT> = ({ type }) => {
  const context = useContext(PropsContext)
  const { modalList, currentDetailId } = useAppSelector(state => state.modals)
  const dispatch = useAppDispatch()
  const [ isOpen, setIsOpen ] = useState<boolean>(getIsOpen(modalList, type))

  const router = useRouter()
  useEffect(() => {
    const openOrder = async () => {
      // console.log('router.query.orderId', router.query.orderId !== undefined)
      // console.log('router.query.orderId', router)
      if (router && router.query.orderId !== undefined) {
        await dispatch(setCurrentDetailId(Number(router.query.orderId)))
        setTimeout(() => {
          dispatch(openModal(EModalTypes.DETAIL))
        }, 0)
      }
    }
    openOrder()
  }, [ router ])
  const getCurDetailInfo = () => {
    //@ts-ignore
    return context.products.filter(product => currentDetailId === product.id)[0]
  }
  const [ detailInfo, setDetailInfo ] = useState(getCurDetailInfo())

  useEffect(() => {
    setDetailInfo(getCurDetailInfo())
    setIsOpen(getIsOpen(modalList, type))
  }, [ modalList, type, currentDetailId ])

  const closeDetail = () => {
    dispatch(closeAllModals())
  }

  return (

    <>
      <ModalOverlay isOpen={isOpen} onClick={() => dispatch(closeAllModals())}/>
      <ModalDetailFull isFull={true} isOpen={isOpen} showTitle={true}>
        <ModalHeader showTitle={false}>
          <ModalClose onClick={() => closeDetail()} hoverBgColor={'white06'}>
            <Close/>
          </ModalClose>
        </ModalHeader>
        <ModalContent>

          {detailInfo && <ProductFull id={detailInfo.id} attributes={detailInfo.attributes}/>}

          <FogTranstiion direction={"bottom"}/>
        </ModalContent>
      </ModalDetailFull>
    </>
  );
};

