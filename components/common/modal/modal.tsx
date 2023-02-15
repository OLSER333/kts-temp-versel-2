import {
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  ModalWrapper
} from "./modal.style";
import { Close } from "../../../assets";
import { FogTranstiion } from "../../design-system/fog-transition";


type ModalT = {
  isOpen: boolean,
  closeModal: () => void

  type: 'cart' | 'partner' | 'calc' | 'checkout' | 'detail'

}
export const Modal: React.FC<ModalT> = ({isOpen, closeModal, type}) => {



  return (

    <>
      <ModalOverlay isOpen={isOpen} onClick={() => closeModal()}/>
      <ModalWrapper isOpen={isOpen} showTitle={true} >
        <ModalHeader showTitle={true}>
          <ModalClose onClick={() => closeModal()} hoverBgColor={'white06'}>
            <Close/>
          </ModalClose>
          {/*  ModalTitle есть, если не отбивка или popup товара*/}
          <ModalTitle color={"blue"}>
            <p>Оформление<br/>заказа</p>
          </ModalTitle>
          {/*divider только в товарах*/}
          {/*<ModalDivider/>*/}
        </ModalHeader>
        <ModalContent>
          <FogTranstiion direction={"top"}/>

          {/*OrderList | Forms | Gratitude*/}
          {/*  взять бы формы с кинопоиска, да... фиг возьмёшь )*/}
          {/*<ModalForm formId={formId} />*/}
          {/*<ModalFormSend form={formId}>Отправить</ModalFormSend>*/}


          <FogTranstiion direction={"bottom"}/>
        </ModalContent>
        {/*  если отбивка - убираем все fixed rкнопки и внутрянку*/}

      </ModalWrapper>
    </>
  );
};

