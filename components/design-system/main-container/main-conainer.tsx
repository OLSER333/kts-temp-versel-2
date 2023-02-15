import { MainContainerPropT } from "./types";
import { MainContainerWrapper } from "./main-conainer.style";
import { useEffect, useState } from "react";
import { closeAllModals, openModal } from "../../../store/modalsSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { EModalTypes } from "../../../store/types";
import { useRouter } from "next/router";
import { Colors } from "../../../styles";

// @ts-ignore
export const MainContainer: React.FC<MainContainerPropT> = ({ children, isCatalogPage, ...props }) => {
  const router = useRouter()

  if(isCatalogPage) document.body.style.background = `${Colors.back}`
  else if(isCatalogPage) document.body.style.background = `${Colors.white}`

  const dispatch = useAppDispatch()
  // пытался убрать скролл при открытии одной модалки через другую
  const {modalList} = useAppSelector(state => state.modals)
  useEffect(() => {
    setAnyIsOpen(modalList.filter(el => el.isOpen === true)[0]?.isOpen || false)
  }, [ modalList ])

  const [ anyIsOpen, setAnyIsOpen ] = useState<boolean>(modalList.filter(el => el.isOpen === true)[0]?.isOpen || false)
  useEffect(() => {
    if (anyIsOpen) {
      const body = document.body;
      body.classList.add('no-scroll')
    } else {
      const beforeQueryAdd = window.scrollY
      if(router.query.orderId) {
        router.push(router.pathname).then(data => {
          dispatch(closeAllModals())
          scrollTo(0, beforeQueryAdd)
        })
      }

      document.body.classList.remove('no-scroll');
    }
  }, [anyIsOpen])

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(closeAllModals())
      }
    }
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('keydown', onEscape)
    }
  }, [])
  return (
    <MainContainerWrapper isCatalogPage={isCatalogPage} {...props}>
      {children}
    </MainContainerWrapper>
  );
}

