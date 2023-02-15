import { ModalCart, ModalDetail, ModalSend } from "../../common/modal";
import { useAppDispatch } from "../../../store/store";
import { EModalTypes } from "../../../store/types";

export const ModalsSection = () => {
  return (
    <>
      <ModalSend type={EModalTypes.CHECKOUT}/>
      <ModalSend type={EModalTypes.PARTNER}/>
      <ModalSend type={EModalTypes.CALC}/>
      <ModalCart type={EModalTypes.CART}/>
      <ModalDetail type={EModalTypes.DETAIL}/>
    </>
  );
};

