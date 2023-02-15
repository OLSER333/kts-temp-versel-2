import React, { useEffect, useRef } from 'react';
import { CalcBtnColdFixed } from "./button.style";
import { useAppDispatch } from "../../../store/store";
import { openModal } from "../../../store/modalsSlice";
import { EModalTypes } from "../../../store/types";

export const FixedCalcBtn = ({ needHidden }) => {

  const dispatch = useAppDispatch()
// @ts-ignore
  return (<CalcBtnColdFixed hidden={needHidden} onClick={() => dispatch(openModal(EModalTypes.CALC))}>
        Мне нужен просчет
      </CalcBtnColdFixed>

  );
};
